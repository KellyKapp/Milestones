import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { GoalBuilderService } from "./goal-builder.service";



@Component({
    selector: "individual-dashboard",
    template: `
        <div class="row dashboard">
        	<div class="col-md-3">
        	</div>
        	<div class="col-md-3">
        	</div>
        	<div class="col-md-3">
        	</div>
        	<div class="col-md-3">
        	</div>
        </div>

    	<div class="row goal-starter">
        	<div class="col-md-3">
	        	<input
	                class="form-control"
	                type="text"
	                placeholder="Goal Name"
	                [(ngModel)]="individualGoalStartObject.name"
	            />
	        </div>
	        <div class="col-md-3 start">
	            <input
	                class="form-control"
	                type="date"
	                placeholder="start date"
	                [(ngModel)]="individualGoalStartObject.startDate"
	            />
	        </div>
	        <div class="col-md-3 complete">
	            <input
	                class="form-control"
	                type="date"
	                placeholder="end date"
	                [(ngModel)]="individualGoalStartObject.completionDate"
	            />
	        </div>
	        <div class="col-md-3">
				<button class="btn btn-default" (click)="buildNewGoal()">
					Build a New Goal
				</button>
			</div>
		</div>
    `,
    styles: [`
		.dashboard {
			height: 450px;
			width: 1300px;
			margin: 10px 30px;
			border: 1px dotted lightgrey;
		}
		.goal-starter {
			width: 1300px;
			height: 50px;
			margin: 0 auto;
			padding: 8px 250px;
			background-color: lightgrey;
		}
		.start {
			width: 200px;
		}
		.complete {
			width: 200px;
		}
    `]
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
