var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var app = express();


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(cors());

app.use(function(req, res, next) {
	console.log(req.url);
	next();
});

app.use(function(req, res, next) {
	res.status(404);
	res.send("no");
});

app.listen(3500, function() {
	console.log("yes: 3000");
}); 