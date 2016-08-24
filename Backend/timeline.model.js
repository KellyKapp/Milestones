module.exports = function(mongoose) {
	var TimelineModel = mongoose.model("Timeline", {
		startDate: String,
		completionDate: String,
		milestones: []
	});

	return TimelineModel;
};