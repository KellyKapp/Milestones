import { Component, Input, Output, EventEmitter } from "@angular/core";
import { GoalBuilderService } from "./goal-builder.service";

declare let $;

@Component({
	selector: 'milestone-dot',
	template: `
		<div class="milestone-dot">
	
		</div>
	`,
	styles: [`
	:host {
		position: absolute;
		z-index: 1;
		height: 20px;
		width: 20px;
		border-radius: 50%;
		background-color: lightgrey;
		margin-left: 65px;
		display: inline-block;
	}
	`]
})

class MilestoneDotComponent {
	@Input() milestone;
}

@Component({
	selector: "timeline",
	directives: [ MilestoneDotComponent ],
	template: `
		<div class="timeline">
			<div class="date start" id="canvas">
				{{goal.startDate | date:"longDate"}}
			</div>
			<div class="svg">
				<svg height="400" width="150">
  					<line x1="75" y1="0" x2="75" y2="400" style="stroke:#32C5D2;stroke-width:2" />
				</svg>
				<milestone-dot 
					*ngFor="let milestone of milestones"
					[milestone]="milestone"
					(click)="openModal.emit(milestone)"
					[style.top.px]="getTopMargin(milestone)"
				>
				</milestone-dot>
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
			position: relative;
			height: 400px;
			width: 150px;
		}
		.end {
			margin-top: 20px;
		}
	`]
})

export class TimelineComponent {

	@Input() goal;
	@Input() milestones;
	@Output() openModal = new EventEmitter();

	constructor(private goalBuilderService: GoalBuilderService) {}

	getTopMargin(milestone) {

		let start = this.goal.startDate;
		let end = this.goal.completionDate;

		var ms = Math.abs(new Date(end).getTime() - new Date(start).getTime());
		var pixelsPerMs = 400 / ms;
		var milestoneMargin = (Math.round(
			(new Date(milestone.deadline).getTime() - new Date(start).getTime()
		) * pixelsPerMs));
		return milestoneMargin;
	}

}


