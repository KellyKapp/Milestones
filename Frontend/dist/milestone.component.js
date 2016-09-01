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
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var goal_builder_service_1 = require("./goal-builder.service");
var ResourcesOutputComponent = (function () {
    function ResourcesOutputComponent() {
    }
    ResourcesOutputComponent = __decorate([
        core_1.Component({
            selector: 'resources-output',
            template: "<li class=\"resources-output\">{{resource.description}}</li>",
        }), 
        __metadata('design:paramtypes', [])
    ], ResourcesOutputComponent);
    return ResourcesOutputComponent;
}());
var TeamOutputComponent = (function () {
    function TeamOutputComponent() {
    }
    TeamOutputComponent = __decorate([
        core_1.Component({
            selector: 'team-output',
            template: "<li class=\"team-output\"></li>",
        }), 
        __metadata('design:paramtypes', [])
    ], TeamOutputComponent);
    return TeamOutputComponent;
}());
var ObstacleOutputComponent = (function () {
    function ObstacleOutputComponent() {
    }
    ObstacleOutputComponent = __decorate([
        core_1.Component({
            selector: 'obstacle-output',
            template: "<li class=\"obstacle-output\"></li>",
        }), 
        __metadata('design:paramtypes', [])
    ], ObstacleOutputComponent);
    return ObstacleOutputComponent;
}());
var MilestoneComponent = (function () {
    function MilestoneComponent(goalBuilderService, router) {
        this.goalBuilderService = goalBuilderService;
        this.router = router;
        // start;
        // end; 
        // deadline;
        this.resourceObject = {
            description: "",
            cost: ""
        };
        this.teamObject = {
            name: "",
            role: ""
        };
        this.obstacleObject = {
            description: "",
            solution: ""
        };
    }
    MilestoneComponent.prototype.addResource = function () {
        this.goalBuilderService
            .addResource(this.activeMilestone, this.resourceObject)
            .subscribe(function (res) {
        }.bind(this));
    };
    MilestoneComponent.prototype.addTeamMember = function () {
        this.goalBuilderService
            .addTeamMember(this.activeMilestone, this.teamObject)
            .subscribe(function (res) {
        }.bind(this));
    };
    MilestoneComponent.prototype.addObstacle = function () {
        this.goalBuilderService
            .addObstacle(this.activeMilestone, this.obstacleObject)
            .subscribe(function (res) {
        }.bind(this));
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MilestoneComponent.prototype, "activeMilestone", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MilestoneComponent.prototype, "goal", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MilestoneComponent.prototype, "resources", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MilestoneComponent.prototype, "team", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MilestoneComponent.prototype, "obstacles", void 0);
    MilestoneComponent = __decorate([
        core_1.Component({
            selector: 'milestone',
            directives: common_1.FORM_DIRECTIVES.concat([
                ResourcesOutputComponent,
                TeamOutputComponent,
                ObstacleOutputComponent
            ]),
            templateUrl: 'app/html_files/milestone-component.html',
            styleUrls: ['app/css_files/milestone.css']
        }), 
        __metadata('design:paramtypes', [goal_builder_service_1.GoalBuilderService, router_1.Router])
    ], MilestoneComponent);
    return MilestoneComponent;
}());
exports.MilestoneComponent = MilestoneComponent;
//# sourceMappingURL=milestone.component.js.map