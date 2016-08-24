import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";

@Injectable ()
	export class GoalBuilderService {
		goals = [];

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

    getSummaryData() {
        return this.apiService.get("/summary")
            .do(function(res) {
                this.goals = res;
            }.bind(this));
    }

    deleteGoal(id) {
        return this.apiService.post("/delete", JSON.stringify({
            id: id
        })).do(function(res) {
            this.goals = res;
        }.bind(this));
    }

    updateGoal(id, newValue) {
        return this.apiService.post("/update", JSON.stringify({
            id: id,
            goal: newValue
        })).do(function(res){
            this.overwrite(this.findItemById(id), res);
        }.bind(this));
    }

    findGoalById(id) {
        for (let goal of this.goals) {
            if (goal._id === id) {
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

