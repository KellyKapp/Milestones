module.exports = function(mongoose) {
	var OrganizationModel = mongoose.model("Organization", {
		name: String,
		admin: String,
		members: [],
		goals: [],
	});

	return OrganizationModel;
};