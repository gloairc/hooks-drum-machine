const mongoose = require("mongoose");

const beatArraySchema = new mongoose.Schema({
  instrument: {
    type: mongoose.Types.ObjectId,
    required: false, // change back to true if needed
    ref: "Instrument",
  },
  name: { type: String, required: false },
  beatRow: [{ type: Number, required: false }],
  // beatRow: { type: Array, required: false, default: defaultGrid },
  // beatRow: defaultGrid,
  // beatRow: [{ type: Boolean, required: false, default: false }],
  // beatRow: { type: Array, required: false, default: defaultGrid },
});

module.exports = beatArraySchema;
