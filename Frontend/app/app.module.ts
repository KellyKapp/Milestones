import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { routes } from "./routes";
import { FormsModule } from "@angular/forms";
import { ApiService } from "./api.service";
import { HttpModule } from "@angular/http";
import { LoginService} from "./login.service";
import { GoalBuilderService } from "./goal-builder.service";

import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./welcome.component";
import { LoginComponent } from "./login.component";
import { DashboardComponent } from "./dashboard.component";
import { GoalBuilderComponent } from "./goal-builder.component";
import { DisplayGoalComponent } from "./display-goal.component";


@NgModule({
	imports:      [ BrowserModule, FormsModule, HttpModule ],
	declarations: [ 
		AppComponent, 
		WelcomeComponent,
		LoginComponent, 
		DashboardComponent,
		GoalBuilderComponent,
		DisplayGoalComponent
	],
	bootstrap:    [ AppComponent ],
	providers:    [ 
		provideRouter(routes), 
		ApiService, 
		LoginService, 
		GoalBuilderService]
})

export class AppModule { }
