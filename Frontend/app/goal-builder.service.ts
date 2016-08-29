import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs/observable";


@Injectable ()


export class GoalBuilderService {

	goals = [];

	constructor(private apiService: ApiService) {
	}

	getAllGoals() {
		return this.apiService.get("/all")
			.do(function(res) {
				this.goals = res;
			}.bind(this));
	}

	buildNewGoal(GoalStartObject) {
		return this.apiService.post("/create", JSON.stringify({
			goal : {
				name: GoalStartObject.name,
				startDate: GoalStartObject.startDate,
				completionDate: GoalStartObject.completionDate,
				milestones: [],
			}
		})).do(function(res) {
			this.goals.push(res);
		}.bind(this));
	}

	buildNewMilestone(milestoneObject, goalId) {
		return this.apiService.post("/milestone", JSON.stringify({
			milestone : {
				description: milestoneObject.description,
				deadline: milestoneObject.deadline,
				resources: [],
				team: [],
				obstacles: []
			},
			goalId: goalId,

		})).do(function(res) {
			var goal = this.findGoalById(goalId);
			goal.milestones = res.milestones;
		}.bind(this));
	}

	// addResource(activeMilestone) {
	// 	return this.apiService.post("/resource", JSON.stringify({
	// 		resource : {
	// 			description: resourceObject.description,
	// 			cost: resourceObject.cost
	// 		}
	// 	})).do(function(res) {
	// 		activeMilestone.resources = res.resources;
	// 	}.bind(this));
	// }

// buildNewTeam(teamObject) {
//     return this.apiService.post("/milestone", JSON.stringify({
//         team : {
//             members: teamObject.members,
//             roles: teamObject.roles,
//         }
//     })).do(function(res) {
//         this.team.push(res);
//     }.bind(this));
// }

// buildNewObstacle(obstacleObject) {
//     return this.apiService.post("/milestone", JSON.stringify({
//         obstacle : {
//             description: obstacleObject.description,
//             solution: obstacleObject.solution
//         }
//     })).do(function(res) {
//         this.obstacles.push(res);
//     }.bind(this));
// }

// getSummaryData() {
//     return this.apiService.get("/summary")
//         .do(function(res) {
//             this.goals = res;
//         }.bind(this));
// }

// deleteGoal(_id) {
//     return this.apiService.post("/delete", JSON.stringify({
//         _id: _id
//     })).do(function(res) {
//         this.goals = res;
//     }.bind(this));
// }

updateGoal(_id, newValue) {
    return this.apiService.post("/update", JSON.stringify({
        _id: _id,
        goal: newValue
    })).do(function(res){
        this.overwrite(this.findItemById(_id), res);
    }.bind(this));
}

	findGoalInCache(_id) {
		for (let goal of this.goals) {
			if (goal._id === _id) {
				return goal;
			}
		}
	}

	// findMilestone(_id) {
	// 	for (let milestone of this.goals.milestones) {
	// 		if (milestone._id === _id) {
	// 			return milestone;
	// 		}
	// 	}
	// }

	findGoalById (_id) {
		return Observable.create(function(observer) {
			// return a goal in cache
			let goal = this.findGoalInCache(_id);
			if (goal) {
				observer.next(goal);
				observer.complete();
			}

			// otherwise, return a goal from the server
			this.getAllGoals().subscribe(function(goals) {
				let goal = this.findGoalInCache(_id);
				observer.next(goal);
				observer.complete();
			}.bind(this));
		}.bind(this));
	}

	displayAllGoals () {
		return Observable.create(
				function(observer) {
					let goals = this.getAllGoals();
					if (goals) {
						observer.next(goals);
						observer.complete();
					}
		}.bind(this));
	}


	// findMilestoneById (_id) {
	// 	return Observable.create(function(observer) {
	// 		let activeMilestone = this.findMilestone(_id);
	// 		console.log(activeMilestone);
	// 		observer.next(goal);
	// 		obeserver.complete();
	// 	}.bind(this));
	// };

	overwrite(orig, newValues) {
		for (let i in newValues) {
			if (newValues.hasOwnProperty(i)) {
				orig[i] = newValues[i];
			}
		}
	}

}

