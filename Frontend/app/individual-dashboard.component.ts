import { Component } from "@angular/core";
import { GoalBuilderService } from "./goal-builder.service";

@Component({
    selector: "individual-dashboard",
    template: `
        <div class="dashboard">
        	<div class="row">
	        	<div class="col-md-3">
		        	<input
		                class="form-control"
		                type="text"
		                placeholder="Goal Name"
		                [(ngModel)]="individualGoalStartObject.name"
		            />
		        </div>
		        <div class="col-md-3">
		            <input
		                class="form-control"
		                type="text"
		                placeholder="start date"
		                [(ngModel)]="individualGoalStartObject.startDate"
		            />
		        </div>
		        <div class="col-md-3">
		            <input
		                class="form-control"
		                type="text"
		                placeholder="end date"
		                [(ngModel)]="individualGoalStartObject.completionDate"
		            />
		        </div>
		        <div class="col-md-3">
					<button class="btn btn-default" (click)="buildNewGoal">
						<a routerLink="/individual-goal-builder">Build a New Goal</a>
					</button>
				</div>
			</div>
        </div>
    `
})

export class IndividualDashboardComponent {

	individualGoalStartObject = {
		name: "",
		startDate: "",
		completionDate: ""
	};

	buildNewGoal()
}
