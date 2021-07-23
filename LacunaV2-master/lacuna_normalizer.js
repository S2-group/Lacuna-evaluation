/** 
 * @author
 * Kishan Nirghin
 * 
 * @description
 * The script responsible for normalizing a project according to Lacuna's 
 * specification. For now this only consists of 3 optional parameters:
 *  - Export inline javascript
 *  - Import externally hosted JS files
 *  - Export all eventAttributes to a external JS file.
 */

const path = require("path");
const logger = require("./_logger");
const fs = require("fs-extra");

const JsEditor = require("./js_editor"),
    HTMLEditor = require("./html_editor");

const lacunaSettings = require("./_settings");


/**
 * This function WILL change the directory content.
 * A mock object is created for the eventAttributes (which should be removed
 * when finished)
 * 
 * @param {*} directory 
 * @param {*} entry 
 */
function normalizeScripts(directory, entry) {
    var entryFile = path.join(directory, entry);

    var htmle = new HTMLEditor().loadFile(entryFile);
    if (lacunaSettings.IMPORT_EXTERNALLY_HOSTED_SCRIPTS) {
        htmle.importExternallyHostedScripts(directory);
    }

    /* Always on */
    if (lacunaSettings.EXPORT_INLINE_SCRIPTS || true) {
        htmle.exportInternalScripts(directory, entry);
    }

    /* Export the eventAttributes to its own script */
    if (lacunaSettings.EXPORT_EVENT_ATTRIBUTES) {   
        var htmlEventAttributeScript = htmle.getEventAttributeScript();
        var relPath = path.join(directory, lacunaSettings.LACUNA_OUTPUT_DIR);/* relative to pwd */
        var fileContent = "/* JS Code that was found on HTML events */\n" + htmlEventAttributeScript.source;
        JsEditor.createFile(fileContent, relPath, lacunaSettings.EVENT_ATTRIBUTES_FILENAME);
    }
}


module.exports = normalizeScripts;