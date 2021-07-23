var bindings = require('./javascript-call-graph/bindings');
var astutil = require('./javascript-call-graph/astutil');
var pessimistic = require('./javascript-call-graph/pessimistic');
var path = require("path");

function run(files, callback) {
    var basenames = files.map(file => { return path.basename(file); });
    if (hasDuplicates(basenames)) { 
        console.log("[ACG] error, cannot run with duplicate script basenames", basenames);
        return callback(null);
    }

    var ast = astutil.buildAST(files);
    bindings.addBindings(ast);
    var cg;

    cg = pessimistic.buildCallGraph(ast, true);
    
    function pp(v) {
        if (v.type === 'CalleeVertex')
            return astutil.ppPos(v.call);
        if (v.type === 'FuncVertex')
            return astutil.ppPos(v.func);
        if (v.type === 'NativeVertex')
            return v.name;
        throw new Error("strange vertex: " + v);
    }

    var edges = [];
    cg.edges.iter(function (call, fn) {
        edges.push(pp(call) + " -> " + pp(fn));
    });

    callback(edges);
}

module.exports = { run };


function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}