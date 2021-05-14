const User =  require('../models/userModel/userModel')
const generateToken  = require('../utils/tokenGenerator')
const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator')

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

const login = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({
        email
      });
      if (!user)
        return res.status(400).json({
          message: "User Not Found"
        });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(400).json({
          message: "Incorrect Password !"
        });

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        "randomString",
        {
          expiresIn: 3600
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token
          });
        }
      );
    } catch (e) {
      console.error(e);
      res.status(500).json({
        message: "Server Error"
      });
    }
  }

const signup = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }
    
    const {
        username,
        email,
        password
    } = req.body;
    try {
        let user = await User.findOne({
            email
        });
        if (user) {
            return res.status(400).json({
                msg: "User Already Exists"
            });
        }

        user = new User({
            username,
            email,
            password
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        if(user){
            res.status(201).json({
                _id:user._id,
                username:user.username,
                email:user.email,
                token:generateToken(user._id)
            })
        }
        await user.save();
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Saving");
    }
} 
module.exports = {
    registerUser,
    authUser,
    login,
    signup
}