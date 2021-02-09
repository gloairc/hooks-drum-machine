const express = require("express");
const router = express.Router();
const BeatSequence = require("../models/beatSequence");
const Instrument = require("../models/instrument");
const methodOverride = require("method-override");
const beatSequenceDummy2 = require("../dummyData2.js");
router.use(methodOverride("_method"));

router.get("/seed", (req, res) => {
  BeatSequence.create(beatSequenceDummy2, (error, instrument) => {
    if (error) {
      res.send(error);
    } else {
      console.log(beatSequenceDummy2);
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
  //getting one sequence
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

router.get("/user/:userId", (req, res) => {
  // get all sequences by user's id
  BeatSequence.find(
    { userId: req.params.userId, status: "Active" },
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
      res.send(sequence);
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
  const newSeq = req.body;
  // dummy data below for testing
  // const newDummySeq = [
  //   {
  //     instrument: "601b73cfcb84de34a9b825c5",
  //     beatRow: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  //   },
  //   {
  //     instrument: "601b73cfcb84de34a9b825c7",
  //     beatRow: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
  //   },
  //   {
  //     instrument: "601b73cfcb84de34a9b825c8",
  //     beatRow: [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
  //   },
  // ];
  BeatSequence.findById(req.params.id, (err, sequence) => {
    if (err) {
      res.send(err);
      console.log("error occurred " + err);
    } else {
      sequence.beatGrid = newSeq.beatGrid;
      sequence.name = newSeq.name;
      sequence.tempo = newSeq.tempo;
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

// router.get("/user/:username", (req, res) => {
//   //to search using UserController instead
//   BeatSequence.find(
//     { username: req.params.username, status: "Active" },
//     // { username: req.params.username, status: "Active" }, //check if user is active? but not needed because non-active user wont be able to log in
//     (error, sequence) => {
//       res.send(sequence);
//       return sequence;
//     }
//   );
//   console.log("get user's sequences");
// });

// router.post("/", (req, res) => {
//   //create new beatSequence
//   // let newId;
//   BeatSequence.create(req.body, (error, sequence) => {
//     if (error) {
//       res.send(error);
//     } else {
//       res.send("submitted! " + sequence);
//       console.log("submitted");
//       console.log(sequence);
//       return sequence;
//     }
//   });

//   // let instrArr = [];
//   Instrument.find({}, (err, instrAll) => {
//     const instrArr = instrAll.map((instr) => {
//       console.log("one here");
//       console.log(instr);
//       return instr._id;
//       // instrArr.push[instr._id];
//     });
//     console.log("all here");
//     console.log(instrArr);

//   });
//   // console.log("all here2");
//   // console.log(instrArr);
//   // BeatSequence.find
// });