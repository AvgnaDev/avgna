const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema(
  {
    about: {
      type: String,
      required: true,
      trim: true,
    },
    experiance: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("about_Schema", aboutSchema);
