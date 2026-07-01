const jwt = require("jsonwebtoken");

const login = async (req, res) => {
   try{
      const {email,password} = req.body;
      if(email === process.env.SUPER_ADMIN_EMAIL && password === process.env.SUPER_ADMIN_PASSWORD){
        const token = jwt.sign({
            role : "SUPER_ADMIN",
            email : process.env.SUPER_ADMIN_EMAIL,
        },
        process.env.JWT_SECRET,
        {
           expiresIn : "1h",
        });

        return res.status(200).json({
           message : "Login successful !",
           token,
        });

      }else{
        return res.status(401).json({
            message : "Invalid Credentials",
        })
      }
   }catch(error){
    console.error(error);
    return res.status(500).json({
        message : "Internal Server Error",
    })
   }
};

module.exports = {login};