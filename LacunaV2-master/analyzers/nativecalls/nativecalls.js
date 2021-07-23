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





module.exports = function(scripts, html_file)
{
	let scriptSources = [];

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

	// Add an caller->called entry to functions_called[]
	function add_entry(caller, called)
	{
		function equals(a)
		{
			return a.caller.file == caller.file && a.caller.range[0] == caller.range[0] && a.caller.range[1] == caller.range[1] &&
			       a.called.file == called.file && a.called.range[0] == called.range[0] && a.called.range[1] == called.range[1];
		}

		// If it's not yet in there, put it in.
		if( ! functions_called.some(equals) )
		{

			functions_called.push(
			{
				caller: caller,
				called: called
			});
		}
	}

	// Retrieve all called functions
	cg.edges.iter(function(caller, called)
	{
		// All we care about are native calls (that is, the 'called' node has type NativeVertex and is a function that accepts a function as one of its arguments).
		// All posibilities are listed in javascript-call-graph/harness.js.
		// Instead of using a huge switch() case, just loop over all arguments, and if any of them is a FunctionExpression, 

		if( called.type == 'NativeVertex')
		{
			// console.log('native');
			// console.log(called);
			let args = caller.call.arguments;

			for(let i = 0; i < args.length; i++)
			{
				if( args[i].type == 'FunctionExpression' )
				{
					handle_function_argument(caller, caller.call.arguments[i]);
				}
			}
		}
	});


	function handle_function_argument(caller_node, func)
	{
		let caller = {file: null, range: [null, null]},
			called = {file: null, range: [null, null]};

		called.range = func.range;
		called.file = func.attr.enclosingFile;

		let enclosing_function = caller_node.call.attr.enclosingFunction;

		if(enclosing_function)
		{
			caller.file = enclosing_function.attr.enclosingFile;
			caller.range = enclosing_function.range;
		}else{
			caller.file = caller_node.call.attr.enclosingFile;
			// start and end are defaulted to null.
		}

		add_entry(caller, called);
	}


	return functions_called;
};
