"use strict";
var welcome_component_1 = require("./welcome.component");
var dashboard_component_1 = require("./dashboard.component");
var goal_builder_component_1 = require("./goal-builder.component");
exports.routes = [
    {
        path: "",
        component: welcome_component_1.WelcomeComponent
    },
    {
        path: "dashboard",
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: "goal-builder",
        component: goal_builder_component_1.GoalBuilderComponent
    }
];
//# sourceMappingURL=routes.js.map