import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES, Router } from "@angular/router";

@Component({
    selector: "milestones-app",
    directives: [ ...ROUTER_DIRECTIVES ],
    template: `
    <div>
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">
                <img alt="Brand" src="...">
              </a>
            </div>
            <ul class="nav navbar-nav">
                <li>
                    <a routerLink="">Home</a>
                </li>
                <li>
                    <a routerLink="/about">About</a>
                </li>
                <li>
                <a routerLink="/login">Login</a>
                </li>
            </ul>
          </div>
        </nav>
        <router-outlet></router-outlet>
    </div>
    `
})

export class AppComponent {
    constructor ( private router: Router) { }

    getStarted(evt) {
        this.router.navigate(['dashboard']);
    }
}

 // <div>
 //         <button class="btn btn-default" (click)="getStarted($event)">Get Started</button>
 //    </div>
 
