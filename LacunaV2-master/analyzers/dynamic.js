/*
	dynamic
	Dynamic analysis analyzer for the 'hybrid' JDCE tool.

	Dynamically analyze the source, then returns a list of functions to remove.

	Because we can't easily detect calling nodes, mark all functions called from the base caller node.
	This doesn't result in an accurate graph, but does preserve what functions were called.
*/


const path = require('path'),
      dynamic_analyzer = require('./dynamic/dynamic');



module.exports = function()
{
	this.run = function(runOptions, callGraph, scripts, callback)
	{
		// Start the analyzation process. Since this runs async, use a callback.
		dynamic_analyzer(runOptions.directory, runOptions.entry, null, scripts, function (aliveFunctions) {
			/* Since Lacuna focusses on edges, we should create edges */
			var edges = [];

			aliveFunctions.forEach((functionData) => {
				var edge = callGraph.addAliveNode(functionData, 'dynamic');
				edges.push(edge);
			});

			callback(edges);
		});

	};
};
