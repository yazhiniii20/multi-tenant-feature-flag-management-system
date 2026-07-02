const Organization = require("../models/Organization.js");
const User = require("../models/User.js");
const bcrypt = require("bcrypt");

const createOrgAdmin = async(req,res) => {
    try{
       const {name,email,password,organization} = req.body;
       if(!email || !name || !password || !organization){
         return res.status(400).json({
            message : "All fields are required"
         })
       }
       const org = await Organization.findById(organization);
       if(!org){
        return res.status(404).json({
            message : "Organization does'nt exist"
        });
       }
       if (email === process.env.SUPER_ADMIN_EMAIL) {
        return res.status(409).json({
            message: "This email is reserved for the Super Admin."
        });
       }
       const emailExists = await User.findOne({email});
       if(emailExists){
        return res.status(409).json({
            message : "User already exists"
        });
       }
       const hashedPassword = await bcrypt.hash(password,10);
       const role = "ORG_ADMIN";
       const user = await User.create({name,email,password : hashedPassword,role,organization});
       return res.status(201).json({
        message : "User created",
        user
       });
    }catch(error){
      console.log(error);
      return res.status(500).json({
        message : "Internal Server Error"
      })
    }
};

module.exports = {createOrgAdmin};