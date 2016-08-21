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
var app_component_1 = require("./app.component");
var welcome_component_1 = require("./welcome.component");
var corporate_dashboard_component_1 = require("./corporate-dashboard.component");
var corporate_goal_builder_component_1 = require("./corporate-goal-builder.component");
var individual_dashboard_component_1 = require("./individual-dashboard.component");
var individual_goal_builder_component_1 = require("./individual-goal-builder.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            declarations: [
                app_component_1.AppComponent,
                welcome_component_1.WelcomeComponent,
                corporate_dashboard_component_1.CorporateDashboardComponent,
                corporate_goal_builder_component_1.CorporateGoalBuilderComponent,
                individual_dashboard_component_1.IndividualDashboardComponent,
                individual_goal_builder_component_1.IndividualGoalBuilderComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [router_1.provideRouter(routes_1.routes)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map