
const { check } = require('express-validator')

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
module.exports = { checkValidation }