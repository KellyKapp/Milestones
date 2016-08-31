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
    // ngOnInit() {
    // 	let start = this.goal.startDate;
    // 	let end = this.goal.completionDate;
    // 	for (let i = 0; i < this.goal.milestones.length; i++) {
    // 		$('.svg').append
    // 		('<div id="' + this.goal.milestones[i]._id + 
    // 			'" class="milestone-dot" (click)="openModal(this.id)"></div>');
    // 		$('#' + this.goal.milestones[i]._id).css("margin-top", function(){
    // 			var ms = Math.abs(new Date(end).getTime() - new Date(start).getTime());
    // 			var pixelsPerMs = 400 / ms;
    // 			var milestoneMargin = (Math.round(
    // 				(new Date(this.goal.milestones[i].deadline).getTime() - new Date(start).getTime()
    // 			) * pixelsPerMs)) + "px";
    // 			return milestoneMargin;
    // 		});
    // 	}
    // }
    TimelineComponent.prototype.openModal = function (divId) {
        $('.svg').on('click', 'divId', function (event) {
            for (var i = 0; i < this.goal.milestones.length; i++) {
                if (this.goal.milestones[i]._id === divId) {
                    this.goal.milestones[i] = this.activeMilestone;
                    return this.activeMilestone;
                }
            }
            console.log("clicked");
            // this.activeMilestone = the milestone with the id that matches the div id
            $("#" + this.activeMilestone._id).modal();
        });
    };
    ;
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TimelineComponent.prototype, "goal", void 0);
    TimelineComponent = __decorate([
        core_1.Component({
            selector: "timeline",
            template: "\n\t\t<div class=\"timeline\">\n\t\t\t<div class=\"date start\" id=\"canvas\">\n\t\t\t\t{{goal.startDate | date:\"longDate\"}}\n\t\t\t</div>\n\t\t\t<div class=\"svg\">\n\t\t\t\t<svg height=\"400\" width=\"150\">\n  \t\t\t\t\t<line x1=\"75\" y1=\"0\" x2=\"75\" y2=\"400\" style=\"stroke:#32C5D2;stroke-width:2\" />\n\t\t\t\t</svg>\n\t\t\t</div>\n\t\t\t<div class=\"date end\">\n\t\t\t\t{{goal.completionDate | date:\"longDate\"}}\n\t\t\t</div>\n\t\t</div>\n\t",
            styles: ["\n\t\tsvg {\n\t\t\tposition: absolute;\n\t\t\tz-index: -1;\n\t\t}\n\t\t.date {\n\t\t\theight: 30px;\n\t\t\twidth: 150px;\n\t\t\tmargin: 0 auto;\n\t\t\ttext-align: center;\n\t\t\tfont-size: 1.15em;\n\t\t}\n\t\t.add-milestone {\n\t\t\theight: 40px;\n\t\t\twidth: 150px;\n\t\t\tmargin: 15px 58px;\n\t\t\tfont-family: Helvetica;\n\t\t\tfont-size: 1em;\n\t\t\tbackground-color: #32C5D2;\n\t\t\tborder-radius: 0;\n\t\t\tborder: none;\n\t\t\tcolor: white;\n\t\t}\n\t\t.svg {\n\t\t\theight: 400px;\n\t\t\twidth: 150px;\n\t\t}\n\t\t:host ::content .milestone-dot {\n\t\t\tposition: absolute;\n\t\t\tz-index: 1;\n\t\t\theight: 20px;\n\t\t\twidth: 20px;\n\t\t\tborder-radius: 50%;\n\t\t\tbackground-color: lightgrey;\n\t\t\tmargin-left: 65px;\n\t\t}\n\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], TimelineComponent);
    return TimelineComponent;
}());
exports.TimelineComponent = TimelineComponent;
//# sourceMappingURL=timeline.component.js.map