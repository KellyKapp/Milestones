import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";

@Injectable ()


export class GoalBuilderService {
	goals = [];
    milestones = [];
    resources = [];
    team = [];
    obstacles = [];

	constructor(private apiService: ApiService) {
        this.getAllGoals().subscribe();
}

getAllGoals() {
    console.log("calling getAllGoals");
    return this.apiService.get("/all")
        .do(function(res) {
            this.goals = res;
            console.log("got all goals");
        }.bind(this));
}

buildNewGoal(individualGoalStartObject) {
    return this.apiService.post("/create", JSON.stringify({
        goal : {
            name: individualGoalStartObject.name,
            startDate: individualGoalStartObject.startDate,
            completionDate: individualGoalStartObject.completionDate,
            milestones: [],
            resources: [],
			team: [],
			obstacles: []
        }
    })).do(function(res) {
        this.goals.push(res);
    }.bind(this));
}

buildNewMilestone(milestoneObject) {
    return this.apiService.post("/milestone", JSON.stringify({
        milestone : {
            description: milestoneObject.description,
            deadline: milestoneObject.deadline
            // resources: 
            // team: 
            // obstacles:
        }
    })).do(function(res) {
        this.milestones.push(res);
    }.bind(this));
}

buildNewResource(resourceObject) {
    return this.apiService.post("/milestone", JSON.stringify({
        resource : {
            description: resourceObject.description,
            cost: resourceObject.cost
        }
    })).do(function(res) {
        this.resources.push(res);
    }.bind(this));
}

buildNewTeam(teamObject) {
    return this.apiService.post("/milestone", JSON.stringify({
        team : {
            members: teamObject.members,
            roles: teamObject.roles,
        }
    })).do(function(res) {
        this.team.push(res);
    }.bind(this));
}

buildNewObstacle(obstacleObject) {
    return this.apiService.post("/milestone", JSON.stringify({
        obstacle : {
            description: obstacleObject.description,
            solution: obstacleObject.solution
        }
    })).do(function(res) {
        this.obstacles.push(res);
    }.bind(this));
}

getSummaryData() {
    return this.apiService.get("/summary")
        .do(function(res) {
            this.goals = res;
        }.bind(this));
}

deleteGoal(_id) {
    return this.apiService.post("/delete", JSON.stringify({
        _id: _id
    })).do(function(res) {
        this.goals = res;
    }.bind(this));
}

updateGoal(_id, newValue) {
    return this.apiService.post("/update", JSON.stringify({
        _id: _id,
        goal: newValue
    })).do(function(res){
        this.overwrite(this.findItemById(id), res);
    }.bind(this));
}

findGoalById(_id) {
    for (let goal of this.goals) {
        if (goal._id === _id) {
            return goal;
        }
    }
}

overwrite(orig, newValues) {
    for (let i in newValues) {
        if (newValues.hasOwnProperty(i)) {
            orig[i] = newValues[i];
        }
    }
}

}

