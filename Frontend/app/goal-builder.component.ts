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


	milestoneObject = {
		description: "",
		deadline: "",
	};

	activeMilestone = null;

	constructor(
			private goalBuilderService: GoalBuilderService,
			private route: ActivatedRoute, 
			private router: Router) {

	}

	ngOnInit() {
		this.route.params.subscribe(function(params) {
			this.goalBuilderService.findGoalById(params["_id"])
			.subscribe(function(goal) {
				this.goal = goal;
				console.log(this.goal);
			}.bind(this));
		}.bind(this));
	}

	buildNewMilestone() {
		console.log(this.milestoneObject);
		this.goalBuilderService
		.buildNewMilestone(this.milestoneObject, this.goal)
		.subscribe(function(res) {
				this.activeMilestone = res;
				$(".milestone").modal();
		}.bind(this));
	}


	// saveGoal() {
	// 	$(".save").modal();
	// }
}

