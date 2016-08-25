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
        this.milestones = [];
        this.resources = [];
        this.team = [];
        this.obstacles = [];
    }
    GoalBuilderService.prototype.getAllGoals = function () {
        console.log("calling getAllGoals");
        return this.apiService.get("/all")
            .do(function (res) {
            this.goals = res;
            console.log("got all goals");
        }.bind(this));
    };
    GoalBuilderService.prototype.buildNewGoal = function (individualGoalStartObject) {
        return this.apiService.post("/create", JSON.stringify({
            goal: {
                name: individualGoalStartObject.name,
                startDate: individualGoalStartObject.startDate,
                completionDate: individualGoalStartObject.completionDate,
                milestones: [],
                resources: [],
                team: [],
                obstacles: []
            }
        })).do(function (res) {
            this.goals.push(res);
        }.bind(this));
    };
    GoalBuilderService.prototype.buildNewMilestone = function (milestoneObject) {
        return this.apiService.post("/milestone", JSON.stringify({
            milestone: {
                description: milestoneObject.description,
                deadline: milestoneObject.deadline
            }
        })).do(function (res) {
            this.milestones.push(res);
        }.bind(this));
    };
    GoalBuilderService.prototype.buildNewResource = function (resourceObject) {
        return this.apiService.post("/milestone", JSON.stringify({
            resource: {
                description: resourceObject.description,
                cost: resourceObject.cost
            }
        })).do(function (res) {
            this.resources.push(res);
        }.bind(this));
    };
    GoalBuilderService.prototype.buildNewTeam = function (teamObject) {
        return this.apiService.post("/milestone", JSON.stringify({
            team: {
                members: teamObject.members,
                roles: teamObject.roles,
            }
        })).do(function (res) {
            this.team.push(res);
        }.bind(this));
    };
    GoalBuilderService.prototype.buildNewObstacle = function (obstacleObject) {
        return this.apiService.post("/milestone", JSON.stringify({
            obstacle: {
                description: obstacleObject.description,
                solution: obstacleObject.solution
            }
        })).do(function (res) {
            this.obstacles.push(res);
        }.bind(this));
    };
    GoalBuilderService.prototype.getSummaryData = function () {
        return this.apiService.get("/summary")
            .do(function (res) {
            this.goals = res;
        }.bind(this));
    };
    GoalBuilderService.prototype.deleteGoal = function (_id) {
        return this.apiService.post("/delete", JSON.stringify({
            _id: _id
        })).do(function (res) {
            this.goals = res;
        }.bind(this));
    };
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