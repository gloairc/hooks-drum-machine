const express = require("express");
const router = express.Router();
const BeatSequence = require("../models/beatSequence");
const methodOverride = require("method-override");
const beatSequenceDummy = require("../dummyData.js");
router.use(methodOverride("_method"));

router.get("/seed", (req, res) => {
  BeatSequence.create(beatSequenceDummy, (error, instrument) => {
    if (error) {
      res.send(error);
    } else {
      console.log(beatSequenceDummy);
      console.log(instrument);
      res.send(instrument);
    }

    // console.log(instrument);
    // res.redirect("/beatsequence");
  });
});

router.get("/", (req, res) => {
  //index, get all
  BeatSequence.find({}, (error, sequence) => {
    res.send(sequence);
  });
  console.log("get all sequences");
});

// router.get("/:userId", (req, res) => {   // when userController is ready, use this instead of username
//   //show one instrument
//   BeatSequence.findById(req.params.userId, (error, sequence) => {
//     res.send(sequence);
//     return sequence;
//   });
//   console.log("get user's sequences");
// });

router.get("/:username", (req, res) => {
  //show one instrument
  const usernameQuery = req.params.username;
  BeatSequence.findOne({ username: usernameQuery }, (error, sequence) => {
    res.send(sequence);
    return sequence;
  });
  console.log("get user's sequences");
});

router.post("/", (req, res) => {
  //create new beatSequence
  BeatSequence.create(req.body, (error, sequence) => {
    if (error) {
      res.send(error);
    } else {
      res.send("submitted!");
      console.log("submitted");
      return sequence;
    }
  });
});

module.exports = router;
