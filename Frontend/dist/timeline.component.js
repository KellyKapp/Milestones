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
var MilestoneDotComponent = (function () {
    function MilestoneDotComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MilestoneDotComponent.prototype, "milestone", void 0);
    MilestoneDotComponent = __decorate([
        core_1.Component({
            selector: 'milestone-dot',
            template: "\n\t\t<div class=\"milestone-dot\">\n\t\n\t\t</div>\n\t",
            styles: ["\n\t:host {\n\t\tposition: absolute;\n\t\tz-index: 1;\n\t\theight: 20px;\n\t\twidth: 20px;\n\t\tborder-radius: 50%;\n\t\tbackground-color: lightgrey;\n\t\tmargin-left: 65px;\n\t\tdisplay: inline-block;\n\t}\n\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], MilestoneDotComponent);
    return MilestoneDotComponent;
}());
var TimelineComponent = (function () {
    function TimelineComponent(goalBuilderService) {
        this.goalBuilderService = goalBuilderService;
        this.openModal = new core_1.EventEmitter();
    }
    TimelineComponent.prototype.getTopMargin = function (milestone) {
        var start = this.goal.startDate;
        var end = this.goal.completionDate;
        var ms = Math.abs(new Date(end).getTime() - new Date(start).getTime());
        var pixelsPerMs = 400 / ms;
        var milestoneMargin = (Math.round((new Date(milestone.deadline).getTime() - new Date(start).getTime()) * pixelsPerMs));
        return milestoneMargin;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TimelineComponent.prototype, "goal", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TimelineComponent.prototype, "milestones", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TimelineComponent.prototype, "openModal", void 0);
    TimelineComponent = __decorate([
        core_1.Component({
            selector: "timeline",
            directives: [MilestoneDotComponent],
            template: "\n\t\t<div class=\"timeline\">\n\t\t\t<div class=\"date start\" id=\"canvas\">\n\t\t\t\t{{goal.startDate | date:\"longDate\"}}\n\t\t\t</div>\n\t\t\t<div class=\"svg\">\n\t\t\t\t<svg height=\"400\" width=\"150\">\n  \t\t\t\t\t<line x1=\"75\" y1=\"0\" x2=\"75\" y2=\"400\" style=\"stroke:#32C5D2;stroke-width:2\" />\n\t\t\t\t</svg>\n\t\t\t\t<milestone-dot \n\t\t\t\t\t*ngFor=\"let milestone of milestones\"\n\t\t\t\t\t[milestone]=\"milestone\"\n\t\t\t\t\t(click)=\"openModal.emit(milestone)\"\n\t\t\t\t\t[style.top.px]=\"getTopMargin(milestone)\"\n\t\t\t\t>\n\t\t\t\t</milestone-dot>\n\t\t\t</div>\n\t\t\t<div class=\"date end\">\n\t\t\t\t{{goal.completionDate | date:\"longDate\"}}\n\t\t\t</div>\n\t\t</div>\n\t",
            styles: ["\n\t\tsvg {\n\t\t\tposition: absolute;\n\t\t\tz-index: -1;\n\t\t}\n\t\t.date {\n\t\t\theight: 30px;\n\t\t\twidth: 150px;\n\t\t\tmargin: 0 auto;\n\t\t\ttext-align: center;\n\t\t\tfont-size: 1.15em;\n\t\t}\n\t\t.add-milestone {\n\t\t\theight: 40px;\n\t\t\twidth: 150px;\n\t\t\tmargin: 15px 58px;\n\t\t\tfont-family: Helvetica;\n\t\t\tfont-size: 1em;\n\t\t\tbackground-color: #32C5D2;\n\t\t\tborder-radius: 0;\n\t\t\tborder: none;\n\t\t\tcolor: white;\n\t\t}\n\t\t.svg {\n\t\t\tposition: relative;\n\t\t\theight: 400px;\n\t\t\twidth: 150px;\n\t\t}\n\t\t.end {\n\t\t\tmargin-top: 20px;\n\t\t}\n\t"]
        }), 
        __metadata('design:paramtypes', [goal_builder_service_1.GoalBuilderService])
    ], TimelineComponent);
    return TimelineComponent;
}());
exports.TimelineComponent = TimelineComponent;
//# sourceMappingURL=timeline.component.js.map