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
var milestone_component_1 = require("./milestone.component");
var router_1 = require("@angular/router");
var goal_builder_service_1 = require("./goal-builder.service");
var GoalBuilderComponent = (function () {
    function GoalBuilderComponent(goalBuilderService, route, router) {
        this.goalBuilderService = goalBuilderService;
        this.route = route;
        this.router = router;
        this.milestones = [];
        this.resources = [];
        this.team = [];
        this.obstacles = [];
        this.activeResources = [];
        this.milestoneObject = {
            description: "",
            deadline: "",
        };
        this.activeMilestone = null;
    }
    GoalBuilderComponent.prototype.ngOnInit = function () {
        this.route.params.subscribe(function (params) {
            this.goalBuilderService.findGoalById(params["_id"])
                .subscribe(function (goal) {
                this.goal = goal;
                this.milestones = this.goalBuilderService.getMilestonesForGoal(this.goal._id);
                this.resources = this.getResources();
                this.team = this.getTeam();
                this.obstacles = this.getObstacles();
            }.bind(this));
        }.bind(this));
    };
    GoalBuilderComponent.prototype.refreshMilestones = function () {
        this.resources = [];
        this.team = [];
        this.obstacles = [];
        this.getResources();
        this.getTeam();
        this.getObstacles();
    };
    GoalBuilderComponent.prototype.getResources = function () {
        console.log(this.milestones);
        for (var i = 0; i < this.milestones.length; i++) {
            for (var j = 0; j < this.milestones[i].resources.length; j++) {
                this.resources.push(this.milestones[i].resources[j]);
            }
        }
        return this.resources;
    };
    GoalBuilderComponent.prototype.getTeam = function () {
        for (var i = 0; i < this.milestones.length; i++) {
            for (var j = 0; j < this.milestones[i].people.length; j++) {
                this.team.push(this.milestones[i].people[j]);
            }
        }
        return this.team;
    };
    GoalBuilderComponent.prototype.getObstacles = function () {
        for (var i = 0; i < this.milestones.length; i++) {
            for (var j = 0; j < this.milestones[i].obstacles.length; j++) {
                this.obstacles.push(this.milestones[i].obstacles[j]);
            }
        }
        return this.obstacles;
    };
    GoalBuilderComponent.prototype.buildNewMilestone = function () {
        this.goalBuilderService
            .buildNewMilestone(this.milestoneObject, this.goal)
            .subscribe(function (res) {
            this.activeMilestone = res;
            this.milestones.push(res);
            $(".milestone").modal();
        }.bind(this));
    };
    GoalBuilderComponent.prototype.openModal = function (milestone) {
        this.activeMilestone = milestone;
        // this.activeResources = this.activeMilestone.resources;
        // this.team = this.activeMilestone.people;
        // this.obstacles = this.activeMilestone.obstacles;
        $(".milestone").modal();
        console.log(milestone);
    };
    GoalBuilderComponent = __decorate([
        core_1.Component({
            selector: "goal-builder",
            templateUrl: 'app/html_files/goal-builder-component.html',
            styleUrls: [
                'app/css_files/goal-builder.css',
                'app/css_files/welcome.css'
            ],
            directives: [
                goal_summary_component_1.GoalSummaryComponent,
                timeline_component_1.TimelineComponent,
                milestone_component_1.MilestoneComponent
            ]
        }), 
        __metadata('design:paramtypes', [goal_builder_service_1.GoalBuilderService, router_1.ActivatedRoute, router_1.Router])
    ], GoalBuilderComponent);
    return GoalBuilderComponent;
}());
exports.GoalBuilderComponent = GoalBuilderComponent;
//# sourceMappingURL=goal-builder.component.js.map