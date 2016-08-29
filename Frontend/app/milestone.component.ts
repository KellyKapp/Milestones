import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FORM_DIRECTIVES } from "@angular/common";
import { Router } from "@angular/router";
import { GoalBuilderService } from "./goal-builder.service";
import { GoalBuilderComponent } from "./goal-builder.component";


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
		.addResource(this.activeMilestone, this.resourceObject, this.goal)
		.subscribe(function(res) {
				console.log(res);
				this.resourceObject = res;
				console.log(this.resourceObject);
		}.bind(this));
	}

	// buildNewTeam() {
	// 	this.goalBuilderService
	// 	.buildNewTeam(this.teamObject)
	// 	.subscribe(function(res) {
	// 		console.log(res);
	// 	}.bind(this));
	// }

	// buildNewObstacle() {
	// 	this.goalBuilderService
	// 	.buildNewObstacle(this.obstacleObject)
	// 	.subscribe(function(res) {
	// 		console.log(res);
	// 	}.bind(this));
	// }

	saveMilestone() {
	}

}

