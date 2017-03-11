const mongoose = require('mongoose');

var guestonetime = new mongoose.Schema({
    fullname: { type: String },
    dob: { type: Date },
    uid: { type: String, unique: true },
    mobile: { type: String },
    invest_officer: { type: String },
    address: { type: String },
    city: { type: String },
    country: { type: String },
    postal_code: { type: String }
},{ versionKey: false });

var GuestOneTime = mongoose.model('guest-onetime', guestonetime);

module.exports = GuestOneTime;