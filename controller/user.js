const userModel = require("../model/user");

async function getUser(req, res) {
  const data = await userModel.find();
  res.send(data);
}
function Insertuser(req, res) {
  const { name, message } = req.body;
  const newuser = new userModel({ name, message });
  newuser
    .save()
    .then(() => console.log("Data Inserted"), res.send("Data Inserted"))
    .catch(() => {
      console.log("error"), res.send("Data not Inserted");
    });
}

module.exports = {
  getUser,
  Insertuser,
};
