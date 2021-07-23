
/**
 * @author Kishan Nirghin
 * @description TAJS adapter for Lacuna
 * 
 * @repository https://github.com/cs-au-dk/TAJS
 */

const path = require("path"),
	child_process = require("child_process");

module.exports = function()
{
	this.run = function(runOptions, callGraph, scripts, callback) {
		var entryFile = path.join(runOptions.directory, runOptions.entry);
		
		tajsAnalyzer(entryFile, edges => {
        /* {caller: {file, start}, callee: {file, start} } */
            
            edges.forEach(function (edge) {
                if (!edge.caller || !edge.callee) { return; }
                /* Creates a valid relativePath to sourceDir (instead of pwd)*/
                edge.caller.file = getSrcPath(edge.caller.file, runOptions);
                edge.callee.file = getSrcPath(edge.callee.file, runOptions);
                
                /* Convert the nodeData to functionData */
                edge.caller = callGraph.convertToFunctionData(edge.caller);
                edge.callee = callGraph.convertToFunctionData(edge.callee);

				/* Add the edge to the callGraph */
				callGraph.addEdge(edge.caller, edge.callee, "tajs");
			});

			return callback(edges);
		});
	};
};


/**
 * Actually running the TAJS analyzer
 * also converts the TAJS output to edges
 */
function tajsAnalyzer(file, callback) {
    var jarFile = path.join(__dirname, 'tajs', 'tajs-all.jar');
    let command = 'java -jar ' + jarFile +  ' -quiet -callgraph ' + file;
	let settings = {
		maxBuffer: 1024 * 1000 * 1000	// 1 GB
	};

    console.log(command);
    child_process.exec(command, settings, function (error, stdout, stderr) {
        console.log(error, stderr);
        var edges = tajsToLacunaFormatter(stdout);
		callback(edges);
	});
}

/**
 * Formats the output of TAJS to a more Lacuna friendly one
 * 
 * Expected TAJS output:
 * function b1() at example/demo.out/fol/script.js:1:1 may be called from:
 *   example/demo.out/fol/script.js:18:1
 *   example/demo.out/fol/script.js:44:1
 * function() at HOST(string-replace-model.js):1:1 may be called from:
 *   host-environment-sources-loader
 * 
 * For parsing this we make the following assumptions:
 *  - All caller callee relations will adhere to the same format:
 *     <functionName> at <filename>:<rowNum>:<colNum> may be called from:
 *     __<filename>:<rowNum>:<colNum>
 *      (etc.)
 * 
 * Returns:
 *  edges [{
 *  caller: {file: <String>, start: { line: groups.line, column: groups.column }}
 *  callee: {file: <String>, start: { line: groups.line, column: groups.column }}
 * }]
 * 
 * NOTE: esprima counts columns from 0, whilst tajs starts at 1.
 */
function tajsToLacunaFormatter(output) {
    var edges = [];
    var lines = output.split("\n");

    var callee = null;
    for (var i = 0; i < lines.length; i++){
        var line = lines[i];
        if (!line || line == "") { continue; }
        if (isCalleeLine(line)) { /* new callee */
            var matches = line.match(/function (?<functionName>.*) at (?<scriptSrc>.+):(?<line>[0-9]+):(?<column>[0-9]+) may be called from:/);
            if (!matches) continue;
            var groups = matches.groups;
            callee = { file: groups.scriptSrc, start: { line: parseInt(groups.line), column: parseInt(groups.column - 1) } };
            continue;    
        }
        else if (!isCallerLine(line)) {
            console.log("[tajsToLacunaFormatter] invalid line: ", line);
            continue;
        }
        // (valid) callerLine
        var matches = line.match(/(?<scriptSrc>.+):(?<line>[0-9]+):(?<column>[0-9]+)/);
        if (!matches) continue;
        var groups = matches.groups;
        var caller = {
            file: groups.scriptSrc,
            start: { line: parseInt(groups.line), column: parseInt(groups.column - 1) }
        }
        edges.push({caller: caller, callee: callee});
    }

    function isCalleeLine(line) {
        return line.substring(0, 8) == "function";
    }

    function isCallerLine(line) {
        return line.substring(0, 2) == "  ";
    }

    return edges;
}

/**
 * Converts a path relative to pwd to a path relative to the sourceDirectory
 */
function getSrcPath(pwdPath, runOptions) {
    var srcPath = path.normalize(pwdPath).trim();
    var dir = runOptions.directory; /* already normalized */

    if (dir != srcPath.slice(0, dir.length)) {
        console.log("[getSrcPath] invalid path: ", srcPath);
    }
    return srcPath.slice(dir.length + 1);
}