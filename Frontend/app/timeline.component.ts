import { Component, Input } from "@angular/core";

declare let $;

@Component({
	selector: "timeline",
	template: `
		<div class="timeline">
			<div class="date start" id="canvas">
				{{goal.startDate | date:"longDate"}}
			</div>
			<div class="svg">
				<svg height="400" width="150">
  					<line x1="75" y1="0" x2="75" y2="400" style="stroke:#32C5D2;stroke-width:2" />
				</svg>
			</div>
			<div class="date end">
				{{goal.completionDate | date:"longDate"}}
			</div>
		</div>
	`,
	styles: [`
		svg {
			position: absolute;
			z-index: -1;
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
		.svg {
			height: 400px;
			width: 150px;
		}
		:host ::content .milestone-dot {
			position: absolute;
			z-index: 1;
			height: 20px;
			width: 20px;
			border-radius: 50%;
			background-color: lightgrey;
			margin-left: 65px;
		}
	`]
})

export class TimelineComponent {

	@Input() goal;

	ngOnInit() {
		$( '.svg' ).on( 'click', 'div.milestone-dot', function(event) {
			// need to find a way to open a specific milestone by id
			$(".milestone").modal();
		});
	};

}


