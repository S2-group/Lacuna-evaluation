module.exports = {
    /**
     * Where the analyzers are stored, relative to Lacuna 
     */
    ANALYZERS_DIR: "analyzers",
    ANALYZER_TIMEOUT: 5000, // miliseconds


    /**
     * The output dir of Lacuna files, relative to the destination.
     * NOTE that this directory will be removed/cleared on every run of Lacuna
     */
    LACUNA_OUTPUT_DIR: "lacuna_cache",
    
    /**
     * Supported optimization levels
     */
    OPTIMIZATION_LEVELS: [
        0, // do not replace anything, leaves source-code intact
        1, // replace functions with lazy loading mechanism
        2, // replace functions with empty functions
        3, // replace functions with null
    ],

    /**
     * Wether Lacuna should also parse the externally hosted JS files
     * For this the file will be downloaded and stored locally. 
     * The references in the HTML files will be updated and the local file will
     * be optimized where needed.
     */ 
    IMPORT_EXTERNALLY_HOSTED_SCRIPTS: true,

    /**
     * Wether Lacuna should export the inline JS to its own file
     * generally this is a better coding practise
     * 
     * NOTE: currently always does this (cannot disable)
     */
    EXPORT_INLINE_SCRIPTS: true,


    /**
     * 
     */
    EXPORT_EVENT_ATTRIBUTES: true,
    EVENT_ATTRIBUTES_FILENAME: 'eventAttributes.js',


    /**
     * The server port where the lazy load server will be hosted on
     */
    LAZY_LOAD_SERVER_PORT: 8125,

    /** 
     * Converts functionData to a unique function ID
     */
    functionDataToId(functionData) {
        return `${functionData.file}[${functionData.bodyRange[0]}:${functionData.bodyRange[1]}]`;
    },
    
}