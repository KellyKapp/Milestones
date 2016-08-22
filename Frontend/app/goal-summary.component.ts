import { Component } from "@angular/core";
import { FORM_DIRECTIVES } from "@angular/common";
import { MilestonesRollupComponent } from "./milestones-rollup.component";

@Component({
	selector: "goal-summary",
	template: `
		<div class="goal-summary">
			<div>
				<input
                    class="form-control"
                    type="text"
                    placeholder="Goal Name"
                    [(ngModel)]="goalName"
                />
			</div>
			<button class="btn btn-default"
    			(click)="startGoal()"
			>Create</button>
			<div class="milestones-rollup">
				<milestone-rollup></milestone-rollup>
			</div>
		</div>
	`,
	styles: [`

	`]
})

export class GoalSummaryComponent {

		goalName: string= "";


	startGoal() {
		console.log("clicked");
		// save goal name to db
		// open blank timeline
		// unlock timeline start and end date fields
	}

	moveToStartDate(evt) {
		console.log("clicked");
		// open input for start date on timeline
	}
}
