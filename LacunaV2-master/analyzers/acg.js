/**
 * Expected format from acg:
test.js@5:36-39 -> test2.js@1:0-31
test.js@8:44-47 -> test.js@1:0-42
 */


const path = require("path"),
    acgAnalyzer = require('./acg/acg_runner');

module.exports = function () {
    this.run = function (runOptions, callGraph, scripts, callback) {
        
        // scripts are extracted from the entry file. Therefore its relative path is relative to the entry path.

        let scriptSrcs = scripts.map(s => {
            let entryDir = path.dirname(path.join(runOptions.directory, runOptions.entry));
            return path.join(entryDir, s.src);
        });
        acgAnalyzer.run(scriptSrcs, function (acgEdges) {
            var edges = acgToLacunaFormatter(acgEdges);

            edges.forEach(function (edge) {
                /* fix all file issues */
                edge.caller.file = getSrcPath(basenameToScriptSrc(edge.caller.file, scriptSrcs), runOptions);
                edge.callee.file = getSrcPath(basenameToScriptSrc(edge.callee.file, scriptSrcs), runOptions);

                if (!callGraph.nodeExists(edge.caller)) { 
                    edge.caller = callGraph.assertRootNode({ file: edge.caller.file, range: [null, null] }, true);
                }
                
                callGraph.addEdge(edge.caller, edge.callee, "acg");
            });
                
            callback(edges);
        });
    }
}

/**
 * since acg only returns the script basename,
 * this script will append the rest of the missing script to it.
 */
function basenameToScriptSrc(basename, scriptSrcs) {
    for (var i = 0; i < scriptSrcs.length; i++){
        srcBase = path.basename(scriptSrcs[i]);

        if (srcBase == basename) {
            return scriptSrcs[i];
        }
    }

    return null;
}

/**
 * Converts a path relative to pwd to a path relative to the sourceDirectory
 */
function getSrcPath(pwdPath, runOptions) {
    var srcPath = path.normalize(pwdPath).trim();
    var dir = runOptions.directory; /* already normalized */

    if (dir != srcPath.slice(0, dir.length)) {
        logger.warn("[getSrcPath] invalid path: ", getSrcPath);
    }
    return srcPath.slice(dir.length + 1);
}

/**
 * Converts cc output to workable edges for Lacuna
 */
function acgToLacunaFormatter(acgEdges) {
    var edges = [];

    acgEdges.forEach(acgEdge => {
        var edge = convertAcgEdge(acgEdge);
        if (edge) {
            edges.push(edge);   
        }
    });

    /**
     * Extracts all info from this format: 
     * script.js@11:70-74 -> script.js@1:0-32
     *  callerFile, callerRange0, callerRange1 
     *  calleeFile, calleeRange0, calleeRange1
     */
    function convertAcgEdge(acgEdge) {
        var match = acgEdge.match(/(?<callerFile>.*)@[0-9]+:(?<callerRange0>[0-9]+)\-(?<callerRange1>[0-9]+) -> (?<calleeFile>.*)@[0-9]+:(?<calleeRange0>[0-9]+)\-(?<calleeRange1>[0-9]+)/);
        if (!match) return null;
        var groups = match.groups;
        var caller = { file: groups.callerFile, range: [match.groups.callerRange0, match.groups.callerRange1] };
        var callee = { file: groups.calleeFile, range: [match.groups.calleeRange0, match.groups.calleeRange1] };
        return {caller, callee};
    }

    return edges;
}

