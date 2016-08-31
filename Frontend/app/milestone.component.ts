import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FORM_DIRECTIVES } from "@angular/common";
import { Router } from "@angular/router";
import { GoalBuilderService } from "./goal-builder.service";
import { GoalBuilderComponent } from "./goal-builder.component";
import { TimelineComponent } from "./timeline.component";

declare let $;


@Component ({
	selector: 'milestone',
	directives: [ 
		...FORM_DIRECTIVES,
	 ],
	templateUrl: 'app/html_files/milestone-component.html',
	styleUrls: ['app/css_files/milestone.css']
})


export class MilestoneComponent {

	@Input() activeMilestone;
	@Input() goal;

	start;
	end; 
	deadline;

	resourceObject = {
		description: "",
		cost: ""
	};

	teamObject = {
		member: "",
		role: ""
	};

	obstacleObject = {
		description: "",
		solution: ""
	};

	constructor (
		private goalBuilderService: GoalBuilderService, 
		private router: Router) {}

	addResource() {
		this.goalBuilderService
		.addResource(this.activeMilestone, this.resourceObject)
		.subscribe(function(res) {
				this.resourceObject = res;
				console.log(this.resourceObject);
		}.bind(this));
		// let form = (<HTMLFormElement>document.getElementById("resource-form"));
		// form.reset();
	}

	addTeamMember() {
		this.goalBuilderService
		.addTeamMember(this.activeMilestone, this.teamObject)
		.subscribe(function(res) {
			console.log(res);
			this.teamObject = res;
		}.bind(this));
	}

	addObstacle() {
		this.goalBuilderService
		.addObstacle(this.activeMilestone, this.obstacleObject)
		.subscribe(function(res) {
			console.log(res);
			this.obstacleObject = res;
		}.bind(this));
	}

	saveMilestone() {

		let start = this.goal.startDate;
		let end = this.goal.completionDate;
		let deadline = this.activeMilestone.deadline;

		$('.svg').append
		('<div id="' + this.activeMilestone._id + 
			'" class="milestone-dot" (click)="openModal(this.id)"></div>');
		$('#' + this.activeMilestone._id).css("margin-top", function(){
			var ms = Math.abs(new Date(end).getTime() - new Date(start).getTime());
			var pixelsPerMs = 400 / ms;
			var milestoneMargin = (Math.round(
				(new Date(deadline).getTime() - new Date(start).getTime()
			) * pixelsPerMs)) + "px";
			return milestoneMargin;
		});
	}
}



