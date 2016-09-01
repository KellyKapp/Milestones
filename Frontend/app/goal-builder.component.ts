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
				// for (let i = 0; i < this.milestones.length; i++) {
				// 	for (let j = 0; j < this.milestones[i].resources.length; j++) {
				// 		this.resources.push(this.milestone.resources[i]);
				// 	}
				// }
			}.bind(this));
		}.bind(this));
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
		$(".milestone").modal();
		console.log(milestone);
	}

}

