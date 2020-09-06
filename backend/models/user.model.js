var mongoose = require("mongoose");
// var passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

var UserSchema = new Schema({
	username: {type: String, unique: true, required: true},
	password: {type: String, required: true},
	email: {type: String, unique: true, required: true},
	resetPasswordToken: String,
	resetPasswordExpires: Date
});

// UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);