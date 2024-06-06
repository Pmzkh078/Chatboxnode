const express = require("express");
const Getrouter = require("./routes/user");
const cors = require("cors");
const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors(corsOptions));

app.use("/getuser", Getrouter);
app.get("/", (req, res) => {
  res.send("/getuser for user");
});

app.listen(4004, console.log("Server connected"));
