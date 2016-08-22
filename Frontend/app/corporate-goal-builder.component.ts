import { Component } from "@angular/core";
import { GoalSummaryComponent } from "./goal-summary.component";
import { TimelineComponent } from "./timeline.component";
import { CorporateMilestoneComponent } from "./corporate-milestone.component";

@Component({
    selector: "corproate-goal-builder",
    template: `
        <div class="row">
			<div class="col-md-4 col-sm-12 divtest">
				<goal-summary></goal-summary>
			</div>
			<div class="col-md-4 col-sm-12 divtest">
				<timeline></timeline>
			</div>
        </div>

         <div id="corporate-milestone" class="modal fade" role="dialog">
          <div class="modal-dialog modal-lg">

            <!-- Modal content-->
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Milestone</h4>
              </div>
              <div class="modal-body">
                <corporate-milestone></corporate-milestone>
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
    	CorporateMilestoneComponent
    ]
})

export class CorporateGoalBuilderComponent {

    
}
