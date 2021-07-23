/** represents a caller-callee relationship (directional edge) */
module.exports = class Edge {
    constructor(caller, callee, analyzer) {
        this.caller = caller;
        this.callee = callee;
        this.analyzer = analyzer;
    }
}
