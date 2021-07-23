/*
	JavaScript dynamic dead code elimination tool.
	Niels Groot Obbink
*/

'use strict';


let path = require('path'),
    HtmlEditor = require('./html_editor'),
	JsEditor = require('./js_editor'),
    Browser = require('./browser');


module.exports = {
	settings: {
		logger_name: '___jdce_logger'
	},


	run: function(settings, callback) {
		// Log call is formatted 'identifier|file|start|end'.
		let js_head_code = `
			var ` + this.settings.logger_name + ` = function(file_name, start, end)
			{
				console.log('` + this.settings.logger_name + `|' + file_name + '|' + start + '|' + end);
			};
		`;

		var htmlPath = path.join(settings.directory, settings.entry);
		// Create a new HTML editor instance. We'll reset the HTML source later.
		let html = new HtmlEditor();

		// Retrieve HTML source.
		html.load(htmlPath);

		// Add the script tag to the begining of the <head> tag.
		html.add( '<script>' + js_head_code + '</script>', html.location.HEAD_FIRST );

		// Overwrite the old source.
		html.save();

		var scriptEditors = [];

		var logger = (file, start, end) => {
			return this.settings.logger_name + '("' + file + '", ' + start + ', ' + end + ');';
		};
		settings.scripts.forEach((script) => {
			
			// Only deal with .js files, HTML file won't parse right.
			if (script.src.split('.').pop() == 'js') {
				// Create a new script editor instance and save it so we can change the source, and reset it afterwards.
				let js = new JsEditor();

				// Save it, so we can access it later (and restore the original source).
				scriptEditors[script.src] = js;

				js.load(script.src, script.source, settings.directory);

				// Add a log call to each function in this script. The only argument (a function) specifies the format.
				js.add_log_calls(logger);
				
				js.save();
			}
		});

		// Create a new Browser instance, and a list of all log calls.
		let browser = new Browser(),
		    loggerName = this.settings.logger_name;

		browser.load(settings.directory, settings.entry, settings.timeout).then((consoleLogs) => {
			let aliveFunctions = parseLogs(consoleLogs, loggerName);
			cleanup();
			callback( aliveFunctions ); /* return results */
		});



		function parseLogs(consoleLogs, logger_name) {
			var functionLogs = [];

			consoleLogs.forEach(function(log) {
				// logs are formatted 'identifier|file|start|stop'.
				let regex = /([^\|]+)\|([^\|]+)\|([0-9]+)\|([0-9]+)/g;
				let result = regex.exec(log);	// [data, logger_name, file_name, start, end]

				// Only look for logs that start with our log identifier.
				if(result === null ||  result[1] != logger_name) {
					return;
				}

				let file = result[2],
				    start = result[3],
				    end = result[4];

				// Comparison function
				let exists = function(entry)
				{
					return entry.file == file && entry.range[0] == start && entry.range[1] == end;
				};

				// Functions can be called twice or more, so remove duplicate entries before inserting.
				if( ! functionLogs.some( exists ) ) {
					functionLogs.push({ file: file, range: [start, end] });
				}
			});

			return functionLogs;
		}



		function cleanup() {
			// Reset JS files.
			for(let editor in scriptEditors) {
				if(scriptEditors.hasOwnProperty(editor)) {
					scriptEditors[editor].restore();
					scriptEditors[editor].save();
				}
			}

			// Remove inserted script tag from the HTML source.
			html.restore();
		}



		function fix_results(results)
		{
			let files = [];

			settings.scripts.forEach(function(script)
			{
				let correct_name = script.src;

				for(let file in results)
				{
					if(results.hasOwnProperty(file) )
					{
						if( path.join(settings.directory, correct_name) == file )
						{
							files[correct_name] = results[file];
						}
					}
				}
			});

			return files;
		}
	}
};
