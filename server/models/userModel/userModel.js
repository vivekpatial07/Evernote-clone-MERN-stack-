const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')


//schema

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        // required:true
    },
    email:{
        type:String,
        required:true
    },
    password: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now()
      }
})  
UserSchema.methods.matchPassword =  function (enteredPassword) {
  return  bcrypt.compare(enteredPassword, this.password)
}
const User= mongoose.model("user", UserSchema, "users");

module.exports = User 