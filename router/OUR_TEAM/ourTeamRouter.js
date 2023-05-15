const teamController = require("../../controller/OUR_TEAM/ourTeamController");
const teamRouter = require("express").Router();

teamRouter.post("/team", teamController.postOurTeam);
teamRouter.get("/team", teamController.getTeamMember);
teamRouter.get("/team/:_id", teamController.getDataById);
teamRouter.put("/team/:_id", teamController.updateTeamMember);
teamRouter.delete("/team/:_id", teamController.deleteTeamMember);

module.exports = teamRouter;
