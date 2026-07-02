const mongoose = require("mongoose");

const featureFlagSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    description : {
        type : String,
        required : true,
        trim : true
    },
    enabled : {
        type : Boolean,
        required : true,
        default : false
    },
    organization : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "Organization"
    }
},{
    timestamps : true
});

module.exports = mongoose.model("FeatureFlag",featureFlagSchema);