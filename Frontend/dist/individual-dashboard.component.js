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
var IndividualDashboardComponent = (function () {
    function IndividualDashboardComponent() {
        this.individualGoalStartObject = {
            name: "",
            startDate: "",
            completionDate: ""
        };
    }
    IndividualDashboardComponent = __decorate([
        core_1.Component({
            selector: "individual-dashboard",
            template: "\n        <div class=\"dashboard\">\n        \t<div class=\"row\">\n\t        \t<div class=\"col-md-3\">\n\t\t        \t<input\n\t\t                class=\"form-control\"\n\t\t                type=\"text\"\n\t\t                placeholder=\"Goal Name\"\n\t\t                [(ngModel)]=\"individualGoalStartObject.name\"\n\t\t            />\n\t\t        </div>\n\t\t        <div class=\"col-md-3\">\n\t\t            <input\n\t\t                class=\"form-control\"\n\t\t                type=\"text\"\n\t\t                placeholder=\"start date\"\n\t\t                [(ngModel)]=\"individualGoalStartObject.startDate\"\n\t\t            />\n\t\t        </div>\n\t\t        <div class=\"col-md-3\">\n\t\t            <input\n\t\t                class=\"form-control\"\n\t\t                type=\"text\"\n\t\t                placeholder=\"end date\"\n\t\t                [(ngModel)]=\"individualGoalStartObject.completionDate\"\n\t\t            />\n\t\t        </div>\n\t\t        <div class=\"col-md-3\">\n\t\t\t\t\t<button class=\"btn btn-default\" (click)=\"buildNewGoal\">\n\t\t\t\t\t\t<a routerLink=\"/individual-goal-builder\">Build a New Goal</a>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], IndividualDashboardComponent);
    return IndividualDashboardComponent;
}());
exports.IndividualDashboardComponent = IndividualDashboardComponent;
//# sourceMappingURL=individual-dashboard.component.js.map