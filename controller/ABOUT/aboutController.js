const aboutSchema = require("../../schema/ABOUT/about");

// GET --> ABOUT CONTENT
const getAboutContent = async (req, res) => {
  try {
    const aboutContent = await aboutSchema.find({});
    res.status(200).send(aboutContent);
  } catch (err) {
    res.status(404).send(err);
  }
};

// GET DATA BASED UPON ID --> ABOUT CONTENT
const getAboutContentById = async (req, res) => {
  try {
    let contentId = req.params._id;
    const aboutContent = await aboutSchema.findById({ _id: contentId });
    res.status(200).send(aboutContent);
  } catch (err) {
    res.status(404).send(err);
  }
};

// POST --> ABOUT CONTENT
const postAboutContent = async (req, res) => {
  try {
    let { about, experiance } = req.body;
    const aboutContent = new aboutSchema({
      about: about,
      experiance: experiance,
    });
    const result = await aboutContent.save();
    res.status(200).send(result);
  } catch (err) {
    res.status(404).send(err);
  }
};

// UPDATE --> ABOUT CONTENT
const updateAboutContent = async (req, res) => {
  try {
    let contentId = req.params._id;
    await aboutSchema.updateOne({ _id: contentId }, { $set: req.body });
    res.status(200).send({ message: "updated successfully" });
  } catch (err) {
    res.status(400).send({ message: "something went wrong" });
  }
};

// DELETE --> ABOUT CONTENT
const deleteAboutContent = async (req, res) => {
  try {
    let contentId = req.params._id;
    await aboutSchema.deleteOne({ _id: contentId });
    res.status(200).send({ message: "deleted successfully" });
  } catch (err) {
    res.status(400).send({ message: "something went wrong" });
  }
};
module.exports = {
  getAboutContent: getAboutContent,
  getAboutContentById: getAboutContentById,
  postAboutContent: postAboutContent,
  updateAboutContent: updateAboutContent,
  deleteAboutContent: deleteAboutContent,
};
