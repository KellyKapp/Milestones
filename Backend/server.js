var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost");

var GoalModel = require("./goal.model")(mongoose);
var MilestoneModel = require("./milestone.model")(mongoose);
var ObstacleModel = require("./obstacle.model")(mongoose);
var OrganizationModel = require("./organization.model")(mongoose);
var ResourceModel = require("./resource.model")(mongoose);
var TeamModel = require("./team.model")(mongoose);
var TimelineModel = require("./timeline.model")(mongoose);
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
		name: req.body.name,
		startDate: req.body.startDate,
		completionDate: req.body.completionDate,
		resources: [],
		team: [],
		obstacles: []
	};

	new GoalModel(goal).save(function(err, data){
		if (err) {
			res.status(500);
			res.send("Error creating new Goal");
			return;
		}
		res.send(JSON.stringify(data));
	});
});



app.use(function(req, res, next) {
	res.status(404);
	res.send("no");
});

app.listen(3000, function() {
	console.log("yes: 3000");
}); 