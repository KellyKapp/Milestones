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
var IndividualMilestoneComponent = (function () {
    function IndividualMilestoneComponent() {
        this.milestoneDescription = "";
        this.milestoneDeadline = "";
        this.milestoneResources = [];
        this.milestoneResourcesCost = [];
        this.milestoneTeamMembers = [];
        this.milestoneTeamMemberRoles = [];
        this.milestoneObstacles = [];
        this.milestoneSolutions = [];
    }
    IndividualMilestoneComponent.prototype.addResource = function (resource, resourceCost) {
        // add new resource to Milestone component
        if (resource) {
            this.milestoneResources.push(resource);
        }
        console.log(this.milestoneResources);
        if (resourceCost) {
            this.milestoneResourcesCost.push(resourceCost);
        }
    };
    IndividualMilestoneComponent.prototype.addTeamMember = function (teamMember, teamMemberRole) {
        // add new team member to Milestone component
        if (teamMember) {
            this.milestoneTeamMembers.push(teamMember);
        }
        if (teamMemberRole) {
            this.milestoneTeamMemberRoles.push(teamMemberRole);
        }
    };
    IndividualMilestoneComponent.prototype.addObstacle = function (obstacle, solution) {
        // add new obstacle to Milestone component
        if (obstacle) {
            this.milestoneObstacles.push(obstacle);
        }
        if (solution) {
            this.milestoneSolutions.push(solution);
        }
    };
    IndividualMilestoneComponent.prototype.saveMilestone = function () {
        // save data to Mongo
    };
    IndividualMilestoneComponent = __decorate([
        core_1.Component({
            selector: 'individual-milestone',
            directives: common_1.FORM_DIRECTIVES.slice(),
            templateUrl: 'app/html_files/individual-milestone-component.html',
            styleUrls: ['app/css_files/milestone.css']
        }), 
        __metadata('design:paramtypes', [])
    ], IndividualMilestoneComponent);
    return IndividualMilestoneComponent;
}());
exports.IndividualMilestoneComponent = IndividualMilestoneComponent;
//# sourceMappingURL=individual-milestone.component.js.map