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
    TimelineComponent.prototype.DrawTimeline = function () {
    };
    TimelineComponent.prototype.ngOnInit = function () {
        var ctx = this.canvas.nativeElement.getContext("2d");
        function Vertical_line() {
            ctx.beginPath();
            ctx.moveTo(50, 0);
            ctx.lineTo(50, 400);
            ctx.closePath();
            ctx.strokeStyle = "#32C5D2";
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
            templateUrl: 'app/html_files/timeline-component.html',
            styles: ["\n\t\tcanvas {\n\t\t\tdisplay: block;\n\t\t\tmargin: 0 auto;\n\t\t}\n\t\t.date {\n\t\t\theight: 30px;\n\t\t\twidth: 150px;\n\t\t\tmargin: 0 auto;\n\t\t\ttext-align: center;\n\t\t\tfont-size: 1.15em;\n\t\t}\n\t\t.add-milestone {\n\t\t\theight: 40px;\n\t\t    width: 150px;\n\t\t    margin: 15px 58px;\n\t\t    font-family: Helvetica;\n\t\t    font-size: 1em;\n\t\t    background-color: #32C5D2;\n\t\t    border-radius: 0;\n\t\t    border: none;\n\t\t    color: white;\n\t\t}\n\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], TimelineComponent);
    return TimelineComponent;
}());
exports.TimelineComponent = TimelineComponent;
//# sourceMappingURL=timeline.component.js.map