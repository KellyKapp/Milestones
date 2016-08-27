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
var goal_summary_component_1 = require("./goal-summary.component");
var timeline_component_1 = require("./timeline.component");
var individual_milestone_component_1 = require("./individual-milestone.component");
var router_1 = require("@angular/router");
var goal_builder_service_1 = require("./goal-builder.service");
var IndividualGoalBuilderComponent = (function () {
    function IndividualGoalBuilderComponent(route, goalBuilderService, router) {
        this.route = route;
        this.goalBuilderService = goalBuilderService;
        this.router = router;
        this.milestoneObject = {
            description: "",
            deadline: "",
        };
        this.activeMilestone = null;
    }
    IndividualGoalBuilderComponent.prototype.ngOnInit = function () {
        this.route.params.subscribe(function (params) {
            this.goalBuilderService.findGoalById(params["_id"]).subscribe(function (goal) {
                this.goal = goal;
            }.bind(this));
        }.bind(this));
    };
    IndividualGoalBuilderComponent.prototype.buildNewMilestone = function () {
        this.goalBuilderService
            .buildNewMilestone(this.milestoneObject, this.goal._id)
            .subscribe(function (res) {
            console.log(res.milestones);
            this.activeMilestone = res.milestones[res.milestones.length - 1];
            $(".modal").modal();
        }.bind(this));
    };
    IndividualGoalBuilderComponent.prototype.saveGoal = function () {
        // save to goal model/Mongo
    };
    IndividualGoalBuilderComponent = __decorate([
        core_1.Component({
            selector: "individual-goal-builder",
            templateUrl: 'app/html_files/goal-builder-component.html',
            styleUrls: ['app/css_files/goal-builder.css', 'app/css_files/welcome.css'],
            directives: [
                goal_summary_component_1.GoalSummaryComponent,
                timeline_component_1.TimelineComponent,
                individual_milestone_component_1.IndividualMilestoneComponent
            ]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, goal_builder_service_1.GoalBuilderService, router_1.Router])
    ], IndividualGoalBuilderComponent);
    return IndividualGoalBuilderComponent;
}());
exports.IndividualGoalBuilderComponent = IndividualGoalBuilderComponent;
//# sourceMappingURL=individual-goal-builder.component.js.map