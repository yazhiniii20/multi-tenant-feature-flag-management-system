const express = require("express");
const router = express.Router();
const {createOrganization} = require("../controllers/organizationController.js");

router.post("/",createOrganization);

module.exports = router;