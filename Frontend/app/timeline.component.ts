import { Component, Input, Output, EventEmitter, ViewChild } from "@angular/core";

@Component({
	selector: "timeline",
	templateUrl: 'app/html_files/timeline-component.html',
	styles: [`
		canvas {
			display: block;
			margin: 0 auto;
		}
		.date {
			height: 30px;
			width: 80px;
			border: 1px dotted grey;
			margin: 0 auto;
		}
		.add-milestone {
			height: 40px;
		    width: 150px;
		    margin: 15px 55px;
		    font-family: Helvetica;
		    font-size: 1.25em;
		    background-color: #32C5D2;
		    border-radius: 0;
		    border: none;
		    color: white;
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
		    ctx.moveTo(50, 0);
		    ctx.lineTo(50, 400);
		    ctx.closePath();

		    ctx.strokeStyle = "#32C5D2";
		    ctx.stroke();
		}

		Vertical_line();
	}

	timelineObject = {
		milestones: []
	};

}

