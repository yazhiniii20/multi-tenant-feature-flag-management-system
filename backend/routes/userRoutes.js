const express = require("express");
const router = express.Router();
const {verifyJwt} = require("../middleware/authMiddleware.js");
const {isSuperAdmin} = require("../middleware/roleMiddleware.js");
const {createOrgAdmin} = require("../controllers/userController.js");

router.post("/",verifyJwt,isSuperAdmin,createOrgAdmin);

module.exports = router;