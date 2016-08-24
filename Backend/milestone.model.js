module.exports = function(mongoose) {
	var MilestoneModel = mongoose.model("Milestone", {
		description: String,
		completionDate: String,
		resources: [],
		team: [],
		obstacles: []
	});

	return MilestoneModel;
};