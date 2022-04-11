const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    mobile:{
        type: Number,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    otp:{
        type: Number,
        required: true
    },
    mobotp:{
        type: Number,
        required: true
    }
  });
  const User = mongoose.model('user', UserSchema);
  module.exports = User;