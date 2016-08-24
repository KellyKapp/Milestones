module.exports = function(mongoose) {
	var GoalModel = mongoose.model ("Goal", {
		name: String,
		startDate: String,
		completionDate: String,
		milestones: [],
		resources: [],
		team: [],
		obstacles: [],
		typeIndividual: Boolean,
		typeCorporate: Boolean
	});

	return GoalModel;
};