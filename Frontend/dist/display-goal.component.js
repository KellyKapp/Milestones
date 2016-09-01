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
var goal_builder_service_1 = require("./goal-builder.service");
var router_1 = require("@angular/router");
var DisplayGoalComponent = (function () {
    function DisplayGoalComponent(goalBuilderService, router) {
        this.goalBuilderService = goalBuilderService;
        this.router = router;
    }
    DisplayGoalComponent.prototype.viewGoal = function () {
        this.router.navigate(['/goal-builder', this.goalItem._id]);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DisplayGoalComponent.prototype, "goalItem", void 0);
    DisplayGoalComponent = __decorate([
        core_1.Component({
            selector: "display-goal",
            template: "\n\t\t<div class=\"row goal-block\" (click)=\"viewGoal()\">\n\t\t\t<div class=\"goal-name\">\n\t\t\t\t{{goalItem.name}}\n\t\t\t</div>\n\t\t\t<div class=\"completion-date\">\n\t\t\t\t{{goalItem.completionDate | date:\"longDate\"}}\n\t\t\t</div>\n\t\t</div>\n\t",
            styles: ["\n\t\t.goal-block {\n\t\t\tbackground-color: #32c5d2;\n\t\t\tpadding: 5px 15px;\n\t\t}\n\t\t.goal-name {\n\t\t\tfont-size: 1.7em;\n\t\t\theight: 50px;\n\t\t\twidth: 300px\n\t\t}\n\t\t.completion-date {\n\t\t\tfont-size: 1.2em;\n\t\t\theight: 40px;\n\t\t\tcolor: white;\n\t\t\twidth: 200px;\n\t\t}\n\t"]
        }), 
        __metadata('design:paramtypes', [goal_builder_service_1.GoalBuilderService, router_1.Router])
    ], DisplayGoalComponent);
    return DisplayGoalComponent;
}());
exports.DisplayGoalComponent = DisplayGoalComponent;
//# sourceMappingURL=display-goal.component.js.map