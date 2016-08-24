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
            milestones: []
        };
    }
    TimelineComponent.prototype.DrawTimeline = function () {
    };
    TimelineComponent.prototype.ngOnInit = function () {
        var ctx = this.canvas.nativeElement.getContext("2d");
        function Vertical_line() {
            ctx.beginPath();
            ctx.moveTo(150, 10);
            ctx.lineTo(150, 390);
            ctx.closePath();
            ctx.stroke();
        }
        Vertical_line();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TimelineComponent.prototype, "goal", void 0);
    __decorate([
        core_1.ViewChild('canvas'), 
        __metadata('design:type', Object)
    ], TimelineComponent.prototype, "canvas", void 0);
    TimelineComponent = __decorate([
        core_1.Component({
            selector: "timeline",
            template: "\n\t\t<div class=\"timeline\">\n\t\t\t<div class=\"date start\">\n\t\t\t\t{{goal.startDate}}\n\t        </div>\n\t        <canvas #canvas width=\"300\" height=\"400\" style=\"border:solid 1px #000000;\">\n\t\t\t</canvas>\n\n\t\t\t<div class=\"date end\">\n\t\t\t\t{{goal.completionDate}}\n\t        </div>\n\n\t        <button class=\"btn btn-default\"\n    \t\t\tdata-toggle=\"modal\" data-target=\".modal\"\n\t\t\t>Add Milestone</button>\n\n\t\t</div>\n\t",
            styles: ["\n\t\t.line {\n\t\t\tz-index: -1;\n\t\t}\n\t\t.date {\n\t\t\theight: 30px;\n\t\t\twidth: 80px;\n\t\t\tborder: 1px solid black;\n\t\t}\n\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], TimelineComponent);
    return TimelineComponent;
}());
exports.TimelineComponent = TimelineComponent;
//# sourceMappingURL=timeline.component.js.map