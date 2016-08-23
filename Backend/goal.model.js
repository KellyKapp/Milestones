module.exports = function(mongoose) {
	var Goal = mongoose.model ("Goal", {
		name: String,
		startDate: String,
		completionDate: String,
		resources: [],
		team: [],
		obstacles: []
	});

	return GoalModel;
};