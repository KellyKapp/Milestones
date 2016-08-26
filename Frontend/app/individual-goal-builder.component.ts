import { Component } from "@angular/core";
import { GoalSummaryComponent } from "./goal-summary.component";
import { TimelineComponent } from "./timeline.component";
import { IndividualMilestoneComponent } from "./individual-milestone.component";
import { ActivatedRoute } from "@angular/router";
import { GoalBuilderService } from "./goal-builder.service";

@Component({
    selector: "individual-goal-builder",
    templateUrl: 'app/html_files/goal-builder-component.html',
    styleUrls: ['app/css_files/goal-builder.css', 'app/css_files/welcome.css'],
    directives: [
    	GoalSummaryComponent,
    	TimelineComponent,
    	IndividualMilestoneComponent
    ]
})

export class IndividualGoalBuilderComponent {

    private goal;


    constructor(private route: ActivatedRoute, private goalBuilderService: GoalBuilderService) {

    }
    ngOnInit() {
      this.route.params.subscribe(function(params) {
          this.goalBuilderService.findGoalById(params["_id"]).subscribe(function(goal) {
              this.goal = goal;
          }.bind(this));
      }.bind(this));
    } 

    saveGoal() {
        // save to goal model/Mongo
    }
}

