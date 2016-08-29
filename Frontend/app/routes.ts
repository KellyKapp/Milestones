import { RouterConfig } from "@angular/router";
import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./welcome.component";
import { LoginComponent } from "./login.component";
import { DashboardComponent } from "./dashboard.component";
import { GoalBuilderComponent } from "./goal-builder.component";


export const routes: RouterConfig = [
    {
        path: "",
        component: WelcomeComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "dashboard/:_id",
        component: DashboardComponent
    },
    {
        path: "dashboard",
        component: DashboardComponent
    }
    {
        path: "goal-builder/:_id",
        component: GoalBuilderComponent
    }
];


