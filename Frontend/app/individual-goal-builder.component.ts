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
			<div class="col-md-4 col-sm-12 divtest">
				<individual-milestone></individual-milestone>
			</div>
        </div>
    `,
    styles: [`
    	.divtest {
			border: 1px solid black;
			height: 700px;
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
