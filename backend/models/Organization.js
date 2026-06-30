const mongoose = require("mongoose");
const organizationSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true,
        unique : true
    }
},{
    timestamps : true,
});
module.exports = mongoose.model("Organization",organizationSchema);