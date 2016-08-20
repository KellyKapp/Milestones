import { Component } from "@angular/core";
import { FORM_DIRECTIVES } from "@angular/common";

@Component ({
	selector: 'milestone',
	directives: [ ...FORM_DIRECTIVES ],
	templateUrl: 'app/html_files/milestone-component.html',
	styleUrls: ['app/css_files/milestone.css']
})

export class MilestoneComponent {

milestoneDescription: string= "";
milestoneDeadline: string= "";
milestoneResources= [];
milestoneResourceCost: number;
milestoneTeamMember: string= "";
milestoneTeamMemberRole: string= "";
milestoneTeamMemberHours: number;
milestoneTeammemberSalary: number;
milestoneObstacle: string= "";
milestoneSolution: string= "";


addResource (resource: string) {
	// add new resource to Milestone component
	if (resource) {
		this.milestoneResources.push(resource);
	}
}

addTeamMember() {
	// add new team member to Milestone component
}

addObstacle() {
	// add new obstacle to Milestone component
}

printToOutput() {
	// display data in corresponding output section
}

saveMilestone() {
	// save data to Mongo
}
}

