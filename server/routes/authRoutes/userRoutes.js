const express = require('express')
const router = express.Router()
const { checkValidation }  = require('../../middlewares/authmiddleware')
const { signup } = require('../../controllers/userController')

router.post("/signup", checkValidation, signup)

module.exports = router;