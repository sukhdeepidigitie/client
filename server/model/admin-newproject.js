const mongoose = require('mongoose');

var adminproject = new mongoose.Schema({
    company_name: { type: String },
    protocol: { type: String },
    sponsor: { type: String },
    invest_officer: { type: String },
    address: { type: String },
    city: { type: String },
    country: { type: String },
    postal_code: { type: String },
    time: { type: Date, default: Date.now, required: true },
    rate_chart: { type: Array }


}, { versionKey: false });

var AdminProject = mongoose.model('admin-project', adminproject);

module.exports = AdminProject;