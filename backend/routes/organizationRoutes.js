const express = require("express");
const router = express.Router();
const {createOrganization,getOrganizations} = require("../controllers/organizationController.js");
const {verifyJwt} = require("../middleware/authMiddleware.js");
const {isSuperAdmin} = require("../middleware/roleMiddleware.js");

router.post("/",verifyJwt,isSuperAdmin,createOrganization);
router.get("/",verifyJwt,isSuperAdmin,getOrganizations);

module.exports = router;