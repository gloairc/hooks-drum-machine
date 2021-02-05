const mongoose = require("mongoose");
const beatArraySchema = require("./beatArray");

const beatSequenceSchema = new mongoose.Schema(
  {
    // userId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: "User",
    // },
    ////original
    // username: { type: String, required: true },
    // name: { type: String, required: true },
    // tempo: { type: Number, required: true },
    // beatGrid: [beatArraySchema],
    // status: { type: String, default: "Active", enum: ["Active", "Inactive"] },
    userId: { type: String, required: true },
    name: { type: String, required: true, default: "Untitled" },
    tempo: { type: Number, required: true, default: 65 },
    beatGrid: [beatArraySchema],
    status: { type: String, default: "Active", enum: ["Active", "Inactive"] },
  },
  { timestamps: true }
);

const BeatSequence = mongoose.model("BeatSequence", beatSequenceSchema);

module.exports = BeatSequence;
