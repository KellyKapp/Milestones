import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";

@Injectable ()
	export class GoalBuilderService {
		goals = [];

		constructor(private apiService: ApiService) {
        this.getAllGoals().subscribe();
    }

    getAllGoals() {
        return this.apiService.get("/all")
            .do(function(res) {
                this.goals = res;
            }.bind(this));
    }

    buildNewGoal() {
        return this.apiService.post("/create", JSON.stringify({
            goal : {
                name: "",
                startDate: "",
                completionDate: "",
                resources: [],
				team: [],
				obstacles: []
            }
        })).do(function(res) {
            this.goals.push(res);
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

