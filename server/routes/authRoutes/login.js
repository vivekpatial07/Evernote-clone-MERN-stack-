const express = require('express')
const { check , validationResult} = require('express-validator')
const {login} = require('../../controllers/userController')
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require('../../models/userModel/userModel')
router.post(
    "/login",
    [
      check("email", "Please enter a valid email").isEmail(),
      check("password", "Please enter a valid password").isLength({
        min: 6
      })
    ],
    login
  );



const auth = function(req, res, next) {
    const token = req.headers.authorization
    if (!token) return res.status(401).json({ message: "Auth Error" });
  
    try {
      const decoded = jwt.verify(token, "randomString");
      req.user = decoded.user;
       console.log(decoded)
        next();
    } catch (e) {
      console.error(e);
      res.status(500).send({ message: "Invalid Token" });
     }
  };




  
  
  router.get("/me", auth, async (req, res) => {
    try {
      // request.user is getting fetched from Middleware after token authentication
      const user = await User.findById(req.user.id);
      res.json(user);
    } catch (e) {
      res.send({ message: "Error in Fetching user" });
    }
  });
  

module.exports = router;