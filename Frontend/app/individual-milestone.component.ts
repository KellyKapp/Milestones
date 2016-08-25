import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FORM_DIRECTIVES } from "@angular/common";
import { Router } from "@angular/router";
import { GoalBuilderService } from "./goal-builder.service";

@Component ({
	selector: 'individual-milestone',
	directives: [ ...FORM_DIRECTIVES ],
	templateUrl: 'app/html_files/individual-milestone-component.html',
	styleUrls: ['app/css_files/milestone.css']
})

export class IndividualMilestoneComponent {

milestoneObject = {
	description: "",
	deadline: "",
	resources: [],
	teams: [],
	obstacles: []
};

resourceObject = {
	description: "",
	cost: ""
};

teamObject = {
	members: [],
	roles: [],
};

obstacleObject = {
	description: "",
	solution: ""
};

constructor (private goalBuilderService: GoalBuilderService, private router: Router) {}

buildNewMilestone() {
	this.goalBuilderService
	.buildNewMilestone(this.milestoneObject)
	.subscribe(function(res) {
		console.log(res);
	}.bind(this));
}

buildNewResource() {
		this.goalBuilderService
		.buildNewResource(this.resourceObject)
		.subscribe(function(res) {
			console.log(res);
		}.bind(this));
	}

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
	// save data to Mongo
}

}

