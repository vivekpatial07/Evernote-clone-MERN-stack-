const express = require('express')
const router = express.Router()
const {registerUser,authUser} = require('../../controllers/userController')
// const authUser = require('../../controllers/userController')
router.route('/signin').post(authUser)
router.route('/register').post(registerUser)
module.exports = router