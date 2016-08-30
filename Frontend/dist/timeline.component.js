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
    }
    TimelineComponent.prototype.ngOnInit = function () {
        var ctx = this.canvas.nativeElement.getContext("2d");
        function verticalLine() {
            ctx.beginPath();
            ctx.moveTo(50, 0);
            ctx.lineTo(50, 400);
            ctx.closePath();
            ctx.strokeStyle = "#32C5D2";
            ctx.stroke();
        }
        verticalLine();
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
            template: "\n\t\t<div class=\"timeline\">\n\t\t\t<div class=\"date start\">\n\t\t\t\t{{goal.startDate | date:\"longDate\"}}\n\t\t\t</div>\n\t\t\t<canvas #canvas width=\"100\" height=\"400\">\n\t\t\t</canvas>\n\n\t\t\t<div class=\"date end\">\n\t\t\t\t{{goal.completionDate | date:\"longDate\"}}\n\t\t\t</div>\n\t\t</div>\n\t",
            styles: ["\n\t\tcanvas {\n\t\t\tdisplay: block;\n\t\t\tmargin: 0 auto 7px auto;\n\t\t}\n\t\t.date {\n\t\t\theight: 30px;\n\t\t\twidth: 150px;\n\t\t\tmargin: 0 auto;\n\t\t\ttext-align: center;\n\t\t\tfont-size: 1.15em;\n\t\t}\n\t\t.add-milestone {\n\t\t\theight: 40px;\n\t\t\twidth: 150px;\n\t\t\tmargin: 15px 58px;\n\t\t\tfont-family: Helvetica;\n\t\t\tfont-size: 1em;\n\t\t\tbackground-color: #32C5D2;\n\t\t\tborder-radius: 0;\n\t\t\tborder: none;\n\t\t\tcolor: white;\n\t\t}\n\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], TimelineComponent);
    return TimelineComponent;
}());
exports.TimelineComponent = TimelineComponent;
//# sourceMappingURL=timeline.component.js.map