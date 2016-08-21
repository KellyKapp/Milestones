import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { routes } from "./routes";
import { FormsModule } from "@angular/forms";

import { AppComponent }  from "./app.component";
import { WelcomeComponent } from "./welcome.component";
import { CorporateDashboardComponent } from "./corporate-dashboard.component";
import { CorporateGoalBuilderComponent} from "./corporate-goal-builder.component";
import { IndividualDashboardComponent } from "./individual-dashboard.component";
import { IndividualGoalBuilderComponent } from "./individual-goal-builder.component";

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
  		AppComponent, 
  		WelcomeComponent, 
  		CorporateDashboardComponent, 
  		CorporateGoalBuilderComponent,
  		IndividualDashboardComponent,
  		IndividualGoalBuilderComponent
  	],
  bootstrap:    [ AppComponent ],
  providers:    [ provideRouter(routes)]
})

export class AppModule { }
