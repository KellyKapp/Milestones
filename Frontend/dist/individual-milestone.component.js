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
var IndividualMilestoneComponent = (function () {
    function IndividualMilestoneComponent(goalBuilderService, router) {
        this.goalBuilderService = goalBuilderService;
        this.router = router;
        this.resourceObject = {
            description: "",
            cost: ""
        };
        this.teamObject = {
            member: "",
            role: ""
        };
        this.obstacleObject = {
            description: "",
            solution: ""
        };
    }
    // buildNewMilestone() {
    // 	this.goalBuilderService
    // 	.buildNewMilestone(this.milestoneObject)
    // 	.subscribe(function(res) {
    // 		console.log(res);
    // 	}.bind(this));
    // }
    IndividualMilestoneComponent.prototype.buildNewResource = function () {
        this.goalBuilderService
            .buildNewResource(this.resourceObject)
            .subscribe(function (res) {
            console.log(res);
        }.bind(this));
    };
    IndividualMilestoneComponent.prototype.buildNewTeam = function () {
        this.goalBuilderService
            .buildNewTeam(this.teamObject)
            .subscribe(function (res) {
            console.log(res);
        }.bind(this));
    };
    IndividualMilestoneComponent.prototype.buildNewObstacle = function () {
        this.goalBuilderService
            .buildNewObstacle(this.obstacleObject)
            .subscribe(function (res) {
            console.log(res);
        }.bind(this));
    };
    IndividualMilestoneComponent.prototype.saveMilestone = function () {
        // save data to Mongo
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], IndividualMilestoneComponent.prototype, "activeMilestone", void 0);
    IndividualMilestoneComponent = __decorate([
        core_1.Component({
            selector: 'individual-milestone',
            directives: common_1.FORM_DIRECTIVES.slice(),
            templateUrl: 'app/html_files/individual-milestone-component.html',
            styleUrls: ['app/css_files/milestone.css']
        }), 
        __metadata('design:paramtypes', [goal_builder_service_1.GoalBuilderService, router_1.Router])
    ], IndividualMilestoneComponent);
    return IndividualMilestoneComponent;
}());
exports.IndividualMilestoneComponent = IndividualMilestoneComponent;
//# sourceMappingURL=individual-milestone.component.js.map