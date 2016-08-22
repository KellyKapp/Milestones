module.exports = function(mongoose) {
	var Resource = mongoose.model("Resource", {
		description: String,
		cost: String
	});

	return ResourceModel;
};