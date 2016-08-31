module.exports = function(mongoose) {
	var ResourceSchema = new mongoose.Schema({
		description: String,
		cost: String
	});

	var ObstacleSchema = new mongoose.Schema({
		description: String,
		solution: String
	});

	var PeopleSchema = new mongoose.Schema({
		name: String,
		role: String,
	});

	var MilestoneModel = mongoose.model ("Milestone", {
		description: String,
		deadline: String,
		resources: [ResourceSchema],
		people: [PeopleSchema],
		obstacles: [ObstacleSchema],
		goalId: String
	});


	var GoalModel = mongoose.model ("Goal", {
		name: String,
		startDate: String,
		completionDate: String,
	});

	return {
		GoalModel: GoalModel,
		MilestoneModel: MilestoneModel
	};
};