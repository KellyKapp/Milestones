import { Component } from "@angular/core";
import { GoalSummaryComponent } from "./goal-summary.component";
import { TimelineComponent } from "./timeline.component";
import { IndividualMilestoneComponent } from "./individual-milestone.component";

@Component({
    selector: "individual-goal-builder",
    template: `
        <div class="row">
			<div class="col-md-4 col-sm-12 divtest">
				<goal-summary></goal-summary>
			</div>
			<div class="col-md-4 col-sm-12 divtest">
				<timeline></timeline>
			</div>
        </div>

        <div id="individual-milestone" class="modal fade" role="dialog">
          <div class="modal-dialog modal-lg">

            <!-- Modal content-->
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Milestone</h4>
              </div>
              <div class="modal-body">
                <individual-milestone></individual-milestone>
              </div>
            </div>

          </div>
        </div>
    `,
    styles: [`
    	.divtest {
			border: 1px solid black;
			height: 500px;
			width: 400px;
    	}
    `],
    directives: [
    	GoalSummaryComponent,
    	TimelineComponent,
    	IndividualMilestoneComponent
    ]
})

export class IndividualGoalBuilderComponent {

    
}
