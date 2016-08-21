import { RouterConfig } from "@angular/router";
import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./welcome.component";
import { CorporateDashboardComponent } from "./corporate-dashboard.component";
import { CorporateGoalBuilderComponent } from "./corporate-goal-builder.component";
import { IndividualDashboardComponent } from "./individual-dashboard.component";
import { IndividualGoalBuilderComponent } from "./individual-goal-builder.component";

export const routes: RouterConfig = [
    {
        path: "",
        component: WelcomeComponent
    },
    {
        path: "corporate-dashboard",
        component: CorporateDashboardComponent
    },
    {
        path: "individual-dashboard",
        component: IndividualDashboardComponent
    },
    {
        path: "corporate-goal-builder",
        component: CorporateGoalBuilderComponent
    },
    {
        path: "individual-goal-builder",
        component: IndividualGoalBuilderComponent
    }
];


