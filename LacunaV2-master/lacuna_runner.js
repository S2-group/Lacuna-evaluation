/**
 * Entrypoint of LacunaJS
 * 
 * @author
 * Kishan Nirghin
 * 
 * @description
 * This file is mainly responsible for parsing all commandline arguments
 * The real logic of lacuna is implemented in lacunizer.js
 */

'use strict';

require("./prototype_extension");

const logger = require("./_logger");
const lacunizer = require("./lacunizer");
const lacunaNormalizer = require("./lacuna_normalizer");

const fs = require('fs-extra'),
    path = require('path'),
    Confirm = require('prompt-confirm');

const lacunaSettings = require("./_settings");

async function run(passedRunOptions, callback) {
    /* Default run options */
    let runOptions = {
        analyzer: null,
        entry: "index.html",
        destination: null,
        logfile: "lacuna.log",
        timeout: null,
        olevel: 0,
        force: false,

        /* debug options */
        normalizeOnly: false, /* TODO cannot be used icw assumeNormalization */
        assumeNormalization: false /* TODO only makes sense if there is a complete lacuna cache present */
    };
    
    if (!passedRunOptions) { throw logger.error("Invalid runOptions"); }
    runOptions.extend(passedRunOptions); /* extend default with new options */

    try { /* Verify all runtime options */
        await verifyRunOptions(runOptions);
    } catch (e) { return callback(null); }
    logger.debug("runOptions verified");

    try { /* Setup before running Lacuna */
        finalizeRunOptions(runOptions);
    } catch (e) { logger.error(e); return callback(null); }
    logger.debug("runOptions: " + JSON.stringify(runOptions));

    /* Normalize scripts to work with Lacuna */
    if (!runOptions.assumeNormalization) {
        lacunaNormalizer(runOptions.directory, runOptions.entry);
        if (runOptions.normalizeOnly) {
            logger.info("Lacuna Normalization-Only Complete");
            return callback(null);
        }

    }

    logger.verbose("Starting Lacuna");
    startLacuna(runOptions, callback);
    
    
}

/**
 * Some things that have to be handled before Lacuna can be ran
 */
function finalizeRunOptions(runOptions) {
    if (runOptions.destination) { runOptions.destination = path.normalize(runOptions.destination); }

    /* If a destination is chosen (that isnt sourceFolder) copy dir content */
    if (runOptions.destination && (runOptions.destination != runOptions.directory)) {
        fs.copySync(runOptions.directory, runOptions.destination);
        
        /* the rest of the script will be using this param */
        runOptions.directory = runOptions.destination;
    }
    runOptions.directory = path.normalize(runOptions.directory);


    /* Verify it was a valid assumption */
    var lacunaOutputDir = path.join(runOptions.directory, lacunaSettings.LACUNA_OUTPUT_DIR);
    if (runOptions.assumeNormalization) {
        if (!fs.existsSync(lacunaOutputDir) || !fs.lstatSync(lacunaOutputDir).isDirectory()) {
            console.log(lacunaOutputDir)
            console.log(runOptions);
            throw logger.error("No valid normalization found");
        }
    }
    /**
     * Delete the previous Lacuna output (if present), and create empty dir 
     */
    else if (fs.existsSync(lacunaOutputDir) && fs.lstatSync(lacunaOutputDir).isDirectory()) {
        logger.verbose("Removing previous Lacuna output");
        fs.removeSync(lacunaOutputDir);
    }

    /* Create the output folder if it doesn't exist */
    fs.ensureDirSync(lacunaOutputDir);
}

/**
 * Starts Lacuna
 */
