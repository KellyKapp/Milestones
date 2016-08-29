import { Component, Input } from "@angular/core";
import { GoalBuilderService } from "./goal-builder.service";

@Component ({
	selector: "display-goal",
	template: `
		<div class="row">
			<div class="col-xs-2">
				<input
					class="form-control"
					type="text"
					[ngModel]="goalItem.name"
				/>
			</div>
			<div class="col-xs-2">
				<input
					class="form-control"
					type="text"
					[ngModel]="goalItem.completionDate"
				/>
			</div>
		</div>
	`
})

export class DisplayGoalComponent {

	@Input() goalItem;

	constructor (private goalBuilderService: GoalBuilderService) {}

}
