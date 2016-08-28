import { Component, ChangeDetectorRef } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "./login.service";
import { ApiService} from "./api.service";

@Component ({
	selector: "login",
	template: `
		 <form class="form-inline">
            <div class="form-group">
                <input 
                    class="form-control" 
                    type="text" 
                    name="username"
                    placeholder="Username" 
                    [(ngModel)]="loginInfo.username" 
                />
            </div>
            <div class="form-group">
                <input 
                    class="form-control" 
                    type="password" 
                    name="password"
                    placeholder="Password" 
                    [(ngModel)]="loginInfo.password" 
                />
            </div>
            <div class="form-group">
                <button class="button" (click)="buttonHandler()">{{buttonText}}</button>
                <button class="button" (click)="switchMode($event)">{{switchText}}</button>
            </div>
        </form>
	`,
	styles: ['']
})

export class LoginComponent {
	mode: string = "login";
    buttonText: string = "Login";
    switchText: string = "Need to create an account?";

    loginInfo = {
        username: '',
        password: ''
    };

    constructor (
    	private loginService: LoginService, 
    	private router: Router,
    	private apiService: ApiService,
    	public ref: ChangeDetectorRef) {

    }

    switchMode(evt) {
        evt.preventDefault();
        if (this.mode === "login") {
            this.mode = "signup";
            this.buttonText = "Sign Up";
            this.switchText = "Already have an account?";
        } else {
            this.mode = "login";
            this.buttonText = "Login";
            this.switchText = "Need to create and account?";
        }
        this.ref.detectChanges();
    }

    buttonHandler() {
    	if (this.mode === "login") {
    		this.authenticate();
    	}
    	if (this.mode === "signup") {
    		this.signup();
    	}
    	console.log(this.mode);
    }

    authenticate() {
    	console.log(this.loginInfo);
        if (!this.loginInfo.username || !this.loginInfo.password) {
            return;
        }
        this.loginService
            .authenticate(this.mode, this.loginInfo)
            .subscribe(function(res) {
            	console.log(res);
                if (res.status === "success") {
                    this.router.navigate(['/dashboard', res.userInfo._id]);
                }
            }.bind(this));
    }

    signup() {
    	console.log(this.loginInfo);
    	if (!this.loginInfo.username || !this.loginInfo.password) {
    		return;
    	}
    	this.apiService.post('/signup', this.loginInfo).then(function(data) {
    		this.router.navigate(['/dashboard', data.userInfo._id]);
    	}.bind(this));
    }
}


