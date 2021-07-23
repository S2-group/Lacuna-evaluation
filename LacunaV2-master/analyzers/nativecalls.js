/*
	nativecalls
	Static analysis analyzer that only resolves native function calls that call user functions (i.e. addEventListeners' second parameter is a function that gets called when it triggers).

	Statically analyze the source, then returns a list of functions to remove.
	Static analysis tool copied & adapted from https://github.com/abort/javascript-call-graph
*/


const nativecallsAnalyzer = require('./nativecalls/nativecalls');



module.exports = function()
{
	this.run = function(runOptions, callGraph, scripts, callback)
	{
		let edges = nativecallsAnalyzer(scripts, runOptions.entry);

		edges.forEach(function(edge)
		{
			callGraph.addEdge(edge.caller, edge.called, "nativecalls");
		});

		callback(edges);
	};
};
