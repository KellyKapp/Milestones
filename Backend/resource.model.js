module.exports = function(mongoose) {
	var ResourceModel = mongoose.model("Resource", {
		description: String,
		cost: String
	});

	return ResourceModel;
};