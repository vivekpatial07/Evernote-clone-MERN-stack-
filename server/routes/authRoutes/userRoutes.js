const express = require('express')
const router = express.Router()
const { checkValidation }  = require('../../middlewares/authmiddleware')
const { signup, login } = require('../../controllers/userController')

router.post("/signup", checkValidation, signup)
router.post("/login", checkValidation, login)

module.exports = router;