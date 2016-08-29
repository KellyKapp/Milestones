var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var expressSession = require("express-session");
// var cookieParser = require("cookie-parser");

mongoose.connect("mongodb://localhost");

var GoalModel = require("./goal.model")(mongoose);
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
			res.send(milestone);
		}
	);
});


app.post('/resource', function(req,res) {
	var resource = {
		description: req.body.resource.description,
		cost: req.body.resource.cost
	};
	
	GoalModel.findOneAndUpdate(
		{"_id": req.body.goalId, "milestone._id": req.body.milestoneId},
		{
			"$push": {
				"milestone.$": req.body.resource
			}
		},
		function(err, doc) {
			if (err) {
				res.status(500);
				res.send("Error creating new Resource");
				console.log(err);
				return;
			}
			res.send(req.body.resource);
		});
});

app.post('/team', function(req,res) {
	GoalModel.findOneAndUpdate(
		{"_id": req.body.goalId, "milestone._id": req.body.milestoneId},
		{
			"$push": {
				"milestone.$": req.body.team
			}
		},
		function(err, doc) {
			if (err) {
				res.status(500);
				res.send("Error creating new team member");
				console.log(err);
				return;
			}
			res.send(req.body.team);
		});
});


app.post('/obstacle', function(req,res) {
	GoalModel.findOneAndUpdate(
		{"_id": req.body.goalId, "milestone._id": req.body.milestoneId},
		{
			"$push": {
				"milestone.$": req.body.obstacle
			}
		},
		function(err, doc) {
			if (err) {
				res.status(500);
				res.send("Error creating new obstacle");
				console.log(err);
				return;
			}
			res.send(req.body.obstacle);
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


app.post("/login", function(req, res) {
	UserModel.findOne({
		username: req.body.username,
		password: req.body.password
	}, function (err, data) {
		if (err) {
			res.status(500);
			res.send("Error logging in");
			return;
		}
		if (!data) {
			res.send({
				status: "error"
			});
		} else {
			res.send({
				status: "success",
				userInfo: data
			});
		}
	});
});



app.post("/signup", function(req, res) {
    UserModel.findOne({
        username: req.body.username
    }, function(err, data) {
        if (err) {
            res.status(500);
            res.send("Error checking username");
            return;
        }
        if (data) {
            res.send({
                status: "error",
                message: "Username already taken"
            });
        } else {
            var userInfo = {
                username: req.body.username,
                password: req.body.password
            };
            var newUser = new UserModel(userInfo);
            newUser.save(function(err) {
                if (err) {
                    res.status(500);
                    res.send("Error creating user");
                    return;
                } 
                res.send({
                    status: "success",
                    userInfo: newUser
                });
            });
        }
    }); 
});


app.use(function(req, res, next) {
	res.status(404);
	res.send("Page Not Found");
});

app.listen(3000, function() {
	console.log("Yipee!");
}); 