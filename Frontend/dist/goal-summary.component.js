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
var GoalSummaryComponent = (function () {
    function GoalSummaryComponent() {
        this.goalName = "";
    }
    GoalSummaryComponent.prototype.moveToStartDate = function (evt) {
        console.log("clicked");
        // open input for start date on timeline
    };
    GoalSummaryComponent = __decorate([
        core_1.Component({
            selector: "goal-summary",
            template: "\n\t\t<div class=\"goal-summary\">\n\t\t\t<div>\n\t\t\t\t<input\n                    class=\"form-control\"\n                    type=\"text\"\n                    placeholder=\"Goal Name\"\n                    [(ngModel)]=\"goalName\"\n                />\n\t\t\t</div>\n\t\t\t<div class=\"milestones-rollup\">\n\t\t\t\t<milestone-rollup></milestone-rollup>\n\t\t\t</div>\n\t\t</div>\n\t",
            styles: ["\n\n\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], GoalSummaryComponent);
    return GoalSummaryComponent;
}());
exports.GoalSummaryComponent = GoalSummaryComponent;
//# sourceMappingURL=goal-summary.component.js.map