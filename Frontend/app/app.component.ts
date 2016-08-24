import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES, Router } from "@angular/router";

@Component({
    selector: "milestones-app",
    directives: [ ...ROUTER_DIRECTIVES ],
    template: `
        <div>
            <router-outlet></router-outlet>
        </div>
    `,
    styles: [`
		router-outlet {
			width: 100%
		}
    `]
})

export class AppComponent {
    constructor ( private router: Router) { }
}




