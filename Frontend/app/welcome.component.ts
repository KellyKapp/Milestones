import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "welcome",
    template: `
		<button class="btn btn-default">
			<a routerLink="/individual-dashboard">Individual</a>
		</button>

		<button class="btn btn-default">
			<a routerLink="/corporate-dashboard">Corporate</a>
		</button>
    `
})

export class WelcomeComponent {}

