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
var GoalSummaryComponent = (function () {
    function GoalSummaryComponent(goalBuilderService, router) {
        this.goalBuilderService = goalBuilderService;
        this.router = router;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], GoalSummaryComponent.prototype, "goal", void 0);
    GoalSummaryComponent = __decorate([
        core_1.Component({
            selector: "goal-summary",
            template: "\n\t\t<div class=\"goal-summary\">\n\t\t\t<h5>Goal</h5>\n\t\t\t<input [(ngModel)]=\"goal.name\">\n\n\t\t\t<h5>Start Date</h5>\n\t\t\t<input [(ngModel)]=\"goal.startDate\">\n\n\t\t\t<h5>Completion Date</h5>\n\t\t\t<input [(ngModel)]=\"goal.completionDate\">\n\t\t</div>\n\t",
            styles: ["\n\n\t"]
        }), 
        __metadata('design:paramtypes', [goal_builder_service_1.GoalBuilderService, router_1.Router])
    ], GoalSummaryComponent);
    return GoalSummaryComponent;
}());
exports.GoalSummaryComponent = GoalSummaryComponent;
// <h5>Milestones</h5>
// <input [(ngModel)]="goal.milestones.description" disabled>
// <h5>Resources</h5>
// <ul>
//        <li *ngFor="let resource.name of Resources">
//        	{{resource.name}}
//        </li>
//    </ul>
//    <ul>
//    	<li *ngFor="let resource.cost of Resources">
//    		{{resource.cost}}
//    	</li>
// </ul>
// <h5>Team</h5>
// <ul>
// 	<li *ngFor="let team.member of Team">
// 		{{team.member}}
// 	</li>
// </ul>
// <ul>
// 	<li *ngFor="let team.role of Team">
// 		{{team.role}}
// 	</li>
// </ul>
// <ul>
// 	<li *ngFor="let team.hours of Team">
// 		{{team.hours}}
// 	</li>
// </ul>
// <ul>
// 	<li *ngFor="let team.cost of Team">
// 		{{team.cost.toFixed(2)}}
// 	</li>
// </ul>
// <h5>Obstacles & Solutions</h5>
// <ul>
// 	<li *ngFor="let obstacle.description of Obstacles">
// 		{{obstacle.name}}
// 	</li>
// </ul>
// <ul>
// 	<li *ngFor="let obstacle.solution of Obstacles">
// 		{{obstacle.solution}}
// 	</li>
// </ul>
//# sourceMappingURL=goal-summary.component.js.map