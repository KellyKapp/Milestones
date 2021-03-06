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
var api_service_1 = require("./api.service");
var LoginService = (function () {
    function LoginService(router, apiService) {
        this.router = router;
        this.apiService = apiService;
        this.authenticated = false;
    }
    LoginService.prototype.authenticate = function (path, creds) {
        return this.apiService.post('/' + path, JSON.stringify(creds))
            .do(function (response) {
            if (response.status === "success") {
                this.authenticated = true;
                this.user = response.userInfo;
            }
        }.bind(this));
    };
    LoginService.prototype.deauthenticate = function () {
        this.authenticated = false;
        this.user = null;
        this.router.navigate(['login']);
    };
    LoginService.prototype.canActivate = function () {
        if (!this.authenticated) {
            this.router.navigate(['login']);
        }
        return this.authenticated;
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, api_service_1.ApiService])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map