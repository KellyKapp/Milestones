import { Component, Input } from "@angular/core";
import { GoalBuilderService } from "./goal-builder.service";

@Component ({
	selector: "display-goal",
	template: `
		<div>
			{{titles | json}}
		</div>
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

	// goalItem = [];

	// titles = [];
	constructor (private goalBuilderService: GoalBuilderService) {}

	// ngOnInit() {
	// 	console.log("in oninit of display-goal", this.goalItem);

	// 	this.goalBuilderService.getAllGoals().subscribe(function(res) {
	// 		this.goalItem = res;
	// 		console.log(res);
	// 		// for (var i = 0; i < res.length; i++) {
	// 		// 	this.titles.push(res[i].name);
	// 		// }
	// 		// console.log(this.goalsCopy[0].name);
	// 	}.bind(this));
	// }
}