function startLacuna(runOptions, callback) {
    try {
        /* The part that actually creates and fills the callgraph */
        lacunizer.run(runOptions, (callGraph, analyzerResults) => {  
            var lacuna_log = { /* the log file */
                runDate: new Date(),
                runOptions: runOptions,
                graphStats: callGraph.getStatistics(),
                // analyzerResults: analyzerResults, // turn off for efficiency
                deadFunctions: callGraph.getDisconnectedNodes(true),
                aliveFunctions: callGraph.getConnectedNodes(true),
                allFunctions: callGraph.getNodes(true),
                affectedFiles: callGraph.getRootNodes(true)
            };
        
            /* write log (should create file if not exists) */
            var logPath = path.join(runOptions.directory, runOptions.logfile);
            fs.writeFileSync(logPath, JSON.stringify(lacuna_log, null, 4), 'utf8');

            var DOTLogPath = path.join(runOptions.directory, lacunaSettings.LACUNA_OUTPUT_DIR, "callgraph.dot");
            fs.writeFileSync(DOTLogPath, callGraph.getDOT(), 'utf8');

            logger.info(`Lacuna finished.\nSee results in: ${logPath}`);

            callback(lacuna_log);
        });   
        
    } catch (error) {
        logger.error(error);
        callback(null);
    }
}


/**
 * Big function that verifies most of the runOptions
 *  - Verify directory: should be a valid directory
 *  - Verify analyzer: should be an existing analyzer
 *  - Verify entryfile: should be an existing file
 *  - Verify optimization level: should be in the expected range
 * @param runOptions
 */
async function verifyRunOptions(runOptions) {
    /* Verify runOptions.directory */
    if (!runOptions.directory ||
        !fs.existsSync(runOptions.directory) ||
        !fs.lstatSync(runOptions.directory).isDirectory()) {
        throw logger.error("Invalid directory: " + runOptions.directory);
    }
    logger.silly("runOptions.directory OK");

    /* Verify runOptions.entry */
    if (!runOptions.entry) {
        throw logger.error("Invalid entryFile: " + runOptions.entry);
    }
    let entryPath = path.join(runOptions.directory, runOptions.entry);
    if (!fs.existsSync(entryPath)) {
        throw logger.error("Entry file does not exist: " + entryPath);
    }
    logger.silly("runOptions.entry OK");

    /* Verify runOptions.destination */
    if (runOptions.destination && fs.existsSync(runOptions.destination)) {
        if (!runOptions.force) { // Show a warning before Lacuna starts overwriting folders
            var answer = await prompt(`Warning "${runOptions.destination}" already exists, are you sure you want to overwrite?`);
            if (!answer || answer != true) { process.exit(1); }        
        }
        logger.verbose(`Overwriting output ${runOptions.destination}`);
    }
    logger.silly("runOptions.destination OK");

    /* Check settings that may modify the code */
    if (!runOptions.destination &&
        (runOptions.olevel >= 1 ||
        lacunaSettings.IMPORT_EXTERNALLY_HOSTED_SCRIPTS ||
        lacunaSettings.EXPORT_INLINE_SCRIPTS)
    ) {
        if (!runOptions.force) { // Show a warning before Lacuna starts modifying files
            var answer = await prompt(`Warning Lacuna will permanently modify "${runOptions.directory}", are you sure you want to continue?`);
            if (!answer || answer != true) { process.exit(1); }        
        }
        logger.verbose(`Overwriting source ${runOptions.directory}`);
    }

    /* Cannot re-normalize and assume it was already normalize at the same time */
    if (runOptions.normalizeOnly && runOptions.assumeNormalization) {
        throw logger.error("Invalid options: normalizeOnly + assumeNormalization");
    }

    /* STOPS HERE */
    if (runOptions.normalizeOnly) return;

    /* Verify runOptions.analyzer */
    if (!runOptions.analyzer || runOptions.analyzer.length <= 0) {
            throw logger.error("Invalid analyzer: " + runOptions.analyzer);
    }
    runOptions.analyzer.forEach((analyzer) => {   
        var analyzerPath = path.join(__dirname, lacunaSettings.ANALYZERS_DIR, analyzer) + ".js";
        if (!fs.existsSync(analyzerPath)) {
            throw logger.error("Invalid analyzer: " + analyzer);
        }
    });
    logger.silly("runOptions.analyzer OK");

    /* Verify runOptions.olevel */
    if (!lacunaSettings.OPTIMIZATION_LEVELS.includes(runOptions.olevel)) {
        throw logger.error("Invalid optimizationlevel: " + runOptions.olevel);
    }
    logger.silly("runOptions.olevel OK");

    // <Shant be necessary>
    /* Verify runOptions.logfile */
    /* Verify runOptions.force */

    return runOptions;
}

function prompt(msg) {
    return new Confirm(msg).run();
}


module.exports = {
    run
}
