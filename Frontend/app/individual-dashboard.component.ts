import { Component } from "@angular/core";

@Component({
    selector: "individual-dashboard",
    template: `
        <div class="dashboard">
			<button class="btn btn-default">
				<a routerLink="/individual-goal-builder">Build a New Goal></a>
			</button>
        </div>
    `
})

export class IndividualDashboardComponent {}
