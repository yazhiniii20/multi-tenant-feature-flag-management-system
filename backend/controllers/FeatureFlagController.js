const FeatureFlag = require("../models/FeatureFlag");

const createFeatureflag = async(req,res) => {
    try{
       const{name,description,enabled} = req.body;

       if(!name || !description){
        return res.status(400).json({
            message : "All fields are required"
        });
       }      

       const organization = req.user.organization;
       const existingFeature = await FeatureFlag.findOne({name,organization});
       if(existingFeature){
        return res.status(409).json({
            message : "Feature already exists"
        });
       }
       const feature = await FeatureFlag.create({name,description,enabled,organization});

       return res.status(201).json({
        message : "Feature created successfully !",
        feature,
       })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            message : "Internal Server Error"
        });
    }
};

const getFeatureflag = async(req,res) => {
    try{
        const organization = req.user.organization;
        const features = await FeatureFlag.find({organization}).populate("organization");
        return res.status(200).json({
            message : "Features fetched successfully",
            features
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            message : "Internal Server Error"
        });
    }
};

const checkFeatureFlag = async(req,res) =>{
    try{
       const {name} = req.params;
       const organization = req.user.organization;
       const feature = await FeatureFlag.findOne({name,organization});
       if(!feature){
        return res.status(404).json({
            message : "Feature not found"
        });
       }
       return res.status(200).json({
        message : "Features fetched successfully!",
        feature : feature.name,
        enabled : feature.enabled
       });
    }catch(error){
      console.log(error);
      return res.status(500).json({
        message : "Internal Server Error"
      });
    }
};

module.exports = {createFeatureflag,getFeatureflag,checkFeatureFlag};