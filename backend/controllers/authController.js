const jwt = require("jsonwebtoken");
const User = require("../models/User.js");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
   try{
      const {email,password} = req.body;
      let payload;
      if(email === process.env.SUPER_ADMIN_EMAIL){
         payload = {
            role : "SUPER_ADMIN",
            email : process.env.SUPER_ADMIN_EMAIL,
        };
        }else{
        const user = await User.findOne({email});
        if(!user){
         return res.status(401).json({
            message : "Invalid email or password"
         });
        }
       const canLogin = await bcrypt.compare(password,user.password);
       if (!canLogin) {
         return res.status(401).json({
             message: "Invalid email or password."
        });
      }
      payload = {
         id : user._id,
         role : user.role,
         email : user.email,
         organization : user.organization
     };
   }
   const token = jwt.sign(
         payload,
         process.env.JWT_SECRET,
         {
            expiresIn : "1h",
         });
 
         return res.status(200).json({
            message : "Login successful !",
            token,
    });
   }catch(error){
    console.error(error);
    return res.status(500).json({
        message : "Internal Server Error",
    });
   }
};

module.exports = {login};