const User = require("../../schema/LOGIN/login");

// GET -- ADMIN LIST
const getAdminList = async (req, res) => {
  try {
    const adminList = await User.find();
    res.status(200).send(adminList);
  } catch (err) {
    res.status(404).send({ message: "something went wrong" });
  }
};

// POST --> ADMIN REGISTRATION
const insertUser = async (req, res) => {
  try {
    let { email, password } = req.body;
    const newUser = new User({
      email: email,
      password: password,
    });
    let userList = await User.findOne({ email: email });
    if (userList) {
      res.status(200).send({ message: "Email address is already exist" });
    } else if (newUser.email.length == "") {
      res.status(200).send({ message: "Email Required" });
    } else if (newUser.password.length == "") {
      res.status(200).send({ message: "Password Required" });
    } else {
      const result = await newUser.save();
      res.status(200).send(result);
    }
  } catch (err) {
    res.status(404).send(err);
  }
};

// POST --> LOGIN
const loginAdmin = async (req, res) => {
  try {
    let { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({ message: "Required Credentials" });
    }
    const findAdmin = await User.findOne({ email: email });
    if (findAdmin) {
      if (findAdmin.password === password) {
        return res.status(200).send({ message: "Login Sucessfully" });
      } else {
        return res
          .status(400)
          .send({ message: "Username and Password Invalid" });
      }
    } else {
      return res.status(400).send({ message: "Oops! you're not Admin" });
    }
  } catch (err) {
    res.status(404).send({ message: "Invalid username and password" });
  }
};

// UPDATE --> ADMIN LIST
const updateAdminList = async (req, res) => {
  try {
    let adminId = req.params._id;
    await User.updateOne({ _id: adminId }, { $set: req.body });
    res.status(200).send({ message: "updated successfully" });
  } catch (err) {
    res.status(400).send({ message: "something went wrong" });
  }
};

// DELETE --> ADMIN LIST
const deleteAdminList = async (req, res) => {
  try {
    let adminId = req.params._id;
    await User.deleteOne({ _id: adminId });
    res.status(200).send({ message: "deleted successfully" });
  } catch (err) {
    res.status(400).send({ message: "something went wrong" });
  }
};

module.exports = {
  getAdminList: getAdminList,
  insertUser: insertUser,
  loginAdmin: loginAdmin,
  updateAdminList: updateAdminList,
  deleteAdminList: deleteAdminList,
};
