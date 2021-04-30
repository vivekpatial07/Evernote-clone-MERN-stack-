const User =  require('../models/userModel/userModel')
// const asyncHandler = require('express-async-handler')

const registerUser = ((req,res)=>{    
    const {username,email,password} = req.body
    User.exists({ email }).then((response)=>{
        if (response) {
            return res.status(400).json('User already exists')
        }
        const user = new User({
            username,
            email,
            password
        })
       
        if(user){
            user.save().then(()=>
            res.status(201).json({
                _id:user._id,
                username: user.username,
                email: user.email,
                // isAdmin:` user.isAdmin,
                token:null
            }))
        }
        else {
        res.status(400).json('Invalid user data')
      }
    })
  
})
const authUser =  ((req,res)=>{
  const { email, password } = req.body
//   User.findOne({ email }).then(async(usr)=>{
//       console.log(usr)
//       let pass  =  await usr.matchPassword(password)
//         console.log(pass)
//       if(pass){
//           console.log('yess')
//       }

//   })
    User.findOne({email}).then(usr=>{
        if(usr&&password===usr.password){
            
        }
    })
})
module.exports = {
    registerUser,
    authUser
}