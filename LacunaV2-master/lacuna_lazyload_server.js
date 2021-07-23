if (process.argv.length != 3) {
    console.log("Error: please specify the project directory");
    process.exit();
}

const settings = require("./_settings");

const express = require("express"),
    fs = require("fs"),
    path = require("path"),
    bodyParser = require("body-parser");

const port = settings.LAZY_LOAD_SERVER_PORT;
const app = express();

var directory = process.argv[2];
var lazyloadStorage = JSON.parse(fs.readFileSync(path.join(directory, 'lacuna_lazyload_storage.json'), 'utf8'));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/lazyload', (req, res) => {
    var id = req.body.id;
    var functionBody = lazyloadStorage[id];
    res.send(functionBody);
});

app.listen(port, () => {
    console.log("Lazy load server is listening on port: " + port);
});