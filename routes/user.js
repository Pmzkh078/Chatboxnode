const express = require("express");
const router = express.Router();
const { getUser, Insertuser } = require("../controller/user");
router.get("/", getUser);
router.post("/", Insertuser);
module.exports = router;
