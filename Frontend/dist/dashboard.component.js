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
var router_1 = require("@angular/router");
var goal_builder_service_1 = require("./goal-builder.service");
var display_goal_component_1 = require("./display-goal.component");
var DashboardComponent = (function () {
    function DashboardComponent(goalBuilderService, router) {
        this.goalBuilderService = goalBuilderService;
        this.router = router;
        this.GoalStartObject = {
            name: "",
            startDate: "",
            completionDate: "",
        };
        this.goalItems = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.goalBuilderService
            .displayAllGoals()
            .subscribe(function (res) {
        }.bind(this));
        this.goalBuilderService.getAllGoals().subscribe(function (res) {
            this.goalItem = res;
            console.log(res);
        }.bind(this));
    };
    DashboardComponent.prototype.buildNewGoal = function () {
        if (this.GoalStartObject.name === "") {
            return;
        }
        this.goalBuilderService
            .buildNewGoal(this.GoalStartObject)
            .subscribe(function (res) {
            console.log(res);
            this.router.navigate(['/goal-builder', res._id]);
        }.bind(this));
    };
    DashboardComponent.prototype.deleteGoal = function (id) {
        this.goalBuilderService.deleteGoal(id).subscribe();
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: "dashboard",
            directives: [display_goal_component_1.DisplayGoalComponent],
            templateUrl: 'app/html_files/dashboard-component.html',
            styleUrls: ['app/css_files/dashboard.css', 'app/css_files/welcome.css']
        }), 
        __metadata('design:paramtypes', [goal_builder_service_1.GoalBuilderService, router_1.Router])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map