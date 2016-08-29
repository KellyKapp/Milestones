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
		.addResource(activeMilestone)
		.subscribe(function(res) {
				console.log(res.resources);
		}.bind(this));
	}



	// buildNewResource() {
	// 		this.goalBuilderService
	// 		.buildNewResource(this.resourceObject)
	// 		.subscribe(function(res) {
	// 			console.log(res);
	// 		}.bind(this));
	// 	}

	buildNewTeam() {
		this.goalBuilderService
		.buildNewTeam(this.teamObject)
		.subscribe(function(res) {
			console.log(res);
		}.bind(this));
	}

	buildNewObstacle() {
		this.goalBuilderService
		.buildNewObstacle(this.obstacleObject)
		.subscribe(function(res) {
			console.log(res);
		}.bind(this));
	}

	saveMilestone() {
		var dot = document.createElement("div");

		canvas.appendChild(dot);
	}

}

