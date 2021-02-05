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

router.get("/:id", (req, res) => {
  //show one instrument
  BeatSequence.find(
    { _id: req.params.id, status: "Active" },
    (error, sequence) => {
      res.send(sequence);
      return sequence;
    }
  );
  console.log("get one sequences");
});

// router.get("/:userId", (req, res) => {
//   // when userController is ready, use this instead of username
//   //show one instrument
//   BeatSequence.findById(req.params.userId, (error, sequence) => {
//     res.send(sequence);
//     return sequence;
//   });
//   console.log("get user's sequences");
// });

router.get("/:username", (req, res) => {
  //show one instrument
  BeatSequence.find(
    { username: req.params.username, status: "Active" },
    (error, sequence) => {
      res.send(sequence);
      return sequence;
    }
  );
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

router.put("/:id/sdelete", (req, res) => {
  BeatSequence.findById(req.params.id, (err, sequence) => {
    if (err) {
      res.send(err);
      console.log("error occurred " + err);
    } else {
      sequence.status = "Inactive";
      sequence.save((er) => {
        if (er) {
          res.send(er);
        } else {
          res.send(sequence);
        }
      });
      console.log("soft delete");
    }
  });
});

router.put("/:id/edit", (req, res) => {
  // const newSeq = req.body.newSeq;
  const newDummySeq = [
    {
      instrument: "601b73cfcb84de34a9b825c5",
      beatRow: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    },
    {
      instrument: "601b73cfcb84de34a9b825c7",
      beatRow: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
    },
    {
      instrument: "601b73cfcb84de34a9b825c8",
      beatRow: [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
    },
  ];
  BeatSequence.findById(req.params.id, (err, sequence) => {
    if (err) {
      res.send(err);
      console.log("error occurred " + err);
    } else {
      sequence.beatGrid = newDummySeq;
      sequence.save((er) => {
        if (er) {
          res.send(er);
        } else {
          res.send(sequence);
        }
      });
      console.log("edit sequence");
    }
  });
});

module.exports = router;
