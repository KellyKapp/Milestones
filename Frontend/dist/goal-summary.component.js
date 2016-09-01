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
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], GoalSummaryComponent.prototype, "milestones", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], GoalSummaryComponent.prototype, "resources", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], GoalSummaryComponent.prototype, "team", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], GoalSummaryComponent.prototype, "obstacles", void 0);
    GoalSummaryComponent = __decorate([
        core_1.Component({
            selector: "goal-summary",
            templateUrl: 'app/html_files/goal-summary-component.html',
            styles: ["\n\t\t.col-md-2 {\n\t\t\tborder-right: 1px solid grey;\n\t\t\tfont-size: 1.15em\n\t\t}\n\t\t.col-md-9 {\n\t\t\tfont-size: 1.25em;\n\t\t\tmargin: 7px 0;\n\t\t}\n\t\t.small-line {\n\t\t    height: 1.5px;\n\t\t    width: 40px;\n\t\t    background-color: #32C5D2;\n\t\t}\n\t\t.goal-name {\n\t\t\tfont-size: 1.2em;\n\t\t}\n\t\tinput {\n\t\t\tborder: none;\n\t\t}\n\t\tli {\n\t\t\tlist-style-type: none;\n\t\t\tfont-size: .85em;\n\t\t}\n\t"]
        }), 
        __metadata('design:paramtypes', [goal_builder_service_1.GoalBuilderService, router_1.Router])
    ], GoalSummaryComponent);
    return GoalSummaryComponent;
}());
exports.GoalSummaryComponent = GoalSummaryComponent;
//# sourceMappingURL=goal-summary.component.js.map