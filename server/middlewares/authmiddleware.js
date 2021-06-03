const jwt = require('jsonwebtoken')
const { check } = require('express-validator')
const User = require('../models/userModel/userModel')


const checkValidation = (req, res, next ) =>  {
  return [//add this check in route middleware and then put it in a controller function
  // check("username", "Please Enter a Valid Username")
  // .not()
  // .isEmpty(),
  check("email", "Please enter a valid email").isEmail(),
  check("password", "Please enter a valid password").isLength({
      min: 6
  }),
  next()
]
}





const protect = async(req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]
      
      const decoded = jwt.verify(token, "randomString")

      req.user = await User.findById(decoded.user.id).select('-password')

      next()

    } catch (error) {
      console.error(error)
      res.status(401)
      throw new Error('Not authorized, token failed')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
}


module.exports = { checkValidation, protect }