module.exports = function(mongoose) {
	var Obstacle = mongoose.model("Obstacle", {
		description: String,
		solution: String
	});

	return ObstacleModel;
};