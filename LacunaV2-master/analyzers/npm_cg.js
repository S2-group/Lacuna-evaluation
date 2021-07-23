var logger = require("../_logger");
const child_process = require("child_process");
const path = require("path");

module.exports = function () {
    this.run = function (runOptions, callGraph, scripts, callback) {
        
        var relevantScripts = scripts.filter((script) => {
            if (script.source.length > 1) { return script; }
        })

        /**
         *  npm_cg cannot run outside its own cwd.. :( 
         * therefore this ugly mitigation is required.
         */
        var cwd = process.cwd();
        var analyzerDir = path.join(__dirname, '/npm_cg/callgraph/');
        process.chdir(analyzerDir);

        var edges = [];
        // outer loop should happen more than once
        relevantScripts.forEach(relevantScript => {
            var scriptSrc = path.join(runOptions.directory, relevantScript.src);

            npmCgAnalyzer(scriptSrc, cwd, function (npmCgEdges) { // callback function
                var scriptEdges = [];
                npmCgEdges = JSON.parse(npmCgEdges);

                npmCgEdges.forEach(npmCgEdge => {
                    var callerGroups = getGroups(npmCgEdge.caller);
                    var calleeGroups = getGroups(npmCgEdge.callee);
                    
                    var file = relevantScript.src;
                    var caller = {file: file, range: [null, null]};
                    if (callerGroups.functionName) {
                        callGraph.convertToFunctionData({functionName: calleeGroups.functionName});
                    }
                    var callee = callGraph.convertToFunctionData({functionName: calleeGroups.functionName});
    
                    var edge = callGraph.addEdge(caller, callee, "npm_cg", true);
                    scriptEdges.push(edge);
                });

                edges.push({ script: scriptSrc, edges: scriptEdges });

                // check if done
                if (edges.length == relevantScripts.length) {
                    var edgesResult = [];
                    edges.forEach(scriptResult => {
                        edgesResult = edgesResult.concat(scriptResult.edges);
                    });

                    process.chdir(cwd);
                    return callback(edgesResult);
                }
            });
        });
    }
}

function getGroups(str) {
    return str.match(/\[(?<filename>.+)\](?<functionName>.*)/).groups;
}

function npmCgAnalyzer(scriptSrc, cwd, callback) {
    let relativePath = path.relative(process.cwd(), cwd);
    let command = 'node  ./index.js ' + path.join(relativePath,scriptSrc);
    
    let settings = {
        // cwd: './analzers/npm_cg/callgraph',
		maxBuffer: 1024 * 1000 * 1000	// 1 GB
	};
    child_process.exec(command, settings, function (error, stdout, stderr) {
        console.log(error, stderr);
        callback(stdout);
	});
}
