import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FORM_DIRECTIVES } from "@angular/common";
import { Router } from "@angular/router";
import { GoalBuilderService } from "./goal-builder.service";
import { GoalBuilderComponent } from "./goal-builder.component";
import { TimelineComponent } from "./timeline.component";

declare let $;

@Component ({
	selector: 'resources-output',
	template: `<li class="resources-output">{{resource.description}}</li>`,
})

class ResourcesOutputComponent {

}

@Component ({
	selector: 'team-output',
	template: `<li class="team-output"></li>`,
})

class TeamOutputComponent {

}

@Component ({
	selector: 'obstacle-output',
	template: `<li class="obstacle-output"></li>`,
})

class ObstacleOutputComponent {

}


@Component ({
	selector: 'milestone',
	directives: [ 
		...FORM_DIRECTIVES,
		ResourcesOutputComponent,
		TeamOutputComponent,
		ObstacleOutputComponent
	 ],
	templateUrl: 'app/html_files/milestone-component.html',
	styleUrls: ['app/css_files/milestone.css']
})


export class MilestoneComponent {

	@Input() activeMilestone;
	@Input() goal;
	@Input() resources;
	@Input() team;
	@Input() obstacles;

	// start;
	// end; 
	// deadline;

	resourceObject = {
		description: "",
		cost: ""
	};

	teamObject = {
		name: "",
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
		}.bind(this));
	}

	addTeamMember() {
		this.goalBuilderService
		.addTeamMember(this.activeMilestone, this.teamObject)
		.subscribe(function(res) {
		}.bind(this));
	}

	addObstacle() {
		this.goalBuilderService
		.addObstacle(this.activeMilestone, this.obstacleObject)
		.subscribe(function(res) {
		}.bind(this));
	}

}



