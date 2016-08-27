import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { GoalBuilderService } from "./goal-builder.service";
import { FORM_DIRECTIVES } from "@angular/common";



@Component({
    selector: "individual-dashboard",
    templateUrl: 'app/html_files/dashboard-component.html',
    styleUrls: ['app/css_files/dashboard.css', 'app/css_files/welcome.css']
})

export class IndividualDashboardComponent {


	individualGoalStartObject = {
		name: "",
		startDate: "",
		completionDate: "",
		typeIndividual: true,
		typeCorporate: false
	};

	constructor (private goalBuilderService: GoalBuilderService, private router: Router) {}

	buildNewGoal() {
		if (this.individualGoalStartObject.name === "") {
			return;
		}
		this.goalBuilderService
		.buildNewGoal(this.individualGoalStartObject)
		.subscribe(function(res) {
			console.log(res);
			this.router.navigate(['/individual-goal-builder', res._id]);
		}.bind(this));
	}
}



// <p>{{goal.name}}</p>
// <input [(ngModel)]="goal.name">
