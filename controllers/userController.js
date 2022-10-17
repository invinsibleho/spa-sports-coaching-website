const expressAsyncHandler = require("express-async-handler");
const User = require("../models/users.js");

const addUser = expressAsyncHandler(async (req, res) => {
  const {
    name,
    email,
    password,
    pic,
    phone,
    classType,
    level,
    preferedChoice,
  } = req.body;
  console.log(req.body);
  //Create the user
  const user = await User.create({
    name,
    email,
    password,
    pic,
    phone,
    classType,
    level,
    preferedChoice,
  });
  res.json(user);
});
module.exports = { addUser };
