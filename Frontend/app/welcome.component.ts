import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "welcome",
    template: `
    	<button class="btn btn-default" (click)="individualPage()">
            <a routerLink="/dashboard">Individual</a>
        </button>
        <button class="btn btn-default" (click)="corporatePage()">
			<a routerLink="/dashboard">Corporate</a>
        </button>
    `
})

export class WelcomeComponent {}

