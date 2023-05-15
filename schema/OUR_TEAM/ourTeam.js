const mongoose = require("mongoose");

const teamMemberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    role: {
      type: String,
    },
    image: {
      type: String,
    },
    facebookUrl: {
      type: String,
    },
    instagramUrl: {
      type: String,
    },
    twitterUrl: {
      type: String,
    },
    linkedinUrl: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("team_Members_Schema", teamMemberSchema);
