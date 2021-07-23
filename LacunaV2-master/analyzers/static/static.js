'use strict';

const path = require('path'),
      js_tools = require('./js_tools'),
      bindings = require('./javascript-call-graph/bindings'),
      astutil = require('./javascript-call-graph/astutil'),
      semioptimistic = require('./javascript-call-graph/semioptimistic');




function get_scriptdata_by_id(script_data, id)
{
	for(let script in script_data)
	{
		if(script_data.hasOwnProperty(script))
		{
			if(script_data[script].id == id)
			{
				return script_data[script];
			}
		}
	}

	throw 'error getting script data by id for id ' + id;
}


// HTML entries (inline) have the issue that they don't have a correct offset (in the HTML file).
// Fix this by checking what script ID they belong to (different script ID for each inline entry) and adding the offset.
function fix_entry(entry, script_data, html_file)
{
	// If it starts with '<html index file name>#' then it's the 
	if(entry.file.indexOf(html_file + '#') == 0)
	{
		let id = parseInt(entry.file.substr( (html_file + '#').length ), 10);
		let script = get_scriptdata_by_id(script_data, id);

		// Name without # and ID
		entry.file = html_file;

		// Only if caller is in global.
		if(entry.start != null)	// This means that entry.end != too.
		{
			entry.start += script.location.start;
			entry.end += script.location.start;
		}
	}

	return entry;
}


module.exports = function(scripts, html_file)
{
	let scriptSources = []; /* format used by static analyzer */

	// Add each script source and file name to a list.
	scripts.forEach(function(script)
	{
		scriptSources.push( {filename: script.src, program: script.source} );
	});

	// Build the call graph.
	let ast = astutil.buildAST(scriptSources);
	bindings.addBindings(ast);

	let cg = semioptimistic.buildCallGraph(ast, false);

	let functions_called = [];

	// Retrieve all callee functions
	cg.edges.iter(function(caller, callee)
	{
		if(callee.type == 'NativeVertex')
		{
			// We don't care about calls to native functions (e.g. Math.floor or Array.prototype.map).
			return;
		};

		// Determine callee.
		let file = callee.func.attr.enclosingFile;
		let start = callee.func.range[0];
		let end = callee.func.range[1];

		// Determine caller.
		let caller_start, caller_end,
		    caller_file = caller.call.attr.enclosingFile;

		let enclosing_function = caller.call.callee.attr.enclosingFunction;

		if(enclosing_function)
		{
			caller_start = enclosing_function.range[0];
			caller_end = enclosing_function.range[1];
		}else{
			// In case it's called from the global scope.
			caller_start = caller_end = null;
		}

		function equals(a)
		{
			return a.caller.file == caller_file && a.caller.range[0] == caller_start && a.caller.range[1] == caller_end &&
			       a.callee.file == file && a.callee.range[0] == start && a.callee.range[1] == end;
		}

		// If it's not yet in there, put it in. (prevent duplicates)
		if( ! functions_called.some(equals) )
		{
			let caller = { file: caller_file, range: [caller_start, caller_end] };
			let callee = { file: file, range: [start, end] };

			caller = fix_entry(caller, scripts, html_file);
			callee = fix_entry(callee, scripts, html_file);

			functions_called.push(
			{
				caller: caller,
				callee: callee
			});
		}
	});

	return functions_called;
};
