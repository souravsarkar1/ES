let express = require("express");
const { userModel } = require("../models/user.model");

let userRouter = express.Router();

userRouter.post("/add", async (req, res) => {
  const { name, role, email, phoneNumber } = req.body;
  try {
    let data = new userModel({ name, role, email, phoneNumber });

    await data.save();
    res.status(200).send({ message: "new user is added to db" });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

userRouter.get("/getData", async (req, res) => {
  try {
    let data = await userModel.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
userRouter.get("/getData/:id", async (req, res) => {
  const { id } = req.params;

  try {
    let data = await userModel.findOne({ _id: id });
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

userRouter.delete("/deleteData/:id", async (req, res) => {
  const { id } = req.params;
  const payload = req.body;

  try {
    await userModel.findByIdAndDelete({ _id: id }, payload);
    res.status(200).send({ message: "user data is deleted successfully" });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

userRouter.put("/updateData/:id", async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  try {
    await userModel.findByIdAndUpdate({ _id: id }, payload);
    res.status(200).send({ message: "user data is updated successfully" });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = { userRouter };
