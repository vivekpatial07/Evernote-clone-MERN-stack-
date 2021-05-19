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
  notes: [
    {
     note:  {
      type: mongoose.Schema.Types.ObjectId,
      mainNote: {type: String},
      title: {type: String},
      required: true,
      ref: "Note"
    }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now()
  }
})  
UserSchema.methods.matchPassword =  function (enteredPassword) {
  return  bcrypt.compare(enteredPassword, this.password)
}
const User= mongoose.model("User", UserSchema);

module.exports = User 