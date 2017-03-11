const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/hospital');
var db = mongoose.connection;
var User = require('../model/database.js');
var AdminProject = require('../model/admin-newproject.js');
var GuestOneTime = require('../model/guest-onetime.js');
var GuestClient = require('../model/guest-newclient.js');
var AdminClient = require('../model/admin-newclient.js');
/* GET api listing. */
router.get('/', (req, res) => {
  res.send("hello to the fucking world");
});

router.post('/login', function (req, res) {
  var email = req.body.email;
  var password = req.body.password;
  console.log("here in the request");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  console.log(email + "  " + password);
  var query = User.findOne({ email: email, password: password });
  query.select('access');
  query.exec(function (err, right) {
    if (err) {
      res.json({ status: "error" });
    }
    if (right) {
      res.json({ status: "success", data: right });
    }
    else {
      res.json({ status: "fail" });
    }
  })
});

router.get('/get-data', function (req, res, next) {
  var data = User.find({}).exec(function (err, result) {
    if (err) {
      res.json({ "message": err });
    }
    else {
      res.json(result);
    }
  })
});

router.post('/createAdminNewProject', function (req, res) {
  var company_name = req.body.company_name;
  var protocol = req.body.protocol;
  var sponsor = req.body.sponsor;
  var invest_officer = req.body.invest_officer;
  var address = req.body.address;
  var city = req.body.city;
  var country = req.body.country;
  var postal_code = req.body.postal_code;
  var rate_chart = [
    { "x-ray": "3500" }, { "city-scan": "3600" }
  ];
  var data = new AdminProject({
    company_name: company_name,
    protocol: protocol,
    sponsor: sponsor,
    invest_officer: invest_officer,
    address: address,
    city: city,
    country: country,
    postal_code: postal_code,
    rate_chart: rate_chart
  });
  data.save(function (err) {
    if (err) {
      return res.json({ "status": "fail" });
    }
    res.json({ "status": "success" });

  })
});

router.post('/createGuestOneTimeVisit', function (req, res) {
  var fullname = req.body.fullname;
  var dob = req.body.dob;
  var uid = req.body.uid;
  var mobile = req.body.mobile;
  var invest_officer = req.body.invest_officer;
  var address = req.body.address;
  var city = req.body.city;
  var country = req.body.country;
  var postal_code = req.body.postal_code;

  var data = new GuestOneTime({
    fullname: fullname,
    dob: Date(dob),
    uid: uid,
    mobile: mobile,
    invest_officer: invest_officer,
    address: address,
    city: city,
    country: country,
    postal_code: postal_code
  });
  data.save(function (err) {
    if (err) {
      return res.json({ "status": "fail" });
    }
    res.json({ "status": "success" });
  })

});


router.post('/createGuestNewClient', function (req, res) {
  var fullname = req.body.fullname;
  var dob = req.body.dob;
  var protocol = req.body.protocol;
  var uid = req.body.uid;
  var mobile = req.body.mobile;
  var invest_officer = req.body.invest_officer;
  var address = req.body.address;
  var city = req.body.city;
  var country = req.body.country;
  var postal_code = req.body.postal_code;

  var data = new GuestClient({
    fullname: fullname,
    dob: Date(dob),
    protocol: protocol,
    uid: uid,
    mobile: mobile,
    invest_officer: invest_officer,
    address: address,
    city: city,
    country: country,
    postal_code: postal_code
  });
  data.save(function (err) {
    if (err) {
      return res.json({ "status": "fail" });
    }
    res.json({ "status": "success" });
  })
});


router.post('/createAdminNewClient', function (req, res) {
  var fullname = req.body.fullname;
  var dob = req.body.dob;
  console.log(dob);
  var protocol = req.body.protocol;
  var uid = req.body.uid;
  var mobile = req.body.mobile;
  var invest_officer = req.body.invest_officer;
  var address = req.body.address;
  var city = req.body.city;
  var country = req.body.country;
  var postal_code = req.body.postal_code;

  var data = new AdminClient({
    fullname: fullname,
    dob: Date(dob),
    protocol: protocol,
    uid: uid,
    mobile: mobile,
    invest_officer: invest_officer,
    address: address,
    city: city,
    country: country,
    postal_code: postal_code
  });
  data.save(function (err) {
    if (err) {
      return res.json({ "status": "fail" });
    }
    res.json({ "status": "success" });
  })
});

router.post('/doCheckLogin', function (req, res) {
  var id = req.body.id;
  console.log(id);
  var query = User.findById(id);
  query.select('access');
  query.exec(function (err, right) {
    if (err) {
      res.json({ status: "error" });
    }
    if (right) {
      res.json({ status: "success", data: right });
    }
    else {
      res.json({ status: "fail" });
    }
  })

});

router.post('/createUser', function (req, res) {
  var username = req.body.email;
  var password = req.body.password;
  var access = req.body.access;
  console.log(username + "  " + password);
  var newdata = new User({ email: username, password: password, access: access });
  newdata.save(function (err) {
    if (err) { res.json({ "error": err }) }
    res.json({ "message": "success" })

  })
});


module.exports = router;