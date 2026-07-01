const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true
    },
    password : {
        type : String,
        required : true
    },
    role:{
        type : String,
        enum: ["ORG_ADMIN", "END_USER"],
        required : true
    },
    organization :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Organization"
    }
},{
    timestamps : true
});

module.exports = mongoose.model("User",userSchema);