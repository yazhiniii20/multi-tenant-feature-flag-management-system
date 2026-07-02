const isSuperAdmin = (req,res,next) => {
     if(req.user.role !== "SUPER_ADMIN"){
         return res.status(403).json({
            message : "Access Denied"
         });
     }
     return next();
};
const isOrgAdmin = (req,res,next) => {
  if(req.user.role !== "ORG_ADMIN"){
    return res.status(403).json({
        message : "Access Denied"
    });
  }
  return next();
};
module.exports = {isSuperAdmin,isOrgAdmin};