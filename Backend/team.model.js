module.exports = function(mongoose) {
	var Team = mongoose.model("Team", {
		members: [],
		hours: [],
		cost: []
	});

	return TeamModel;
};