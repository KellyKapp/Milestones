module.exports = function(mongoose) {
	var ObstacleModel = mongoose.model("Obstacle", {
		description: String,
		solution: String
	});

	return ObstacleModel;
};