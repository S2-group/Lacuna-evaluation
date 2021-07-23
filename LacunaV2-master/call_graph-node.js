/**
 * @description The representation of a function within this callgraph
 */

const path = require("path");
const Edge = require("./call_graph-edge");

module.exports = class Node {
    constructor(functionData) {
        this.edges = []; // edges to other nodes (directional/one-way edges)
        functionData.file = path.normalize(functionData.file);
        this.functionData = functionData; // preserves original function data
    }

    /**
     * Adds an edge to another node  
     * 
     * NOTE multiple edges can exist between the same nodes
     */
    addEdge(node, analyzer, stripObject) {
        var edge = new Edge(this, node, analyzer);
        this.edges.push(edge);

        var caller = edge.caller;
        var callee = edge.callee;

        if (stripObject) {
            caller = caller.functionData;
            callee = callee.functionData;
        }
        return {
            caller,
            callee
        }
    }

    /**
     * Adds all nodes connected to this node to the connectedNodes array
     * doesnt return anything as it stores the result in the array.
     */
    addConnectedNodes(connectedNodes, stripObject) {
        this.edges.forEach((edge) => {
            // if (!edge.callee || !edge.caller) { return; }
            var callee = edge.callee;
            if (stripObject) { callee = callee.functionData; }

            /* If we've encountered that node before, skip */
            if (connectedNodes.includes(callee)) { return; }
            
            connectedNodes.push(callee);
            edge.callee.addConnectedNodes(connectedNodes, stripObject);
        })
    }

    /** Prints the current node and its children */
    printGraph(iter) {
        console.log("\t".repeat(iter), this.__str__());

        this.edges.forEach((edge) => {
            edge.callee.printGraph(iter+1);
        });
    }

    /**
     * Add all self to child relations to the dotify object
     * 
     * @param {Dotify} dotty
     * Dotty object that will store all the object data
     */
    addToDotify(dotty, consideredNodes) {
        /* Prevent infinite loops */
        if (consideredNodes.includes(this)) { return; }
        consideredNodes.push(this);

        this.edges.forEach((edge) => {
            dotty.addEdge(this.__str__(), edge.callee.__str__(), { label: edge.analyzer });
            
            /* Recursively add grand-child relations */
            edge.callee.addToDotify(dotty, consideredNodes); 
        });
    }

    /** String representation of the node */
    __str__() {
        return this.functionData.type + "@" + this.functionData.file + ":" + this.functionData.range;
    }
}


