module.exports = function(mongoose) {
	var ResourceSchema = new mongoose.Schema({
		description: String,
		cost: String
	});

	var TeamSchema = new mongoose.Schema({
		members: [String],
		roles: [String],
		hours: [Number],
		cost: [Number]
	});

	var ObstacleSchema = new mongoose.Schema({
		description: String,
		solution: String
	});

	var MilestoneSchema = new mongoose.Schema({
		description: String,
		completionDate: String,
		resources: [ResourceSchema],
		team: [TeamSchema],
		obstacles: [ObstacleSchema]
	});


	var GoalModel = mongoose.model ("Goal", {
		name: String,
		startDate: String,
		completionDate: String,
		milestones: [MilestoneSchema],
		typeIndividual: Boolean,
		typeCorporate: Boolean
	});

	return GoalModel;
};