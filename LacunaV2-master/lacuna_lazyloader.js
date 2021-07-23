/**
 * Everything related to lazy loading
 */

const fs = require("fs"),
    path = require("path")

const settings = require("./_settings");


module.exports = class LazyLoader {
    constructor() {
        this.storage = {};
    }

    /**
     * Adds a function to the lazyload storage database
     */
    add(functionData, functionBody) {
        var id = settings.functionDataToId(functionData);
        this.storage[id] = functionBody;
    }

    /**
     * Fetches the lazy load replacement for a function
     */
    getLazyLoadReplacement(functionData) {
        var id = settings.functionDataToId(functionData);
        return `lacuna_lazy_load("${id}", functionData => eval(functionData))`;
    }

    /**
     * Function that actually does the http request 
     */
    getLazyLoadFrame() {
        return `// LACUNA LAZY LOAD FALLBACK
function lacuna_lazy_load(id, callback){
    fetch("http://127.0.0.1:${settings.LAZY_LOAD_SERVER_PORT}/lazyload/", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({id})
    }).then(response => {
        return response.text();
    }).then(callback);
}\n`
    }

    /**
     * Exports a server that is capable of retrieving all functions
     * present in the storage
     */
    exportStorage(destinationFolder) {
        console.log("exporting serveR)");
        fs.writeFileSync(path.join(destinationFolder, "lacuna_lazyload_storage.json"), JSON.stringify(this.storage, null, 4), 'utf8');
    }
}