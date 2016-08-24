import { Component, Input, Output, EventEmitter, ViewChild } from "@angular/core";

@Component({
	selector: "timeline",
	template: `
		<div class="timeline">
			<div class="date start">
				{{goal.startDate}}
	        </div>
	        <canvas #canvas width="300" height="400" style="border:solid 1px #000000;">
			</canvas>

			<div class="date end">
				{{goal.completionDate}}
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

	@Input() goal;

	DrawTimeline() {
	
	}

		@ViewChild('canvas') canvas;

	ngOnInit() {
	
    	var ctx = this.canvas.nativeElement.getContext("2d");

    	function Vertical_line() {
    		ctx.beginPath();
		    ctx.moveTo(150, 10);
		    ctx.lineTo(150, 390);
		    ctx.closePath();
		    ctx.stroke();
		}

		Vertical_line();
	}

	timelineObject = {
		milestones: []
	};

}

