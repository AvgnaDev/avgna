const OURTEAM = require("../../schema/OUR_TEAM/ourTeam");

// POST --> OUR TEAM
const postOurTeam = async (req, res) => {
  try {
    let {
      name,
      role,
      image,
      facebookUrl,
      instagramUrl,
      twitterUrl,
      linkedinUrl,
      description,
    } = req.body;
    const newOurTeam = new OURTEAM({
      name,
      role,
      image,
      facebookUrl,
      instagramUrl,
      twitterUrl,
      linkedinUrl,
      description,
    });
    const result = await newOurTeam.save();
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({ Error: err });
  }
};

// GET --> ALL OUR TEAM MEMBERS
const getTeamMember = async (req, res) => {
  try {
    let allTeamMember = await OURTEAM.find({});
    res.status(200).send(allTeamMember);
  } catch (err) {
    res.status(400).send({ message: "Something went wrong" });
  }
};

// GET DATA BASED UPON ID --> TEAM MEMBER
const getDataById = async (req, res) => {
  try {
    let teamId = req.params._id;
    let result = await OURTEAM.findById({ _id: teamId });
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({ message: err });
  }
};

// PUT OR UPDATE --> OUR TEAM MEMBER
const updateTeamMember = async (req, res) => {
  try {
    let teamId = req.params._id;
    await OURTEAM.updateOne({ _id: teamId }, { $set: req.body });
    res.status(200).send({ message: "Update successfully" });
  } catch (err) {
    res.status(400).send({ message: "something went wrong" });
  }
};

// DELETE --> TEAM MEMBER
const deleteTeamMember = async (req, res) => {
  try {
    let teamId = req.params._id;
    await OURTEAM.deleteOne({ _id: teamId });
    res.status(200).send({ message: "delete successfully" });
  } catch (err) {
    res.status(400).send({ message: "something went wrong" });
  }
};

module.exports = {
  postOurTeam: postOurTeam,
  getDataById: getDataById,
  getTeamMember: getTeamMember,
  updateTeamMember: updateTeamMember,
  deleteTeamMember: deleteTeamMember,
};
