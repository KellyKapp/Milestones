module.exports = function(mongoose) {
	var Milestone = mongoose.model("Milestone", {
		description: String,
		completionDate: String,
		resources: [],
		team: [],
		obstacles: []
	});

	return MilestoneModel;
};