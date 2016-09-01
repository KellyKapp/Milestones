import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FORM_DIRECTIVES } from "@angular/common";
import { Router } from "@angular/router";
import { GoalBuilderService } from "./goal-builder.service";
import { GoalBuilderComponent } from "./goal-builder.component";
import { TimelineComponent } from "./timeline.component";

declare let $;

@Component ({
	selector: 'resources-output',
	template: `
		<div class="row">
			<div class="col-md-1"></div>
			<div class="col-md-4">
				<li class="resources-output">{{resource.description}}</li>
			</div>
			<div class="col-md-6">
				<li class="resources-output">{{resource.cost | currency:'USD':true:'1.2-2'}}</li>
			</div>
		</div>
	`,
	styles: [`
		li {
			list-style-type: none;
		}
	`]
})

class ResourcesOutputComponent {
	@Input() resource;
}

@Component ({
	selector: 'team-output',
	template: `
		<div class="row">
			<div class="col-md-1"></div>
			<div class="col-md-4">
				<li class="team-output">{{person.name}}</li>
			</div>
			<div class="col-md-6">
				<li class="team-output">{{person.role}}</li>
			</div>
		</div>
	`,
	styles: [`
		li {
			list-style-type: none;
		}
	`]
})

class TeamOutputComponent {
	@Input() person;
}

@Component ({
	selector: 'obstacle-output',
	template: `
		<div class="row">
			<div class="col-md-1"></div>
			<div class="col-md-4">
				<li class="obstacle-output">{{obstacle.description}}</li>
			</div>
			<div class="col-md=6">
				<li class="obstacle-output">{{obstacle.solution}}</li>
			</div>
		</div>
	`,
	styles: [`
		li {
			list-style-type: none;
		}
	`]
})

class ObstacleOutputComponent {
	@Input() obstacle;
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



