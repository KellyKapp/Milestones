import { RouterConfig } from "@angular/router";
import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./welcome.component";
import { DashboardComponent } from "./dashboard.component";
import { GoalBuilderComponent } from "./goal-builder.component";

export const routes: RouterConfig = [
    {
        path: "",
        component: WelcomeComponent
    },
    {
        path: "dashboard",
        component: DashboardComponent
    },
    {
        path: "goal-builder",
        component: GoalBuilderComponent
    }
];


