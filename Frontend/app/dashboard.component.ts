import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { GoalBuilderService } from "./goal-builder.service";
import { FORM_DIRECTIVES } from "@angular/common";


@Component({
    selector: "dashboard",
    templateUrl: 'app/html_files/dashboard-component.html',
    styleUrls: ['app/css_files/dashboard.css', 'app/css_files/welcome.css']
})


export class DashboardComponent {

	GoalStartObject = {
		name: "",
		startDate: "",
		completionDate: "",
	};

	constructor (
		private goalBuilderService: GoalBuilderService, 
		private router: Router) {}

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
}
