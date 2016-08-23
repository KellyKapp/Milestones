import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
	selector: "timeline",
	template: `
		<div class="timeline">
			<div class="date start">

	        </div>

			<div>
				<svg class="line" height="400">
	  			<line x10="1" y1="0" x20="1" y2="400" style="stroke:rgb(128,140,140);stroke-width:5" />
				</svg>
			</div>

			<div class="date end">

	        </div>

	        <button class="btn btn-default"
    			data-toggle="modal" data-target=".modal"
			>Add Milestone</button>

		</div>
	`,
	styles: [`
		.line {
			z-index: -1;
		}
		.date {
			height: 30px;
			width: 80px;
			border: 1px solid black;
		}
	`]
})

export class TimelineComponent {

	timelineObject = {
		milestones: []
	};

}

