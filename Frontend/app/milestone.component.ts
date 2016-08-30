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

	ngOnInit() {
		console.log("In milestone component ngOnInit", this.goal);

		this.start = this.goal.startDate;
		this.end = this.goal.completionDate;
		this.deadline = this.activeMilestone.deadline;
	}

	addResource() {
		this.goalBuilderService
		.addResource(this.activeMilestone, this.resourceObject, this.goal)
		.subscribe(function(res) {
				console.log(res);
				this.resourceObject = res;
				console.log(this.resourceObject);
		}.bind(this));
	}

	addTeamMember() {
		this.goalBuilderService
		.addTeamMember(this.activeMilestone, this.teamObject, this.goal)
		.subscribe(function(res) {
			console.log(res);
			this.teamObject = res;
		}.bind(this));
	}

	addObstacle() {
		this.goalBuilderService
		.addObstacle(this.activeMilestone, this.obstacleObject, this.goal)
		.subscribe(function(res) {
			console.log(res);
			this.obstacleObject = res;
		}.bind(this));
	}

	saveMilestone() {
		$('.svg').append('<div class="milestone-dot"></div>');
		$('.milestone-dot').css("margin-top", function(start, end, deadline){
			var ms = Math.abs(end.getTime() - start.getTime());
			var pixelsPerMs = 400 / ms;
			var milestoneMargin = (Math.round((deadline.getTime() - start.getTime()) * pixelsPerMs)) + "px";

			return milestoneMargin;
		});
	}
}

