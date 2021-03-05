// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
const spawn = require("child_process").spawn;
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 5000;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/parse/address', function(req, res) {
	console.log(req.query)
	const pythonProcess = spawn('/usr/bin/python3',["/home/parseaddress/test.py", req.query.address]);
	pythonProcess.stdout.on('data', (data) => {
		console.log('Success')
		console.log(data.toString("utf8"))
    res.json({ message:data.toString("utf8")});
});
	pythonProcess.stderr.on('data', (data) => {
		console.log('error')
		console.log(data.toString("utf8"))
    res.json({ message:data.toString("utf8")});
});
       
});

//post method
router.post('/parse/address/json', function(req, res) {
	console.log(req.body)

	const pythonProcess = spawn('/usr/bin/python3',["/home/parseaddress/test.py", req.body.address]);
	pythonProcess.stdout.on('data', (data) => {
		console.log('Success')
		console.log(data.toString("utf8"))
    res.json({ message:data.toString("utf8")});
});
	pythonProcess.stderr.on('data', (data) => {
		console.log('error')
		console.log(data.toString("utf8"))
    res.json({ message:data.toString("utf8")});
});
       
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/rest', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
