module.exports = function(mongoose) {
	var Timeline = mongoose.model("Timeline", {
		startDate: String,
		completionDate: String,
		milestones: []
	});

	return TimelineModel;
};