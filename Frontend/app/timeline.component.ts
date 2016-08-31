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

	// ngOnInit() {
	// 	let start = this.goal.startDate;
	// 	let end = this.goal.completionDate;

	// 	for (let i = 0; i < this.goal.milestones.length; i++) {
	// 		$('.svg').append
	// 		('<div id="' + this.goal.milestones[i]._id + 
	// 			'" class="milestone-dot" (click)="openModal(this.id)"></div>');
	// 		$('#' + this.goal.milestones[i]._id).css("margin-top", function(){
	// 			var ms = Math.abs(new Date(end).getTime() - new Date(start).getTime());
	// 			var pixelsPerMs = 400 / ms;
	// 			var milestoneMargin = (Math.round(
	// 				(new Date(this.goal.milestones[i].deadline).getTime() - new Date(start).getTime()
	// 			) * pixelsPerMs)) + "px";
	// 			return milestoneMargin;
	// 		});
	// 	}
	// }

	openModal(divId) {
		$( '.svg' ).on( 'click', 'divId', function(event) {
			for ( let i = 0; i < this.goal.milestones.length; i++ ) {
				if (this.goal.milestones[i]._id === divId) {
					this.goal.milestones[i] = this.activeMilestone;
					return this.activeMilestone;
				}
			}
			console.log("clicked");
			// this.activeMilestone = the milestone with the id that matches the div id
			$("#" + this.activeMilestone._id).modal();
		});
	};

}


