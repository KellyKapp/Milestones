import { Component, ChangeDetectorRef } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "./login.service";
import { ApiService} from "./api.service";

@Component ({
	selector: "login",
	templateUrl: 'app/html_files/login-component.html',
	styleUrls: ['app/css_files/login.css', 'app/css_files/welcome.css']
})

export class LoginComponent {
	mode: string = "login";
	titleText: string = "WELCOME BACK!";
    buttonText: string = "LOG IN";
    userText: string = "Don't have an account yet?";
    switchText: string = "SIGN UP";

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
            this.buttonText = "SIGN UP";
            this.switchText = "LOG IN";
            this.titleText = "CREATE A NEW ACCOUNT";
            this.userText = "Already have an account?";
        } else {
            this.mode = "login";
            this.buttonText = "LOG IN";
            this.switchText = "SIGN UP";
            this.titleText = "WELCOME BACK!";
            this.userText = "Don't have an account yet?";
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
//     	console.log(this.loginInfo);
//     	if (!this.loginInfo.username || !this.loginInfo.password) {
//     		return;
//     	}
//     	this.apiService.post('/signup', this.loginInfo).then(function(data) {
//     		this.router.navigate(['/dashboard', data.userInfo._id]);
//     	}.bind(this));
    }
}


