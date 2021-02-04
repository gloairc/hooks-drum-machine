const mongoose = require("mongoose");

const beatArraySchema = new mongoose.Schema({
  instrument: {
    type: mongoose.Types.ObjectId,
    required: false, // change back to true if needed
    ref: "Instrument",
  },
  beatRow: [{ type: Boolean, required: false, default: false }],
});

// const BeatGrid = mongoose.model("Batch", beatGridSchema);

module.exports = beatArraySchema;

// const seed = {
//   instrument: "601b73cfcb84de34a9b825c5",
//   beatRow:[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
// }
