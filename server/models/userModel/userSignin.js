const mongoose = require('mongoose');



//schema

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
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
const User= mongoose.model("user", UserSchema);

module.exports = User 