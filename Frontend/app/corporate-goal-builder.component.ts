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
			<div class="col-md-4 col-sm-12 divtest">
				<corporate-milestone></corporate-milestone>
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
    	CorporateMilestoneComponent
    ]
})

export class CorporateGoalBuilderComponent {

    
}
