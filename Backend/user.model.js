module.exports = function(mongoose) {
	var UserModel = mongoose.model("User", {
		username: String,
		password: String,
		goals: []
	});

	return UserModel;
};