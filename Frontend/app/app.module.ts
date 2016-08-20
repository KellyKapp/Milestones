import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { routes } from "./routes";
import { FormsModule } from "@angular/forms";

import { AppComponent }  from "./app.component";
import { WelcomeComponent } from "./welcome.component";
import { DashboardComponent } from "./dashboard.component";
import { GoalBuilderComponent} from "./goal-builder.component";

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
  		AppComponent, 
  		WelcomeComponent, 
  		DashboardComponent, 
  		GoalBuilderComponent,
  	],
  bootstrap:    [ AppComponent ],
  providers:    [ provideRouter(routes)]
})

export class AppModule { }
