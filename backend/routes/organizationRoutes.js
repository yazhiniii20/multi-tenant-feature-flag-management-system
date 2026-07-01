const express = require("express");
const router = express.Router();
const {createOrganization,getOrganizations} = require("../controllers/organizationController.js");
const {verifyJwt} = require("../middleware/authMiddleware.js");

router.post("/",verifyJwt,createOrganization);
router.get("/",verifyJwt,getOrganizations);

module.exports = router;