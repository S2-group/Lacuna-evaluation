# Lacuna V2
A cleaner, simpler, production ready version of Lacuna.

`node ./lacuna <sourceFolder> -a static`

_Note if the entry file isn't index.html, specify it using the entry param_


Lacuna can also be integrated in any nodeJS project:
```nodejs
const lacuna = require("./lacuna_runner")
lacuna.run(runOptions);
```

## How to use
The intuition is that lacuna runs on a source folder; Relative to this folder 
it will will look for the entry file. From the entry file, all references to 
JS files and all inline JS scripts will be considered for optimization.

__Thus all files that are not referenced by the entry file will be skipped__

E.g. `node ./lacuna ./example/test -d ./example/test.output -a static -o 3`
This command will optimize the source code with strength 3 (powerfull 
optimization, that will eliminate as much as possible from the source). Whilst
preserving the original sourceCode since a custom destinationFolder is set.

### Lazy loading
Since there is no guarantee Lacuna will not remove a function that isn't really
dead, Lacuna features a lazyLoading option.

This means that instead of completely removing the presumed dead functions, it 
will replace it with a lazy loading mechanism that will fetch the functionBody
from a server and insert it right back into your application.

Thus ensuring not to break the application whilst still removing many 
unnecessary lines of code.

To enable lazyloading set the optimization level (--olevel -o) to 1.
After Lacuna has optimized your application, ensure to run the lazyloading_server
which will serve all swapped out functionBody's on demand.

Find the generated lazyload_server in the destination folder;
also make sure to install the dependent npm modules: express, fs, body-parser and path.

Example
```
node lacuna ./example/proj1 -a static -o 1 -d ./example/proj1_output -f
npm --prefix ./example/proj1_output install express fs body-parser path
node-dev ./example/proj1_output/lacuna_lazyload_server.js
```

### Runtime options

| Long          | Short | Description                                                    | Default                  |
|---------------|-------|----------------------------------------------------------------|--------------------------|
| --analyzer    | -a    | Specify analyzers (multiple allowed, space separated).         | <REQUIRED>               |
| --olevel      | -o    | Optimization level                                             | 0                        |
| --entry       | -e    | The entry file, where the JS scripts should be gathered from.  | index.html               |
| --destination | -d    | Perform changes in a copy of the sourceFolder.                 | <sourceFolder>           |
| --logfile     | -l    | Logs of Lacuna execution.                                      | lacuna.log               |
| --force       | -f    | Force continuing                                               | false                    |

#### Analyzer
The analyzers are the techniques that Lacuna applies to mark functions/nodes as 
alive and determine caller-callee relationships between functions.

When multiple analysers are chosen Lacuna merges the results to minimize false
positves. This means that any function that is picked up as alive by ANY 
analyser will be considered alive.

The currently available analyser options are
##### static
This analyzer is based on esprima and statically determines all caller -> callee
relationships between functions. It does not consider JavaScript native
functions.

##### nativecalls
Very similair to the static analyzer wich the main difference is that it only
considers JavaScript native functions.

##### dynamic
A basic dynamic analyzer that starts up a puppeteer webdriver and marks every
function that is executed on startup as alive.

##### wala
Based on the internal callgraphs of IBM WALA

##### TAJS
Based on TAJS
Some notable fixes are:
by default TAJS stops processing JavaScript files whenever it encounters a console.log
( maybe also other native JavaScript calls ); thus to bypass this issue TAJS was modified.


#### Optimization Level
After the deadfunctions have been identified, Lacuna can also optimize the 
application by (partially) removing the dead functions. For this optimization, 
Lacuna supports multiple levels of caution.

- 0: Do not optimize at all
- 1: Replace the function body with a lazy loading mechanism
- 2: Remove the function body
- 3: Replace the function definition with null

Since there is no guarantee that Lacuna will not yield false positives e.g.
that it thinks a function that is really alive is dead, removing the functions
entirely could break the application.

#### Entry
The entry file, relative to the sourceFolder, that will serve as a starting 
point for Lacuna. From this file all references to JS files will be gathered,
as well as the inline JS scripts; after which they will be considered for 
optimization.

#### Destination
By default Lacuna will be performed on the sourceFolder. Meaning that it will
actually Modify the original source code. Setting a destination will copy the
entire project to this folder and do all modifications on that folder instead.
(preserving the original code).

#### Logfile
Where the output of Lacuna will be stored. By default in `lacuna.log`

#### Force
When the force option is enabled, Lacuna will without warning overwrite any
files or folders. (Instead of the default to prompt it to the user)

### Settings
Some more customizable settings can be found in the _settings.js file
a few important settings are:

#### CONSIDER_ONLINE_JS_FILES
Whether Lacuna should take the JS files hosted on other servers into account.
e.g. referenes to CDN files, or simply hosted somewhere else for performance.

The current implementation of Lacuna will download these files and update all
inline HTML references with the local file. The files will be downloaded to the
root of the destination directory under their original filename.

Notice that having multiple references to:
https://code.jquery.com/jquery-3.4.0.min.js

will store them in the same local file under the name jquery-3.4.0.min.js.

## Installation
Install the dependent libraries `npm install`

Install the dependencies for the different analysers (should only be necessary
if you want to use them)
- `npm --prefix ./analyzers/static install ./analyzers/static`
- `npm --prefix ./analyzers/dynamic install ./analyzers/dynamic`
- `npm --prefix ./analyzers/nativecalls install ./analyzers/nativecalls`
- `npm --prefix ./analyzers/wala_full install ./analyzers/wala_full`
- `npm --prefix ./analyzers/wala_single install ./analyzers/wala_single`


## Development

### Open issues
- Identifying scripts within HTML currently fails when there are (extra?) spaces 
or linebreaks between the words

### Solved issues
- The dynamic analyzer that requires a webdriver doesn't seem to load external
JS files in headless mode. The work around currently used is to not run the 
browser in headless mode; which has the anoying consequence that it activates/
focusses the window on every run. 