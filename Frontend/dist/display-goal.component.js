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
var DisplayGoalComponent = (function () {
    function DisplayGoalComponent(goalBuilderService) {
        this.goalBuilderService = goalBuilderService;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DisplayGoalComponent.prototype, "goalItem", void 0);
    DisplayGoalComponent = __decorate([
        core_1.Component({
            selector: "display-goal",
            template: "\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-2\">\n\t\t\t\t<input\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t[ngModel]=\"goalItem.name\"\n\t\t\t\t/>\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-2\">\n\t\t\t\t<input\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t[ngModel]=\"goalItem.completionDate\"\n\t\t\t\t/>\n\t\t\t</div>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [goal_builder_service_1.GoalBuilderService])
    ], DisplayGoalComponent);
    return DisplayGoalComponent;
}());
exports.DisplayGoalComponent = DisplayGoalComponent;
//# sourceMappingURL=display-goal.component.js.map