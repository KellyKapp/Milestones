import { Component, Input, Output, EventEmitter } from "@angular/core";
import { GoalBuilderService } from "./goal-builder.service";
import { Router } from "@angular/router";

@Component ({
	selector: "display-goal",
	template: `
		<div class="row goal-block">
			<div class="goal-name">
				{{goalItem.name}}
			</div>
			<div class="completion-date">
				{{goalItem.completionDate | date:"longDate"}}
			</div>
			<div class="delete-goal">
				<button (click)="viewGoal()">View</button>
			</div>
			<div class="delete-goal">
				<button (click)="deleteGoal()">-</button>
			</div>
		</div>
	`,
	styles: [`
		.goal-block {
			background-color: #32c5d2;
			padding: 5px 15px;
		}
		.goal-name {
			font-size: 1.7em;
			height: 50px;
			width: 300px
		}
		.completion-date {
			font-size: 1.2em;
			height: 40px;
			color: white;
			width: 200px;
		}
	`]
})

export class DisplayGoalComponent {

	@Input() goalItem;

	@Output() onDelete = new EventEmitter();

	constructor (
		private goalBuilderService: GoalBuilderService,
		private router: Router) {}

	viewGoal() {
		this.router.navigate(['/goal-builder', this.goalItem._id]);
	}

	deleteGoal() {
		this.onDelete.emit();
	}
}
