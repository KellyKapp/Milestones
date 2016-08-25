import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { FORM_DIRECTIVES } from "@angular/common";
import { GoalBuilderService } from "./goal-builder.service";
import { ApiService } from "./api.service";


@Component({
	selector: "goal-summary",
	templateUrl: 'app/html_files/goal-summary-component.html',
	styles: [`
		.col-md-3 {
			border-right: 1px solid grey;
			font-size: 1.15em
		}
		.col-md-9 {
			font-size: 1.15em;
			margin: 7px 0;
		}
		.small-line {
		    height: 1.5px;
		    width: 40px;
		    background-color: #32C5D2;
		}
	`]
})

export class GoalSummaryComponent {

	@Input() goal;
	@Input() milestone;
	@Input() resource;
	@Input() team;
	@Input() obstacle;

	constructor (private goalBuilderService: GoalBuilderService, private router: Router) {}

}




			// <h5>Milestones</h5>
			// <input [(ngModel)]="goal.milestones.description" disabled>

			// <h5>Resources</h5>
			// <ul>
		 //        <li *ngFor="let resource.name of Resources">
		 //        	{{resource.name}}
		 //        </li>
		 //    </ul>
		 //    <ul>
		 //    	<li *ngFor="let resource.cost of Resources">
		 //    		{{resource.cost}}
		 //    	</li>
			// </ul>

			// <h5>Team</h5>
			// <ul>
			// 	<li *ngFor="let team.member of Team">
			// 		{{team.member}}
			// 	</li>
			// </ul>
			// <ul>
			// 	<li *ngFor="let team.role of Team">
			// 		{{team.role}}
			// 	</li>
			// </ul>
			// <ul>
			// 	<li *ngFor="let team.hours of Team">
			// 		{{team.hours}}
			// 	</li>
			// </ul>
			// <ul>
			// 	<li *ngFor="let team.cost of Team">
			// 		{{team.cost.toFixed(2)}}
			// 	</li>
			// </ul>

			// <h5>Obstacles & Solutions</h5>
			// <ul>
			// 	<li *ngFor="let obstacle.description of Obstacles">
			// 		{{obstacle.name}}
			// 	</li>
			// </ul>
			// <ul>
			// 	<li *ngFor="let obstacle.solution of Obstacles">
			// 		{{obstacle.solution}}
			// 	</li>
			// </ul>
