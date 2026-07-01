const Organization = require("../models/Organization.js");

const createOrganization = async (req,res) => {
    try{
    const {name} = req.body;
    const organization = await Organization.create({name,});

    res.status(201).json({
        message : "Organization created sucessfully !",
        organization,
    });
    
    }catch(error){

        if(error.code === 11000){
            return res.status(409).json({
                message : "Organization already exists !"
            });
        }

        console.error(error);

        res.status(500).json({
            message : "Interval server error"
        });
    }
};

const getOrganizations = async (req, res) => {
    try {
        const organizations = await Organization.find();

        return res.status(200).json({
            message: "Organizations fetched successfully.",
            organizations,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};

module.exports = {createOrganization,getOrganizations};