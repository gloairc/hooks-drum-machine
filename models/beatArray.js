const mongoose = require("mongoose");

const beatArraySchema = new mongoose.Schema({
  instrument: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Instrument",
  },
  beatRow: [{ type: Boolean, required: false, default: false }],
});

// const BeatGrid = mongoose.model("Batch", beatGridSchema);

module.exports = beatArraySchema;
