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
var TimelineComponent = (function () {
    function TimelineComponent() {
        this.timelineObject = {
            startDate: "",
            completionDate: "",
            milestones: []
        };
    }
    TimelineComponent.prototype.moveToCompletionDate = function () {
        console.log("yay!");
        // open input for completion date on timeline
    };
    TimelineComponent.prototype.openFirstMilestone = function () {
        console.log("woohoo!");
        // open/expand a Modal?? for the first Milestone input
    };
    TimelineComponent = __decorate([
        core_1.Component({
            selector: "timeline",
            template: "\n\t\t<div class=\"timeline\">\n\t\t\t<div class=\"date\">\n\t\t\t\t<input\n\t                class=\"start-date\"\n\t                type=\"text\"\n\t                placeholder=\"start date\"\n\t                [(ngModel)]=\"timelineObject.startDate\"\n\t                (blur)=\"moveToCompletionDate()\"\n\t            />\n\t        </div>\n\n\t\t\t<div>\n\t\t\t\t<svg class=\"line\" height=\"400\">\n\t  \t\t\t<line x10=\"1\" y1=\"0\" x20=\"1\" y2=\"400\" style=\"stroke:rgb(128,140,140);stroke-width:5\" />\n\t\t\t\t</svg>\n\t\t\t</div>\n\n\t\t\t<div class=\"date\">\n\t\t\t\t<input\n\t                class=\"completion-date\"\n\t                type=\"text\"\n\t                placeholder=\"completion date\"\n\t                [(ngModel)]=\"timelineObject.completionDate\"\n\t                (blur)=\"openFirstMilestone()\"\n\t            />\n\t        </div>\n\n\t\t</div>\n\t",
            styles: ["\n\t\t.line {\n\t\t\tz-index: -1;\n\t\t}\n\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], TimelineComponent);
    return TimelineComponent;
}());
exports.TimelineComponent = TimelineComponent;
//# sourceMappingURL=timeline.component.js.map