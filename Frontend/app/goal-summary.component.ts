import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { FORM_DIRECTIVES } from "@angular/common";
import { GoalBuilderService } from "./goal-builder.service";
import { ApiService } from "./api.service";


@Component({
	selector: "goal-summary",
	templateUrl: 'app/html_files/goal-summary-component.html',
	styles: [`
		.col-md-2 {
			border-right: 1px solid grey;
			font-size: 1.15em
		}
		.col-md-9 {
			font-size: 1.25em;
			margin: 7px 0;
		}
		.small-line {
		    height: 1.5px;
		    width: 40px;
		    background-color: #32C5D2;
		}
		.goal-name {
			font-size: 1.2em;
		}
		input {
			border: none;
		}
		li {
			list-style-type: none;
			font-size: .85em;
		}
	`]
})

export class GoalSummaryComponent {

	@Input() goal;
	@Input() milestones;
	@Input() resources;
	@Input() team;
	@Input() obstacles;

	constructor (
		private goalBuilderService: GoalBuilderService, 
		private router: Router) {}

}
