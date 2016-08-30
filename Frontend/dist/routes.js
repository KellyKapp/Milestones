"use strict";
var welcome_component_1 = require("./welcome.component");
var login_component_1 = require("./login.component");
var dashboard_component_1 = require("./dashboard.component");
var goal_builder_component_1 = require("./goal-builder.component");
exports.routes = [
    {
        path: "",
        component: welcome_component_1.WelcomeComponent
    },
    {
        path: "login",
        component: login_component_1.LoginComponent
    },
    // {
    //     path: "dashboard/:_id",
    //     component: DashboardComponent
    // },
    {
        path: "dashboard",
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: "goal-builder/:_id",
        component: goal_builder_component_1.GoalBuilderComponent
    }
];
//# sourceMappingURL=routes.js.map