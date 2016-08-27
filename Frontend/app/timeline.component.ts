import { Component, Input, Output, EventEmitter, ViewChild } from "@angular/core";

@Component({
	selector: "timeline",
	template: `
		<div class="timeline">
			<div class="date start">
				{{goal.startDate | date:"longDate"}}
			</div>
			<canvas #canvas width="100" height="400">
			</canvas>

			<div class="date end">
				{{goal.completionDate | date:"longDate"}}
			</div>
		</div>
	`,
	styles: [`
		canvas {
			display: block;
			margin: 0 auto;
		}
		.date {
			height: 30px;
			width: 150px;
			margin: 0 auto;
			text-align: center;
			font-size: 1.15em;
		}
		.add-milestone {
			height: 40px;
			width: 150px;
			margin: 15px 58px;
			font-family: Helvetica;
			font-size: 1em;
			background-color: #32C5D2;
			border-radius: 0;
			border: none;
			color: white;
		}
	`]
})

export class TimelineComponent {

	@Input() goal;

	@ViewChild('canvas') canvas;

	ngOnInit() {
	
		var ctx = this.canvas.nativeElement.getContext("2d");

		function verticalLine() {
			ctx.beginPath();
			ctx.moveTo(50, 0);
			ctx.lineTo(50, 400);
			ctx.closePath();

			ctx.strokeStyle = "#32C5D2";
			ctx.stroke();
		}

		verticalLine();
	}

}

