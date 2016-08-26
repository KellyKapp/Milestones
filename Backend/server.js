var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost");

var GoalModel = require("./goal.model")(mongoose);


var OrganizationModel = require("./organization.model")(mongoose);
var UserModel = require("./user.model")(mongoose);


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


app.post('/create', function(req, res) {
	var goal = {
		name: req.body.goal.name,
		startDate: req.body.goal.startDate,
		completionDate: req.body.goal.completionDate,
		milestones: []
	};

	console.log(goal);

	new GoalModel(goal).save(function(err, data){
		if (err) {
			res.status(500);
			res.send("Error creating new Goal");
			return;
		}
		res.send(JSON.stringify(data));
	});
});



app.post('/milestone', function(req, res) {
	var milestone = {
		description: req.body.milestone.description,
		deadline: req.body.milestone.deadline,
		// resources: 
		// team: 
		// obstacles:
	};
});

app.get('/all', function(req, res) {
	GoalModel.find(
		{ }, 
		function(err, data) {
			if(err) {
				res.status(500);
				res.send("Error Finding Goal");
				return;
			}
			res.send(JSON.stringify(data));
		}
	);
});

app.use(function(req, res, next) {
	res.status(404);
	res.send("no");
});

app.listen(3000, function() {
	console.log("yes: 3000");
}); 