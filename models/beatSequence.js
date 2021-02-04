const mongoose = require("mongoose");
const beatArraySchema = require("./beatArray");

const beatSequenceSchema = new mongoose.Schema(
  {
    // userId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: "User",
    // },
    username: { type: String, required: true },
    name: { type: String, required: true },
    tempo: { type: Number, required: true },
    beatGrid: [beatArraySchema],
    status: { type: String, default: "Active", enum: ["Active", "Inactive"] },
  },
  { timestamps: true }
);

const BeatSequence = mongoose.model("BeatSequence", beatSequenceSchema);

module.exports = BeatSequence;
