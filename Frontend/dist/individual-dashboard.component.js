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
var IndividualDashboardComponent = (function () {
    function IndividualDashboardComponent(goalBuilderService, router) {
        this.goalBuilderService = goalBuilderService;
        this.router = router;
        this.individualGoalStartObject = {
            name: "",
            startDate: "",
            completionDate: "",
            typeIndividual: true,
            typeCorporate: false
        };
    }
    IndividualDashboardComponent.prototype.buildNewGoal = function () {
        this.goalBuilderService
            .buildNewGoal(this.individualGoalStartObject)
            .subscribe(function (res) {
            console.log(res);
            this.router.navigate(['/individual-goal-builder', res._id]);
        }.bind(this));
    };
    IndividualDashboardComponent = __decorate([
        core_1.Component({
            selector: "individual-dashboard",
            template: "\n        <div class=\"row dashboard\">\n        \t<div class=\"col-md-3\">\n        \t</div>\n        \t<div class=\"col-md-3\">\n        \t</div>\n        \t<div class=\"col-md-3\">\n        \t</div>\n        \t<div class=\"col-md-3\">\n        \t</div>\n        </div>\n\n    \t<div class=\"row goal-starter\">\n        \t<div class=\"col-md-3\">\n\t        \t<input\n\t                class=\"form-control\"\n\t                type=\"text\"\n\t                placeholder=\"Goal Name\"\n\t                [(ngModel)]=\"individualGoalStartObject.name\"\n\t            />\n\t        </div>\n\t        <div class=\"col-md-3 start\">\n\t            <input\n\t                class=\"form-control\"\n\t                type=\"date\"\n\t                placeholder=\"start date\"\n\t                [(ngModel)]=\"individualGoalStartObject.startDate\"\n\t            />\n\t        </div>\n\t        <div class=\"col-md-3 complete\">\n\t            <input\n\t                class=\"form-control\"\n\t                type=\"date\"\n\t                placeholder=\"end date\"\n\t                [(ngModel)]=\"individualGoalStartObject.completionDate\"\n\t            />\n\t        </div>\n\t        <div class=\"col-md-3\">\n\t\t\t\t<button class=\"btn btn-default\" (click)=\"buildNewGoal()\">\n\t\t\t\t\tBuild a New Goal\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n    ",
            styles: ["\n\t\t.dashboard {\n\t\t\theight: 450px;\n\t\t\twidth: 1300px;\n\t\t\tmargin: 10px 30px;\n\t\t\tborder: 1px dotted lightgrey;\n\t\t}\n\t\t.goal-starter {\n\t\t\twidth: 1300px;\n\t\t\theight: 50px;\n\t\t\tmargin: 0 auto;\n\t\t\tpadding: 8px 250px;\n\t\t\tbackground-color: lightgrey;\n\t\t}\n\t\t.start {\n\t\t\twidth: 200px;\n\t\t}\n\t\t.complete {\n\t\t\twidth: 200px;\n\t\t}\n    "]
        }), 
        __metadata('design:paramtypes', [goal_builder_service_1.GoalBuilderService, router_1.Router])
    ], IndividualDashboardComponent);
    return IndividualDashboardComponent;
}());
exports.IndividualDashboardComponent = IndividualDashboardComponent;
// <p>{{goal.name}}</p>
// <input [(ngModel)]="goal.name">
//# sourceMappingURL=individual-dashboard.component.js.map