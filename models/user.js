const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true, unique: true, minlength: 8 },
    password: { type: String, required: true },
    savedBeats: [{ type: mongoose.Schema.Types.ObjectId, ref: "BeatSequence" }],
    status: { type: String, default: "Active", enum: ["Active", "Inactive"] },
    imgFile: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
