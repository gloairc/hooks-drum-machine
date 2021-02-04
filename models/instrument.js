const mongoose = require("mongoose");

const instrumentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    soundFile: { type: String, required: true },
    picture: { type: String, required: true },
  },
  { timestamps: true }
);

const Instrument = mongoose.model("Instrument", instrumentSchema);

module.exports = Instrument;
