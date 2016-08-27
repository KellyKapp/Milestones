import { Component, Input, Output, EventEmitter } from "@angular/core";
import { GoalSummaryComponent } from "./goal-summary.component";
import { TimelineComponent } from "./timeline.component";
import { IndividualMilestoneComponent } from "./individual-milestone.component";
import { Router, ActivatedRoute } from "@angular/router";
import { GoalBuilderService } from "./goal-builder.service";

declare let $;

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

    milestoneObject = {
      description: "",
      deadline: "",
    };

    activeMilestone = null;

    constructor(
        private route: ActivatedRoute, 
        private goalBuilderService: GoalBuilderService,
        private router: Router) {

    }
    ngOnInit() {
      this.route.params.subscribe(function(params) {
          this.goalBuilderService.findGoalById(params["_id"]).subscribe(function(goal) {
              this.goal = goal;
          }.bind(this));
      }.bind(this));
    } 

    buildNewMilestone() {
      this.goalBuilderService
      .buildNewMilestone(this.milestoneObject, this.goal._id)
      .subscribe(function(res) {
          console.log(res.milestones);
          this.activeMilestone = res.milestones[res.milestones.length - 1];
          $(".modal").modal();
      }.bind(this));
    }

    saveGoal() {
        // save to goal model/Mongo
    }
}

