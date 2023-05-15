const userController = require("../../controller/LOGIN/loginController");
const userRoute = require("express").Router();

userRoute.get("/admin", userController.getAdminList);
userRoute.post("/register", userController.insertUser);
userRoute.post("/login", userController.loginAdmin);
userRoute.put("/update/:_id", userController.updateAdminList);
userRoute.delete("/delete/:_id", userController.deleteAdminList);
module.exports = userRoute;
