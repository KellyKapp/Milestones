var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var expressSession = require("express-session");
// var cookieParser = require("cookie-parser");

mongoose.connect("mongodb://localhost");

var dbModels = require("./goal.model")(mongoose);
var GoalModel = dbModels.GoalModel;
var MilestoneModel = dbModels.MilestoneModel;
var UserModel = require("./user.model")(mongoose);

var app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

// app.use(cookieParser());

app.use(expressSession({
	secret: "milestones",
	resave: false,
	saveUninitialized: false
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
	var milestoneData = {
		description: req.body.milestone.description,
		deadline: req.body.milestone.deadline,
		resources: [],
		people: [],
		obstacles: [],
		goalId: req.body.milestone.goalId
	};

	console.log(milestoneData);

	var milestone = new MilestoneModel (milestoneData);

	milestone.save(function(err, doc) {
		if (err) {
			res.status(500);
			res.send("Error creating new Milestone");
			console.log(err);
			return;
		}
		res.send(doc);
	});
});


app.post('/resource', function(req,res) {
	var resource = {
		description: req.body.resource.description,
		cost: req.body.resource.cost
	};

	MilestoneModel.findOneAndUpdate(
		{"_id": req.body.milestoneId},
		{
			"$push": {
				"resources": resource
			}
		},
		{ new : true },
		function(err, doc) {
			if (err) {
				res.status(500);
				res.send("Error creating new Resource");
				console.log(err);
				return;
			}
			res.send(doc.resources[doc.resources.length - 1]);
		});
});


app.post('/people', function(req,res) {
	var person = {
		name: req.body.person.name,
		role: req.body.person.role
	};

	MilestoneModel.findOneAndUpdate(
		{"_id": req.body.milestoneId},
		{
			"$push": {
				"people": person
			}
		},
		{ new : true },
		function(err, doc) {
			if (err) {
				res.status(500);
				res.send("Error creating new team member");
				console.log(err);
				return;
			}
			res.send(doc.people[doc.people.length - 1]);
		});
});


app.post('/obstacle', function(req,res) {
	var obstacle = {
		description: req.body.obstacle.description,
		solution: req.body.obstacle.solution
	};

	MilestoneModel.findOneAndUpdate(
		{"_id": req.body.milestoneId},
		{
			"$push": {
				"obstacles": obstacle
			}
		},
		{ new : true },
		function(err, doc) {
			if (err) {
				res.status(500);
				res.send("Error creating new obstacle");
				console.log(err);
				return;
			}
			res.send(doc.obstacles[doc.obstacles.length - 1]);
		});
});


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

app.get('/milestones', function(req, res) {
	MilestoneModel.find(
		{ "goalId": req.query.goalId },
		function(err, data) {
			if(err) {
				res.status(500);
				res.send("Error Finding Milestones");
				return;
			}
			res.send(JSON.stringify(data));
			console.log(data);
		}
		);
});

app.get('/allmilestones', function(req, res) {
	MilestoneModel.find (
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


// app.post("/login", function(req, res) {
// 	UserModel.findOne({
// 		username: req.body.username,
// 		password: req.body.password
// 	}, function (err, data) {
// 		if (err) {
// 			res.status(500);
// 			res.send("Error logging in");
// 			return;
// 		}
// 		if (!data) {
// 			res.send({
// 				status: "error"
// 			});
// 		} else {
// 			res.send({
// 				status: "success",
// 				userInfo: data
// 			});
// 		}
// 	});
// });



// app.post("/signup", function(req, res) {
//     UserModel.findOne({
//         username: req.body.username
//     }, function(err, data) {
//         if (err) {
//             res.status(500);
//             res.send("Error checking username");
//             return;
//         }
//         if (data) {
//             res.send({
//                 status: "error",
//                 message: "Username already taken"
//             });
//         } else {
//             var userInfo = {
//                 username: req.body.username,
//                 password: req.body.password
//             };
//             var newUser = new UserModel(userInfo);
//             newUser.save(function(err) {
//                 if (err) {
//                     res.status(500);
//                     res.send("Error creating user");
//                     return;
//                 } 
//                 res.send({
//                     status: "success",
//                     userInfo: newUser
//                 });
//             });
//         }
//     }); 
// });


app.use(function(req, res, next) {
	res.status(404);
	res.send("Page Not Found");
});

app.listen(3000, function() {
	console.log("Yipee!");
}); 