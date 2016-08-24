import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FORM_DIRECTIVES } from "@angular/common";

@Component ({
	selector: 'corporate-milestone',
	directives: [ ...FORM_DIRECTIVES ],
	templateUrl: 'app/html_files/corporate-milestone-component.html',
	styleUrls: ['app/css_files/milestone.css']
})

export class CorporateMilestoneComponent {


milestoneDescription: string= "";
milestoneDeadline: string= "";
milestoneResources= [];
milestoneResourcesCost= [];
milestoneTeamMembers= [];
milestoneTeamMemberRoles= [];
milestoneTeamMembersHours= [];
milestoneTeamMembersCost= [];
milestoneObstacles= [];
milestoneSolutions= [];


addResource (resource: any, resourceCost: any) {
	// add new resource to Milestone component
	if (resource) {
		this.milestoneResources.push(resource);
	}
	console.log(this.milestoneResources);
	if (resourceCost) {
		this.milestoneResourcesCost.push(resourceCost);
	}
}


addTeamMember(
	teamMember: string,
	teamMemberRole: string, 
	teamMemberHours: number, 
	teamMemberSalary: number) {
	// add new team member to Milestone component
	if (teamMember) {
		this.milestoneTeamMembers.push(teamMember);
	}
	if (teamMemberRole) {
		this.milestoneTeamMemberRoles.push(teamMemberRole);
	}
	if (teamMemberHours) {
		this.milestoneTeamMembersHours.push(teamMemberHours);
	}
	if (teamMemberSalary) {
		this.milestoneTeamMembersCost.push((teamMemberSalary / 2080) * teamMemberHours);
	}
}


addObstacle(obstacle: string, solution: string) {
	// add new obstacle to Milestone component
	if (obstacle) {
		this.milestoneObstacles.push(obstacle);
	}
	if (solution) {
		this.milestoneSolutions.push(solution);
	}
}


saveMilestone() {
	// save data to Mongo
		// create milestone object
		// push pieces to arrays in goal object
}

}

