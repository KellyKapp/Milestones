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
var GoalBuilderService = (function () {
    function GoalBuilderService(apiService) {
        this.apiService = apiService;
        this.goals = [];
        this.getAllGoals().subscribe();
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
    GoalBuilderService.prototype.getSummaryData = function () {
        return this.apiService.get("/summary")
            .do(function (res) {
            this.goals = res;
        }.bind(this));
    };
    GoalBuilderService.prototype.deleteGoal = function (id) {
        return this.apiService.post("/delete", JSON.stringify({
            id: id
        })).do(function (res) {
            this.goals = res;
        }.bind(this));
    };
    GoalBuilderService.prototype.updateGoal = function (id, newValue) {
        return this.apiService.post("/update", JSON.stringify({
            id: id,
            goal: newValue
        })).do(function (res) {
            this.overwrite(this.findItemById(id), res);
        }.bind(this));
    };
    GoalBuilderService.prototype.findGoalById = function (id) {
        for (var _i = 0, _a = this.goals; _i < _a.length; _i++) {
            var goal = _a[_i];
            if (goal._id === id) {
                return goal;
            }
        }
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