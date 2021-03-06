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
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var routes_1 = require("./routes");
var forms_1 = require("@angular/forms");
var api_service_1 = require("./api.service");
var http_1 = require("@angular/http");
var login_service_1 = require("./login.service");
var goal_builder_service_1 = require("./goal-builder.service");
var app_component_1 = require("./app.component");
var welcome_component_1 = require("./welcome.component");
var login_component_1 = require("./login.component");
var dashboard_component_1 = require("./dashboard.component");
var goal_builder_component_1 = require("./goal-builder.component");
var display_goal_component_1 = require("./display-goal.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule],
            declarations: [
                app_component_1.AppComponent,
                welcome_component_1.WelcomeComponent,
                login_component_1.LoginComponent,
                dashboard_component_1.DashboardComponent,
                goal_builder_component_1.GoalBuilderComponent,
                display_goal_component_1.DisplayGoalComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                router_1.provideRouter(routes_1.routes),
                api_service_1.ApiService,
                login_service_1.LoginService,
                goal_builder_service_1.GoalBuilderService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map