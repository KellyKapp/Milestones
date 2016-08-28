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
        this.buttonText = "Login";
        this.switchText = "Need to create an account?";
        this.loginInfo = {
            username: '',
            password: ''
        };
    }
    LoginComponent.prototype.switchMode = function (evt) {
        evt.preventDefault();
        if (this.mode === "login") {
            this.mode = "signup";
            this.buttonText = "Sign Up";
            this.switchText = "Already have an account?";
        }
        else {
            this.mode = "login";
            this.buttonText = "Login";
            this.switchText = "Need to create and account?";
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
        console.log(this.loginInfo);
        if (!this.loginInfo.username || !this.loginInfo.password) {
            return;
        }
        this.apiService.post('/signup', this.loginInfo).then(function (data) {
            this.router.navigate(['/dashboard', data.userInfo._id]);
        }.bind(this));
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "login",
            template: "\n\t\t <form class=\"form-inline\">\n            <div class=\"form-group\">\n                <input \n                    class=\"form-control\" \n                    type=\"text\" \n                    name=\"username\"\n                    placeholder=\"Username\" \n                    [(ngModel)]=\"loginInfo.username\" \n                />\n            </div>\n            <div class=\"form-group\">\n                <input \n                    class=\"form-control\" \n                    type=\"password\" \n                    name=\"password\"\n                    placeholder=\"Password\" \n                    [(ngModel)]=\"loginInfo.password\" \n                />\n            </div>\n            <div class=\"form-group\">\n                <button class=\"button\" (click)=\"buttonHandler()\">{{buttonText}}</button>\n                <button class=\"button\" (click)=\"switchMode($event)\">{{switchText}}</button>\n            </div>\n        </form>\n\t",
            styles: ['']
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router, api_service_1.ApiService, core_1.ChangeDetectorRef])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map