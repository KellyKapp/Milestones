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

	moveToStartDate(evt) {
		console.log("clicked");
		// open input for start date on timeline
	}
}
