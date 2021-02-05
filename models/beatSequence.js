const mongoose = require("mongoose");
const beatArraySchema = require("./beatArray");
const modelDefaults = require("./modelDefaults");

const beatSequenceSchema = new mongoose.Schema(
  {
    // userId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: "User",
    // },
    username: { type: String, required: true },
    name: { type: String, required: true, default: "untitled" },
    tempo: { type: Number, required: true, default: 65 },
    beatGrid: { type: Object, default: modelDefaults.sequence },
    status: { type: String, default: "Active", enum: ["Active", "Inactive"] },
  },
  { timestamps: true }
);

const BeatSequence = mongoose.model("BeatSequence", beatSequenceSchema);

module.exports = BeatSequence;
