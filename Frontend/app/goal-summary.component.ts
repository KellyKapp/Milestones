import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FORM_DIRECTIVES } from "@angular/common";

@Component({
	selector: "goal-summary",
	template: `
		<div class="goal-summary">

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
}
