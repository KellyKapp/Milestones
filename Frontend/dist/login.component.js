"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var login_service_1 = require("./login.service");
var api_service_1 = require("./api.service");
var LoginComponent = (function () {
    function LoginComponent(loginService, router, apiService, ref) {
        this.loginService = loginService;
        this.router = router;
        this.apiService = apiService;
        this.ref = ref;
        this.mode = "login";
        this.titleText = "WELCOME BACK!";
        this.buttonText = "LOG IN";
        this.userText = "Don't have an account yet?";
        this.switchText = "SIGN UP";
        this.loginInfo = {
            username: '',
            password: ''
        };
    }
    LoginComponent.prototype.switchMode = function (evt) {
        evt.preventDefault();
        if (this.mode === "login") {
            this.mode = "signup";
            this.buttonText = "SIGN UP";
            this.switchText = "LOG IN";
            this.titleText = "CREATE A NEW ACCOUNT";
            this.userText = "Already have an account?";
        }
        else {
            this.mode = "login";
            this.buttonText = "LOG IN";
            this.switchText = "SIGN UP";
            this.titleText = "WELCOME BACK!";
            this.userText = "Don't have an account yet?";
        }
        this.ref.detectChanges();
    };
    LoginComponent.prototype.buttonHandler = function () {
        if (this.mode === "login") {
            this.authenticate();
        }
        if (this.mode === "signup") {
            this.signup();
        }
        console.log(this.mode);
    };
    LoginComponent.prototype.authenticate = function () {
        console.log(this.loginInfo);
        if (!this.loginInfo.username || !this.loginInfo.password) {
            return;
        }
        this.loginService
            .authenticate(this.mode, this.loginInfo)
            .subscribe(function (res) {
            console.log(res);
            if (res.status === "success") {
                this.router.navigate(['/dashboard', res.userInfo._id]);
            }
        }.bind(this));
    };
    LoginComponent.prototype.signup = function () {
        //     	console.log(this.loginInfo);
        //     	if (!this.loginInfo.username || !this.loginInfo.password) {
        //     		return;
        //     	}
        //     	this.apiService.post('/signup', this.loginInfo).then(function(data) {
        //     		this.router.navigate(['/dashboard', data.userInfo._id]);
        //     	}.bind(this));
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "login",
            templateUrl: 'app/html_files/login-component.html',
            styleUrls: ['app/css_files/login.css', 'app/css_files/welcome.css']
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router, api_service_1.ApiService, core_1.ChangeDetectorRef])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map