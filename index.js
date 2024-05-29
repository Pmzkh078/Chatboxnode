const express = require("express");
const Getrouter = require("./routes/user");
const cors = require("cors");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/getuser", Getrouter);
app.get("/", (req, res) => {
  res.send("/getuser for user");
});

app.listen(4004, console.log("Server connected"));
