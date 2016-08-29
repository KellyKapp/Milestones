import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { GoalBuilderService } from "./goal-builder.service";
import { FORM_DIRECTIVES } from "@angular/common";
import { DisplayGoalComponent } from "./display-goal.component";


@Component({
    selector: "dashboard",
    directives: [DisplayGoalComponent],
    templateUrl: 'app/html_files/dashboard-component.html',
    styleUrls: ['app/css_files/dashboard.css', 'app/css_files/welcome.css']
})


export class DashboardComponent {

	GoalStartObject = {
		name: "",
		startDate: "",
		completionDate: "",
	};

	// goalItems = ["Goal1", "Goal2", "Goal3"];
	goalItems = [];

	constructor (
		private goalBuilderService: GoalBuilderService, 
		private router: Router) {}

	getGoals() {
		// ultimately need to pull goal data from wherever it is
		// this.goalItems = ["Goal1", "Goal2", "Goal3"];
	}



	ngOnInit() {
		console.log("in onInit of dashboard.component, with:", this.goalItems);

		this.goalBuilderService
		.displayAllGoals()
		.subscribe(function(res) {
			console.log(res);
		}.bind(this));

		// console.log("in oninit of display-goal", this.goalItem);

		this.goalBuilderService.getAllGoals().subscribe(function(res) {
			this.goalItem = res;
			console.log(res);
			// for (var i = 0; i < res.length; i++) {
			// 	this.titles.push(res[i].name);
			// }
			// console.log(this.goalsCopy[0].name);
		}.bind(this));

		// need to populate goalItems with data from Mongo
		// this.goalBuilderService.getAllGoals().subscribe(function(res) {
		// this.goalItems = 
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
}
