/**
 * @description Class that is responsible for editing JS files.
 * Thus contains the instrumentation code aswell.
 * 
 * @version 0.1
 * @author Kishan Nirghin
 * @Date 10-02-2019
 */

const fs = require("fs"),
    esprima = require("esprima"),
    path = require("path");

require("./prototype_extension");


const ESPRIMA_FUNCTION_TYPES = ['FunctionDeclaration', 'FunctionExpression', 'ArrowFunctionExpression'];
module.exports = class JsEditor {
    constructor(filePath = null) {
        if (filePath) { this.loadFile(filePath); }
    }

    loadSource(source, filePath = null) {
        this.source = this.originalSource = source;
        this.filePath = filePath;
        this.offset = 0;

        return this;
    }
    
    loadFile(filePath) {
        this.filePath = filePath; /* relative to pwd */
        this.source = this.originalSource = fs.readFileSync(filePath).toString();
        this.offset = 0;

        return this;
    }

    loadFunctionData() {
        var functionData = [];
        var index = 0;

        try {
            esprima.parse(this.source, { range: true, loc: true }, (node) => {
                if (ESPRIMA_FUNCTION_TYPES.includes(node.type)) {
                    var functionName = null;
                    if (node.id && node.id.name) {
                        functionName = node.id.name;
                    }
                    var node = {
                        type: node.type,
                        range: node.range,
                        bodyRange: node.body.range,
                        file: this.filePath,
                        index: index++,
                        start: node.loc.start,
                        functionName: functionName,
                    };
                    
                    functionData.push(node);
                }
            });
        } catch (e) { console.log(e); }

        return functionData;
    }

    replaceFunction(functionData, replacement) {
        var functionBodyLength = functionData.bodyRange[1] - functionData.bodyRange[0] - 2;
        var startIndex = functionData.bodyRange[0] + 1 + this.offset;
        var functionBody = this.source.slice(startIndex, startIndex + functionBodyLength);
        this.source = this.source.splice(startIndex, functionBodyLength, replacement);

        this.offset = this.offset - functionBodyLength + replacement.length;
        return functionBody;
    }

    removeFunction(functionData) {
        var replacement = "null";
        if (functionData.type == 'FunctionDeclaration') { replacement = ""; }
        
        var functionLength = functionData.range[1] - functionData.range[0];
        this.source = this.source.splice(functionData.range[0] + this.offset, functionLength, replacement);

        this.offset += replacement.length - functionLength;
    }

    insert(code) {
        this.source = code + this.source;
        this.offset += code.length;
    }

    /**
     * Note: this function should only be called when its the js file that gets
     * overwritten. (should not be the html file)
     */
    saveFile() {
        if(this.filePath == null) {
			return logger.error("js_editor save error: No file loaded");
        }
        if (path.extname(this.filePath) != ".js") {
            return logger.error("js_editor save error: Invalid file");
        }
		fs.writeFileSync( this.filePath, this.source );
    }

    getSource() {
        return this.source;
    }

    getOriginalSource() {
        return this.originalSource;
    }

    /**
     * prepend can either be part of the filename or a relativeDir to sourceFolder
     */
    static createFile(source, directory, filename = null, prepend = null) {
        if (!filename) { filename = getRandomFilename(6) + ".js"; }
        var filePath = filename;
        if (prepend) { filePath = prepend + filePath; }
        fs.writeFileSync(path.join(directory, filePath), source);
        return filePath;
    }
}


/**
 * Snippet to generate a random filename given a length
 */
function getRandomFilename(length) {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
}