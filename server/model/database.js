const mongoose = require('mongoose');

var userSchema=new mongoose.Schema({
    email:{type:String,unique:true},
    password:{type:String},
    access:{type:String}
},{ versionKey: false });

var User=mongoose.model('login',userSchema);

module.exports=User;
