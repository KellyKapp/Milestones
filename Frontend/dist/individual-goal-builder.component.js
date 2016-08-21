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
var individual_milestone_component_1 = require("./individual-milestone.component");
var IndividualGoalBuilderComponent = (function () {
    function IndividualGoalBuilderComponent() {
    }
    IndividualGoalBuilderComponent = __decorate([
        core_1.Component({
            selector: "individual-goal-builder",
            template: "\n        <div class=\"row\">\n\t\t\t<div class=\"col-md-4 col-sm-12 divtest\">\n\t\t\t\t<goal-summary></goal-summary>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4 col-sm-12 divtest\">\n\t\t\t\t<timeline></timeline>\n\t\t\t</div>\n        </div>\n\n        <div id=\"individual-milestone\" class=\"modal fade\" role=\"dialog\">\n          <div class=\"modal-dialog modal-lg\">\n\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title\">Milestone</h4>\n              </div>\n              <div class=\"modal-body\">\n                <individual-milestone></individual-milestone>\n              </div>\n            </div>\n\n          </div>\n        </div>\n    ",
            styles: ["\n    \t.divtest {\n\t\t\tborder: 1px solid black;\n\t\t\theight: 700px;\n\t\t\twidth: 400px;\n    \t}\n    "],
            directives: [
                goal_summary_component_1.GoalSummaryComponent,
                timeline_component_1.TimelineComponent,
                individual_milestone_component_1.IndividualMilestoneComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], IndividualGoalBuilderComponent);
    return IndividualGoalBuilderComponent;
}());
exports.IndividualGoalBuilderComponent = IndividualGoalBuilderComponent;
//# sourceMappingURL=individual-goal-builder.component.js.map