const mongoose = require('mongoose');

var guestclient = new mongoose.Schema({
    fullname: { type: String },
    dob: { type: Date },
    protocol: { type: String },
    uid: { type: String, unique: true },
    mobile: { type: String },
    invest_officer: { type: String },
    address: { type: String },
    city: { type: String },
    country: { type: String },
    postal_code: { type: String },
    time: { type: Date, default: Date.now() }
}, { versionKey: false });

var GuestClient = mongoose.model('guest-client', guestclient);

module.exports = GuestClient;