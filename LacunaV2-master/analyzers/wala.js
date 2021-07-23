/**
 * @author Kishan Nirghin
 * @description WALA adapter for Lacuna
 * Freshly written WALA CallGraph adapter for Lacuna
 * 
 * @repository https://github.com/Kishanjay/WALA-JSONCallGraph
 */

const path = require("path");
const child_process = require("child_process");

const logger = require("../_logger");
const lacunaSettings = require("../_settings");


module.exports = function() {
	this.run = function(runOptions, callGraph, scripts, callback) {
		var entryFile = path.join(runOptions.directory, runOptions.entry);
		
		walaAnalyzer(entryFile, (edges) => {
			/* {caller: {file, start, end}, callee: {file, start, end} } */
			if (!edges) edges = [];
			edges.forEach(function (edge) {
				edge.caller.file = path.normalize(edge.caller.file);
				edge.callee.file = path.normalize(edge.callee.file);

				/* Try the edge case that the caller is actually a unidentified rootNode */
				var functionDataCaller = null;
				if (callGraph.nodeExists(edge.caller)) {
					functionDataCaller = callGraph.getNode(edge.caller);
				} else {
					functionDataCaller = callGraph.assertRootNode({file: edge.caller.file, range: [null, null]}, true);
				}

				/* Add the edge to the callGraph */
				callGraph.addEdge(functionDataCaller, edge.callee, "wala");
			});

			return callback(edges);
		});
	};
};


/**
 * Actually running the WALA analyzer
 */
function walaAnalyzer(file, callback) {
	var jarFile = path.join(__dirname, 'wala', 'JSONCallGraph.jar');
	let command = 'java -jar ' + jarFile + ' ' + file;
	let settings = {
		maxBuffer: 1024 * 1000 * 1000,	// 1 GB
		//timeout: lacunaSettings.ANALYZER_TIMEOUT
	};

	// Run the WALA jar.
	child_process.exec(command, settings, function (error, stdout, stderr) {
		if (error) {
			logger.error("Analyser[WALA] timeout");
		}
		let walaOutput = cleanWalaOutput(stdout);
		if (!walaOutput) { return callback(null); }
		var edges = JSON.parse(walaOutput);
		callback(edges);
	});
}


function cleanWalaOutput(stdout) {
	let lines = stdout.split("\n");

	for (let i = 0; i < lines.length; i++) {
		let line = lines[i].trim();
		if (line[0] == '[' && line[line.length - 1] == ']') return lines[i];
	}
	
	return null;
}