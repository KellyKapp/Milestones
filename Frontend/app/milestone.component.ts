import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FORM_DIRECTIVES } from "@angular/common";
import { Router } from "@angular/router";
import { GoalBuilderService } from "./goal-builder.service";
import { GoalBuilderComponent } from "./goal-builder.component";
import { TimelineComponent } from "./timeline.component";

declare let $;

@Component ({
	selector: 'resources-output',
	template: `<div class="resources-output">{{resource.description}}</div>`,
	styles: ['.resources-output {border: 1px solid black; height: 20px;}']
})

class ResourcesOutput {

}


@Component ({
	selector: 'milestone',
	directives: [ 
		...FORM_DIRECTIVES,
		ResourcesOutput
	 ],
	templateUrl: 'app/html_files/milestone-component.html',
	styleUrls: ['app/css_files/milestone.css']
})


export class MilestoneComponent {

	@Input() activeMilestone;
	@Input() goal;
	@Input() resources;

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
		this.resources = this.activeMilestone.resources;
		console.log(this.activeMilestone.resources);
	}

	addResource() {
		this.goalBuilderService
		.addResource(this.activeMilestone, this.resourceObject)
		.subscribe(function(res) {
			// this.resourceObject = res;
			this.resources.push(res);
			console.log(this.resources);
		}.bind(this));
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

}



