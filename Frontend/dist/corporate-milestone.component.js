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
var CorporateMilestoneComponent = (function () {
    function CorporateMilestoneComponent() {
        this.milestoneDescription = "";
        this.milestoneDeadline = "";
        this.milestoneResources = [];
        this.milestoneResourcesCost = [];
        this.milestoneTeamMembers = [];
        this.milestoneTeamMemberRoles = [];
        this.milestoneTeamMembersHours = [];
        this.milestoneTeamMembersCost = [];
        this.milestoneObstacles = [];
        this.milestoneSolutions = [];
    }
    CorporateMilestoneComponent.prototype.addResource = function (resource, resourceCost) {
        // add new resource to Milestone component
        if (resource) {
            this.milestoneResources.push(resource);
        }
        console.log(this.milestoneResources);
        if (resourceCost) {
            this.milestoneResourcesCost.push(resourceCost);
        }
    };
    CorporateMilestoneComponent.prototype.addTeamMember = function (teamMember, teamMemberRole, teamMemberHours, teamMemberSalary) {
        // add new team member to Milestone component
        if (teamMember) {
            this.milestoneTeamMembers.push(teamMember);
        }
        if (teamMemberRole) {
            this.milestoneTeamMemberRoles.push(teamMemberRole);
        }
        if (teamMemberHours) {
            this.milestoneTeamMembersHours.push(teamMemberHours);
        }
        if (teamMemberSalary) {
            this.milestoneTeamMembersCost.push((teamMemberSalary / 2080) * teamMemberHours);
        }
    };
    CorporateMilestoneComponent.prototype.addObstacle = function (obstacle, solution) {
        // add new obstacle to Milestone component
        if (obstacle) {
            this.milestoneObstacles.push(obstacle);
        }
        if (solution) {
            this.milestoneSolutions.push(solution);
        }
    };
    CorporateMilestoneComponent.prototype.saveMilestone = function () {
        // save data to Mongo
    };
    CorporateMilestoneComponent = __decorate([
        core_1.Component({
            selector: 'corporate-milestone',
            directives: common_1.FORM_DIRECTIVES.slice(),
            templateUrl: 'app/html_files/corporate-milestone-component.html',
            styleUrls: ['app/css_files/milestone.css']
        }), 
        __metadata('design:paramtypes', [])
    ], CorporateMilestoneComponent);
    return CorporateMilestoneComponent;
}());
exports.CorporateMilestoneComponent = CorporateMilestoneComponent;
//# sourceMappingURL=corporate-milestone.component.js.map