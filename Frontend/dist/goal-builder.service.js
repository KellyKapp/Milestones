"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var api_service_1 = require("./api.service");
var observable_1 = require("rxjs/observable");
var GoalBuilderService = (function () {
    function GoalBuilderService(apiService) {
        this.apiService = apiService;
        this.goals = [];
    }
    GoalBuilderService.prototype.getAllGoals = function () {
        return this.apiService.get("/all")
            .do(function (res) {
            this.goals = res;
        }.bind(this));
    };
    GoalBuilderService.prototype.buildNewGoal = function (GoalStartObject) {
        return this.apiService.post("/create", JSON.stringify({
            goal: {
                name: GoalStartObject.name,
                startDate: GoalStartObject.startDate,
                completionDate: GoalStartObject.completionDate,
                milestones: [],
            }
        })).do(function (res) {
            this.goals.push(res);
        }.bind(this));
    };
    GoalBuilderService.prototype.buildNewMilestone = function (milestoneObject, goal) {
        return this.apiService.post("/milestone", JSON.stringify({
            milestone: {
                description: milestoneObject.description,
                deadline: milestoneObject.deadline,
                resources: [],
                team: [],
                obstacles: []
            },
            goalId: goal._id,
        })).do(function (res) {
            goal.milestones.push(res);
        }.bind(this));
    };
    GoalBuilderService.prototype.addResource = function (milestone, resourceObject, goal) {
        return this.apiService.post("/resource", JSON.stringify({
            resource: {
                description: resourceObject.description,
                cost: resourceObject.cost
            },
            goalId: goal._id,
            milestoneId: milestone._id
        })).do(function (res) {
            milestone.resources.push(res);
        }.bind(this));
    };
    GoalBuilderService.prototype.addTeamMember = function (milestone, teamObject, goal) {
        return this.apiService.post("/team", JSON.stringify({
            team: {
                member: teamObject.member,
                role: teamObject.role,
            },
            goalId: goal._id,
            milestoneId: milestone._id
        })).do(function (res) {
            milestone.team.push(res);
        }.bind(this));
    };
    GoalBuilderService.prototype.addObstacle = function (milestone, obstacleObject, goal) {
        return this.apiService.post("/obstacle", JSON.stringify({
            obstacle: {
                description: obstacleObject.description,
                solution: obstacleObject.solution
            },
            goalId: goal._id,
            milestoneId: milestone._id
        })).do(function (res) {
            milestone.obstacles.push(res);
        }.bind(this));
    };
    // getSummaryData() {
    //     return this.apiService.get("/summary")
    //         .do(function(res) {
    //             this.goals = res;
    //         }.bind(this));
    // }
    GoalBuilderService.prototype.updateGoal = function (_id, newValue) {
        return this.apiService.post("/update", JSON.stringify({
            _id: _id,
            goal: newValue
        })).do(function (res) {
            this.overwrite(this.findItemById(_id), res);
        }.bind(this));
    };
    GoalBuilderService.prototype.findGoalInCache = function (_id) {
        for (var _i = 0, _a = this.goals; _i < _a.length; _i++) {
            var goal = _a[_i];
            if (goal._id === _id) {
                return goal;
            }
        }
    };
    // findMilestone(_id) {
    // 	for (let milestone of this.goals.milestones) {
    // 		if (milestone._id === _id) {
    // 			return milestone;
    // 		}
    // 	}
    // }
    GoalBuilderService.prototype.findGoalById = function (_id) {
        return observable_1.Observable.create(function (observer) {
            // return a goal in cache
            var goal = this.findGoalInCache(_id);
            if (goal) {
                observer.next(goal);
                observer.complete();
            }
            // otherwise, return a goal from the server
            this.getAllGoals().subscribe(function (goals) {
                var goal = this.findGoalInCache(_id);
                observer.next(goal);
                observer.complete();
            }.bind(this));
        }.bind(this));
    };
    GoalBuilderService.prototype.displayAllGoals = function () {
        return observable_1.Observable.create(function (observer) {
            var goals = this.getAllGoals();
            if (goals) {
                observer.next(goals);
                observer.complete();
            }
        }.bind(this));
    };
    // findMilestoneById (_id) {
    // 	return Observable.create(function(observer) {
    // 		let activeMilestone = this.findMilestone(_id);
    // 		console.log(activeMilestone);
    // 		observer.next(goal);
    // 		obeserver.complete();
    // 	}.bind(this));
    // };
    GoalBuilderService.prototype.overwrite = function (orig, newValues) {
        for (var i in newValues) {
            if (newValues.hasOwnProperty(i)) {
                orig[i] = newValues[i];
            }
        }
    };
    GoalBuilderService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [api_service_1.ApiService])
    ], GoalBuilderService);
    return GoalBuilderService;
}());
exports.GoalBuilderService = GoalBuilderService;
//# sourceMappingURL=goal-builder.service.js.map