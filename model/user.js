const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/Chatbox")
  .then(() => console.log("mongo Connected"))
  .catch(() => console.log("Not connected mongo"));
const userDetail = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});
const userModel = mongoose.model("msg", userDetail);
module.exports = userModel;
