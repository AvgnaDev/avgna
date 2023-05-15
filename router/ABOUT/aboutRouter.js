const aboutController = require("../../controller/ABOUT/aboutController");
const aboutRoute = require("express").Router();

aboutRoute.get("/about", aboutController.getAboutContent);
aboutRoute.get("/about/:_id", aboutController.getAboutContentById);
aboutRoute.post("/about", aboutController.postAboutContent);
aboutRoute.put("/about/:_id", aboutController.updateAboutContent);
aboutRoute.delete("/about/:_id", aboutController.deleteAboutContent);
module.exports = aboutRoute;
