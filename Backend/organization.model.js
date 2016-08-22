module.exports = function(mongoose) {
	var Organization = mongoose.model("Organization", {
		name: String,
		admin: String,
		members: [],
		goals: [],
	});

	return OrganizationModel;
};