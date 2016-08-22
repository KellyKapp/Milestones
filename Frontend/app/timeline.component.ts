import { Component } from "@angular/core";

@Component({
	selector: "timeline",
	template: `
		<div class="timeline">
			<div class="date">
				<input
	                class="start-date"
	                type="text"
	                placeholder="start date"
	                [(ngModel)]="timelineObject.startDate"
	            />
	        </div>

			<div>
				<svg class="line" height="400">
	  			<line x10="1" y1="0" x20="1" y2="400" style="stroke:rgb(128,140,140);stroke-width:5" />
				</svg>
			</div>

			<div class="date">
				<input
	                class="completion-date"
	                type="text"
	                placeholder="completion date"
	                [(ngModel)]="timelineObject.completionDate"
	            />
	        </div>
	        <button class="btn btn-default"
    			(click)="saveTimeline()"
			>Save</button>

	        <button class="btn btn-default"
    			data-toggle="modal" data-target=".modal"
			>Add Milestone</button>

		</div>
	`,
	styles: [`
		.line {
			z-index: -1;
		}
	`]
})

export class TimelineComponent {

	timelineObject = {
		startDate: "",
		completionDate: "",
		milestones: []
	};

	saveTimeline() {
		console.log("yay!");
		// save timeline start and end dates to db
		// unlock add milestone button
	}

}

