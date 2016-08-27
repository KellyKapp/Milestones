import { Component, Input } from "@angular/core";
import { GoalBuilderService } from "./goal-builder.service";

@Component ({
	selector: "display-goal",
	template: `<div>
			{{goalsCopy | json}}
		</div>`
})

export class DisplayGoalComponent {
	// @Input() nameVariable;

	goalsCopy = [];

	constructor (private goalBuilderService: GoalBuilderService) {}

	ngOnInit() {
		this.goalBuilderService.getAllGoals().subscribe(function(res) {
			this.goalsCopy = res;
		}.bind(this));
	}
}
