const express = require('express')
const router = express.Router()
const {registerUser,authUser} = require('../../controllers/userController')
// const authUser = require('../../controllers/userController')
router.route('/signin').post(authUser)
module.exports = router