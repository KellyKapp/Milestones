module.exports = function(mongoose) {
	var Goal = mongoose.model ("Goal", {
		name: String,
		timeline: {},
		resources: [],
		team: [],
		obstacles: []
	});

	return GoalModel;
};