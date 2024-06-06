const express = require("express");
const router = express.Router();
const { getUser, Insertuser, deleteUser } = require("../controller/user");
router.get("/", getUser);
router.post("/", Insertuser);
router.delete("/", deleteUser);
module.exports = router;
