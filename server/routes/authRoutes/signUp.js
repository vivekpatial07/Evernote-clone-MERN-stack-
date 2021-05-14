const express = require('express')
const { checkValidation }  = require('../../middlewares/authmiddleware')
const { signup } = require('../../controllers/userController')
const router = express.Router();
router.post("/signup", checkValidation, signup)
module.exports = router;