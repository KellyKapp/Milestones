module.exports = function(mongoose) {
	var User = mongoose.model("User", {
		email: String,
		password: String,
		teams: [],
		goals: []
	});

	return UserModel;
};