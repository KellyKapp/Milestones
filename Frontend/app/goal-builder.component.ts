import { Component, Input, Output, EventEmitter } from "@angular/core";
import { GoalSummaryComponent } from "./goal-summary.component";
import { TimelineComponent } from "./timeline.component";
import { MilestoneComponent } from "./milestone.component";
import { Router, ActivatedRoute } from "@angular/router";
import { GoalBuilderService } from "./goal-builder.service";

declare let $;


@Component({
	selector: "goal-builder",
	templateUrl: 'app/html_files/goal-builder-component.html',
	styleUrls: [
		'app/css_files/goal-builder.css', 
		'app/css_files/welcome.css'
	],
	directives: [
		GoalSummaryComponent,
		TimelineComponent,
		MilestoneComponent
	]
})


export class GoalBuilderComponent {

	private goal;
	private milestones = [];
	private resources = [];
	private team = [];
	private obstacles = [];

	private activeResources = [];

	milestoneObject = {
		description: "",
		deadline: "",
	};

	activeMilestone = null;

	constructor(
			private goalBuilderService: GoalBuilderService,
			private route: ActivatedRoute, 
			private router: Router) {}


	ngOnInit() {
		this.route.params.subscribe(function(params) {
			this.goalBuilderService.findGoalById(params["_id"])
			.subscribe(function(goal) {
				this.goal = goal;
				this.milestones = this.goalBuilderService.getMilestonesForGoal(this.goal._id);

				this.resources = this.getResources();
				this.team = this.getTeam();
				this.obstacles = this.getObstacles();
			}.bind(this));
		}.bind(this));
	}

	getResources() {
		console.log(this.milestones);
		for (let i = 0; i < this.milestones.length; i++) {
			for (let j = 0; j < this.milestones[i].resources.length; j++) {
				this.resources.push(this.milestones[i].resources[j]);
			}
		} return this.resources;
	}

	getTeam() {
		for (let i = 0; i < this.milestones.length; i++) {
			for (let j = 0; j < this.milestones[i].people.length; j++) {
				this.team.push(this.milestones[i].people[j]);
			}
		} return this.team;
	}

	getObstacles() {
		for (let i = 0; i < this.milestones.length; i++) {
			for (let j = 0; j < this.milestones[i].obstacles.length; j++) {
				this.obstacles.push(this.milestones[i].obstacles[i]);
			}
		} return this.obstacles;
	}

	buildNewMilestone() {
		this.goalBuilderService
		.buildNewMilestone(this.milestoneObject, this.goal)
		.subscribe(function(res) {
			this.activeMilestone = res;
			this.milestones.push(res);
			$(".milestone").modal();
		}.bind(this));
	}

	openModal(milestone) {
		this.activeMilestone = milestone;
		this.activeResources = this.activeMilestone.resources;
		// this.team = this.activeMilestone.people;
		// this.obstacles = this.activeMilestone.obstacles;
		$(".milestone").modal();
		console.log(milestone);
	}

}

