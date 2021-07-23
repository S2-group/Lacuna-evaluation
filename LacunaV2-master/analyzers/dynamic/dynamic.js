'use strict';

const path = require("path");
const jdce = require('./jdce.js');




module.exports = function(directory, entry, timeout, scripts, callback)
{
	jdce.run({
		directory: directory,
		entry: entry,
		timeout: timeout,
		scripts: scripts,
	}, callback);
};
