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
var MilestoneComponent = (function () {
    function MilestoneComponent() {
        this.milestoneDescription = "";
        this.milestoneDeadline = "";
        this.milestoneResources = [];
        this.milestoneTeamMember = "";
        this.milestoneTeamMemberRole = "";
        this.milestoneObstacle = "";
        this.milestoneSolution = "";
    }
    MilestoneComponent.prototype.addResource = function (resource) {
        // add new resource to Milestone component
        if (resource) {
            this.milestoneResources.push(resource);
        }
    };
    MilestoneComponent.prototype.addTeamMember = function () {
        // add new team member to Milestone component
    };
    MilestoneComponent.prototype.addObstacle = function () {
        // add new obstacle to Milestone component
    };
    MilestoneComponent.prototype.printToOutput = function () {
        // display data in corresponding output section
    };
    MilestoneComponent.prototype.saveMilestone = function () {
        // save data to Mongo
    };
    MilestoneComponent = __decorate([
        core_1.Component({
            selector: 'milestone',
            directives: common_1.FORM_DIRECTIVES.slice(),
            templateUrl: 'app/html_files/milestone-component.html',
            styleUrls: ['app/css_files/milestone.css']
        }), 
        __metadata('design:paramtypes', [])
    ], MilestoneComponent);
    return MilestoneComponent;
}());
exports.MilestoneComponent = MilestoneComponent;
//# sourceMappingURL=milestone.component.js.map