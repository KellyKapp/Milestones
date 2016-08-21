import { Component } from "@angular/core";

@Component({
    selector: "corporate-dashboard",
    template: `
        <div class="dashboard">
			<button class="btn btn-default">
				<a routerLink="/corporate-goal-builder">Build a New Goal></a>
			</button>
        </div>
    `
})

export class CorporateDashboardComponent {}
