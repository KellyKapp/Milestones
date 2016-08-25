import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { GoalBuilderService } from "./goal-builder.service";

@Component({
    selector: "corporate-dashboard",
    templateUrl: 'app/html_files/dashboard-component.html',
    styleUrls: ['app/css_files/dashboard.css', 'app/css_files/welcome.css']
})

export class CorporateDashboardComponent {

	corporateGoalStartObject = {
		name: "",
		startDate: "",
		completionDate: "",
		typeIndividual: false,
		typeCorporate: true
	};

	constructor (private goalBuilderService: GoalBuilderService, private router: Router) {}

	buildNewGoal() {
		this.goalBuilderService
		.buildNewGoal(this.corporateGoalStartObject)
		.subscribe(function(res) {
			console.log(res);
			this.router.navigate(['/corporate-goal-builder', res._id]);
		}.bind(this));
	}

}
