module.exports = function(mongoose) {
	var TeamModel = mongoose.model("Team", {
		members: [],
		roles: [],
		hours: [],
		cost: []
	});

	return TeamModel;
};