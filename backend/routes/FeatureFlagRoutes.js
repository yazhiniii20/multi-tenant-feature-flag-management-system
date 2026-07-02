const express = require("express");
const router = express.Router();
const {verifyJwt} = require("../middleware/authMiddleware");
const {isOrgAdmin} = require("../middleware/roleMiddleware");
const {createFeatureflag,getFeatureflag,checkFeatureFlag} = require("../controllers/FeatureFlagController");

router.post("/",verifyJwt,isOrgAdmin,createFeatureflag);
router.get("/",verifyJwt,isOrgAdmin,getFeatureflag);
router.get("/check/:name",verifyJwt,checkFeatureFlag);

module.exports = router;