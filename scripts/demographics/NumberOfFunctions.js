var fs = require('file-system'),
    esprima = require('esprima');
const path = require('path');
const babel = require("@babel/core");

function traverse(node, func) {
    func(node);//1
    for (var key in node) { //2
        if (node.hasOwnProperty(key)) { //3
            var child = node[key];
            if (typeof child === 'object' && child !== null) { //4

                if (Array.isArray(child)) {
                    child.forEach(function(node) { //5
                        traverse(node, func);
                    });
                } else {
                    traverse(child, func); //6
                }
            }
        }
    }
}

function analyzeCode(code) {
    var countFunc = 0;//function number for this folder
    var countLOC = 0;

    try{
        var ast = esprima.parse(code,{loc:true});
    }
    catch(error){
        var ast = esprima.parse(code,{sourceType: 'module',loc:true});
    }
    traverse(ast, function(node) {
        if(node != null){//need this because some nodes in js are undefined/null when read using esprima.parse()
              if(node.type == 'FunctionExpression'|| node.type == 'FunctionDeclaration'){
                    countFunc = countFunc + 1;
                    var loc = (node.loc.end.line-node.loc.start.line);
                    countLOC = countLOC + loc; //use to check each file count of functions
              }
        }
    });
    return [countFunc,countLOC];
}

function readFile(filename){
    fs.readdir(filename, function(err, files){
        //handling error
        if(err){
           return console.log('Unable to scan directory: '+ err);
        }
        //listing all js functions using forEach
        files.forEach(function (file,idx,array){

           var isDirectory = fs.lstatSync(path.join(filename,file)).isDirectory(); //checks if file is a directory or file
           if(!file.includes('test')) { // && !file.includes('lacuna')) {

               if(((file.split('.'))[(file.split('.')).length-1] == 'js') && isDirectory == false){//getting the last element of the array after splitting the file name

                   file = path.join(filename, file);
                   var code = fs.readFileSync(file,'utf8');
                   count = analyzeCode(code);
                   funcCount = funcCount + count[0];
                   locCount = locCount + count[1];
                   console.log("File: " + file + ", count: " + count[0])
                   console.log("GRAND TOTAL: " + funcCount)
                   // if(idx === array.length - 1){
                   //     console.log('Total # of functions is: ' + funcCount + ', Total LOC in JS functions is: '+locCount);
                   // }
               }
               //if it is not .js check if it is a folder
               else {
                    file = path.join(filename, file);

                    if(fs.lstatSync(file).isDirectory()){//if it detects that it is a folder then readFile is called again to check within the new folder
                      console.log("Directory: " + file);
                      readFile(file);
                    }
               }
           }
        });
    });
}


if (process.argv.length < 3) {
    console.log('Usage:node NumberOfFunctions.js folder(or file)');
    process.exit(1);
}
var count = 0; //total number of js functions
var funcCount= 0;
var locCount = 0;
var filename = process.argv[2];
console.log('Reading ' + filename);
readFile(filename);
