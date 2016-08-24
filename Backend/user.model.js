module.exports = function(mongoose) {
	var UserModel = mongoose.model("User", {
		email: String,
		password: String,
		teams: [],
		goals: []
	});

	return UserModel;
};