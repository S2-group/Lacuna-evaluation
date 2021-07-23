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
    //code = babel.transform(code, { // TODO: CHECK IF CONVERTING JS IS NECESSARY TO GET MORE JS FUNCTIONS
  //plugins: ["@babel/plugin-transform-arrow-functions"]
//}).code;
    //console.log(result);
    try{
        var ast = esprima.parse(code,{loc:true});
    }
    catch(error){
        var ast = esprima.parse(code,{sourceType: 'module',loc:true});
    }
    //console.log(ast); //uncomment this to check the result of the code being parsed
    traverse(ast, function(node) {
        //console.log(node.type);
        if(node != null){//need this because some nodes in js are undefined/null when read using esprima.parse()
              if(node.type == 'FunctionExpression'|| node.type == 'FunctionDeclaration'){
                    countFunc = countFunc + 1;
                    var loc = (node.loc.end.line-node.loc.start.line);
                    countLOC = countLOC + loc; //use to check each file count of functions
                    //console.log(node.type); //uncomment this line to see all functions types being detected
              }
        }
    });
    return [countFunc,countLOC];
}

function readFile(filename){
//console.log(filename);
fs.readdir(filename, function(err, files){
    //handling error
    if(err){
       return console.log('Unable to scan directory: '+err);
    }
    //listing all js functions using forEach
    files.forEach(function (file,idx,array){
       //Check if it is a js file
       //console.log(file);
       var isDirectory = fs.lstatSync(path.join(filename,file)).isDirectory(); //checks if file is a directory or file
       if(((file.split('.'))[(file.split('.')).length-1] == 'js') && isDirectory == false){//getting the last element of the array after splitting the file name

           console.log(file);
           file = path.join(filename, file);
           var code = fs.readFileSync(file,'utf8');
           //console.log(code);
           count = analyzeCode(code);
           funcCount = funcCount + count[0];
           locCount = locCount + count[1];
           console.log(count)

           if(idx === array.length - 1){
               console.log('Total # of functions is: '+funcCount+', Total LOC in JS functions is: '+locCount);
           }
       }
       //if it is not .js check if it is a folder
       else {
           //console.log("In rec"+ file);
           file = path.join(filename, file);

           if(fs.lstatSync(file).isDirectory()){//if it detects that it is a folder then readFile is called again to check within the new folder
              readFile(file);
           }
       }
    });

});
console.log('Total # of functions is: '+funcCount+', Total LOC in JS functions is: '+locCount);//print the total again after finishing searching every folder just to make sure the last total is printed on console

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


//TODO add a variable to count number of functions --> DONE
console.log('Done');
