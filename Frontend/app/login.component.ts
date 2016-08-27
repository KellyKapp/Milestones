// import { Component } from "@angular/core";
// import { Router } from "@angular/router";
// import { LoginService } from "./login.service";

// @Component ({
// 	selector: "login",
// 	template: `
// 		 <form class="form-inline" (submit)="authenticate()">
//             <div class="form-group">
//                 <input 
//                     class="form-control" 
//                     type="text" 
//                     name="username"
//                     placeholder="Username" 
//                     [(ngModel)]="loginInfo.username" 
//                 />
//             </div>
//             <div class="form-group">
//                 <input 
//                     class="form-control" 
//                     type="password" 
//                     name="password"
//                     placeholder="Password" 
//                     [(ngModel)]="loginInfo.password" 
//                 />
//             </div>
//             <div class="form-group">
//                 <button class="button">{{buttonText}}</button>
//                 <button class="button" (click)="switchMode($event)">{{switchText}}</button>
//             </div>
//         </form>
// 	`,
// 	styles: ['']
// })

// export class LoginComponent {
// 	mode: string = "login";
//     buttonText: string = "Login";
//     switchText: string = "Need to create an account?";

//     loginInfo = {
//         username: '',
//         password: ''
//     };

//     constructor (private loginService: LoginService, private router: Router) {}

//     switchMode(evt) {
//         evt.preventDefault();
//         if (this.mode === "login") {
//             this.mode = "signup";
//             this.buttonText = "Sign Up";
//             this.switchText = "Already have an account?";
//         } else {
//             this.mode = "login";
//             this.buttonText = "Login";
//             this.switchText = "Need to create and account?";
//         }
//     }

//     authenticate() {
//         if (!this.loginInfo.username || !this.loginInfo.password) {
//             return;
//         }
//         this.loginService
//             .authenticate(this.mode, this.loginInfo)
//             .subscribe(function(res) {
//                 if (res.status === "success") {
//                     this.router.navigate(['']);
//                 }
//             }.bind(this));
//     };
// }
