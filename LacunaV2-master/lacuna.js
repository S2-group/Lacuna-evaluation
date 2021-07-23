/**
 * Commandline entrypoint of LacunaJS
 */

'use strict';

require("./prototype_extension");
const logger = require("./_logger");
const lacuna = require("./lacuna_runner");
const commandLineArgs = require('command-line-args');

/* Fetch runOptions from command line */
let argv = null;
try {
    argv = commandLineArgs([
        { name: 'directory', type: String, defaultOption: true }, // obviously has no default option
        { name: 'analyzer', type: String, multiple: true, alias: 'a' },

        { name: 'entry', type: String, alias: 'e' },
        { name: 'olevel', type: Number, alias: 'o' },

        { name: 'logfile', type: String, alias: 'l' },
        { name: 'timeout', type: Number, alias: 't' },
        { name: 'force', type: Boolean, alias: 'f' },

        { name: 'destination', type: String, alias: 'd' },

        { name: 'normalizeOnly', type: Boolean },
        { name: 'assumeNormalization', type: Boolean }
    ]);
} catch (e) { throw logger.error(e); }
if (!argv) { throw logger.error("Invalid commandLineArgs"); }

/* Actual startup of lacuna */
try { lacuna.run(argv, function(log) { }); }
catch (e) { console.log(e); }
