const express = require('express')
const router = express.Router()

const {signup} = require('../../controllers/userController')
router.route('/signin').post(signup)
module.exports = router