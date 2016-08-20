import { Component } from "@angular/core";

@Component({
    selector: "dashboard",
    template: `
        <div class="dashboard">
			<button class="btn btn-default" (click)="newGoal()">
				<a routerLink="/goal-builder">Build a New Goal></a>
			</button>
        </div>
    `
})

export class DashboardComponent {}
