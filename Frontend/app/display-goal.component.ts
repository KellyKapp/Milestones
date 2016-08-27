import { Component, Input } from "@angular/core";
import { GoalBuilderService } from "./goal-builder.service";

@Component ({
	selector: "display-goal",
	template: `<div>
			{{titles | json}}
		</div>`
})

export class DisplayGoalComponent {
	// @Input() nameVariable;

	goalsCopy = [];

	titles = [];
	constructor (private goalBuilderService: GoalBuilderService) {}

	ngOnInit() {
		this.goalBuilderService.getAllGoals().subscribe(function(res) {
			this.goalsCopy = res;
			for (var i = 0; i < res.length; i++) {
				this.titles.push(res[i].name);
			}
			console.log(this.goalsCopy[0].name);
		}.bind(this));
	}
}
