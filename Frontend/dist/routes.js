"use strict";
var welcome_component_1 = require("./welcome.component");
var corporate_dashboard_component_1 = require("./corporate-dashboard.component");
var corporate_goal_builder_component_1 = require("./corporate-goal-builder.component");
var individual_dashboard_component_1 = require("./individual-dashboard.component");
var individual_goal_builder_component_1 = require("./individual-goal-builder.component");
exports.routes = [
    {
        path: "",
        component: welcome_component_1.WelcomeComponent
    },
    {
        path: "corporate-dashboard",
        component: corporate_dashboard_component_1.CorporateDashboardComponent
    },
    {
        path: "individual-dashboard",
        component: individual_dashboard_component_1.IndividualDashboardComponent
    },
    {
        path: "corporate-goal-builder",
        component: corporate_goal_builder_component_1.CorporateGoalBuilderComponent
    },
    {
        path: "individual-goal-builder",
        component: individual_goal_builder_component_1.IndividualGoalBuilderComponent
    }
];
//# sourceMappingURL=routes.js.map