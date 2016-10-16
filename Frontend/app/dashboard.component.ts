import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { GoalBuilderService } from "./goal-builder.service";
import { FORM_DIRECTIVES } from "@angular/common";
import { DisplayGoalComponent } from "./display-goal.component";


@Component({
    selector: "dashboard",
    directives: [ DisplayGoalComponent ],
    templateUrl: 'app/html_files/dashboard-component.html',
    styleUrls: ['app/css_files/dashboard.css', 'app/css_files/welcome.css']
})


export class DashboardComponent {

	GoalStartObject = {
		name: "",
		startDate: "",
		completionDate: "",
	};

	goalItems = [];

	constructor (
		private goalBuilderService: GoalBuilderService, 
		private router: Router) {}

	ngOnInit() {
		this.goalBuilderService
		.displayAllGoals()
		.subscribe(function(res) {
		}.bind(this));

		this.goalBuilderService.getAllGoals().subscribe(function(res) {
			this.goalItem = res;
			console.log(res);
		}.bind(this));
	}

	buildNewGoal() {
		if (this.GoalStartObject.name === "") {
			return;
		}
		this.goalBuilderService
		.buildNewGoal(this.GoalStartObject)
		.subscribe(function(res) {
			console.log(res);
			this.router.navigate(['/goal-builder', res._id]);
		}.bind(this));
	}

	deleteGoal(id) {
		this.goalBuilderService.deleteGoal(id).subscribe();
	}
}
