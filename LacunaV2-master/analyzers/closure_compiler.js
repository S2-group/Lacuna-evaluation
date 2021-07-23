/**
 * 
 * Expected format from closure_compiler
 {
  "nodes": [
    {
      "id": 1,
      "label": "[toplevel]",
      "pos": "toplevel:1:1"
    },
    {
      "id": 2,
      "label": "[test2.js]y",
      "pos": "test2.js:1:1"
    }
  ],
  "links": [
    {
      "target": 2,
      "source": 1,
      "label": "[toplevel] -> [test2.js]y"
    }
  ]
}
*/
const path = require("path"),
	child_process = require("child_process");

module.exports = function () {
    this.run = function (runOptions, callGraph, scripts, callback) {

        closeCompilerAnalyzer(runOptions, scripts, function (edges) {
            if (!edges) { return callback(edges); }
            edges.forEach(function (edge) {
            /* Convert the nodeData to functionData */
                edge.caller = callGraph.convertToFunctionData(edge.caller);
                edge.callee = callGraph.convertToFunctionData(edge.callee);

                /* fix all file issues */
                if (edge.caller.file == 'toplevel') {
                    edge.caller = { file: path.join(runOptions.directory, runOptions.entry), range: [null, null] }
                } else {
                    edge.caller.file = getSrcPath(edge.caller.file, runOptions);
                }
                edge.callee.file = getSrcPath(edge.callee.file, runOptions);

                callGraph.addEdge(edge.caller, edge.callee, "closure_compiler");
            });
            
            callback(edges);
        });
    }
}



/**
 * Actually running the TAJS analyzer
 * also converts the TAJS output to edges
 */
function closeCompilerAnalyzer(runOptions, scripts, callback) {
    var scriptSrc = scripts.map(s => { return path.join(runOptions.directory, s.src); }).join(" ");
    var jarFile = path.join(__dirname, 'closure_compiler', 'closure-compiler-1.0-SNAPSHOT.jar');
    let command = 'java -jar ' + jarFile + ' --js ' + scriptSrc;
    let settings = {
        maxBuffer: 1024 * 1000 * 1000	// 1 GB
    };

    function onResult(stdout) {
        var edges = closureCompilerToLacunaFormatter(stdout);
        callback(edges);
    }
    

    child_process.exec(command, settings, function (error, stdout, stderr) {
        onResult(stdout);        
    });
}


/**
 * Converts cc output to workable edges for Lacuna
 */
function closureCompilerToLacunaFormatter(output) {
    var edges = [];
    try {
        var ccOutput = JSON.parse(output.trim());
    } catch (e) {
        return null;
    }
    var nodes = ccOutput.nodes;
    
    ccOutput.links.forEach(link => {
        var sourceNode = getNodeById(link.source);
        var targetNode = getNodeById(link.target);

        var caller = convertNodeToFd(sourceNode);
        var callee = convertNodeToFd(targetNode);

        edges.push({ caller, callee });

    });

    function getNodeById(id) {
        for (var i = 0; i < nodes.length; i++){
            var node = nodes[i];
            if (node.id == id) { return node; }
        }
        logger.warn("[closure_compiler] invalid nodeId: ", id);
        return null;
    }

    function convertNodeToFd(ccNode) {
        var match = ccNode.pos.match(/(?<scriptSrc>.+):(?<line>[0-9]+):(?<column>[0-9]+)/);
        if (!match) { return null; }

        var groups = match.groups;
        return { file: groups.scriptSrc, start: { line: parseInt(groups.line), column: parseInt(groups.column - 1) } };
    }

    return edges;
}




/**
 * Converts a path relative to pwd to a path relative to the sourceDirectory
 * thus remove the irrelevant pwd path before the sourceDirectory
 * 
 * NOTE: the file detected by closure_compiler can also be
 * [synthetic:util/polyfill]
 * [synthetic:es6/symbol]
 * [synthetic:util/findinternal]
 * ...
 * ..
 */
function getSrcPath(pwdPath, runOptions) {
    var srcPath = path.normalize(pwdPath).trim();
    if (srcPath[0] == '[') { return runOptions.entry; } // exceptions

    var dir = runOptions.directory; /* already normalized */

    if (dir != srcPath.slice(0, dir.length)) {
        console.log("[getSrcPath] invalid path: ", srcPath, dir);
        console.log(runOptions);
    }
    return srcPath.slice(dir.length + 1);
}