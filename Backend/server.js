var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost");

var GoalModel = require("./goal.model")(mongoose);
var UserModel = require("./user.model")(mongoose);

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));



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
		resources: [],
		team: [],
		obstacles: []
	};

	GoalModel.findOneAndUpdate(
		{ "_id": req.body.goalId },
		{
			"$push": {
				"milestones" : milestone
			}
		},
		function(err, doc) {
			if (err) {
				res.status(500);
				res.send("Error creating new Milestone");
				console.log(err);
				return;

			}
			res.send(doc);
		}
	);
});

app.post('/resource', function(req,res) {
	GoalModel.findOneAndUpdate(
		{"_id": req.body.goalId},
		{
			"$push": {

			}
		})
})


app.get('/all', function(req, res) {
	GoalModel.find(
		{ }, 
		function(err, data) {
			if(err) {
				res.status(500);
				res.send("Error Finding Goals");
				return;
			}
			res.send(JSON.stringify(data));
			console.log(data);
		}
	);
});


app.use(function(req, res, next) {
	res.status(404);
	res.send("Error");
});

app.listen(3000, function() {
	console.log("yes: 3000");
}); 