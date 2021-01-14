const mongoose= require('mongoose');
const { Schema } = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');

const Users = new Schema({
    username:  String,
    email: String,
    date: { type: Date, default: Date.now }
});

Users.plugin(passportLocalMongoose);
module.exports = mongoose.model("Users", Users)

