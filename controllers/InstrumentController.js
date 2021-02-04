const express = require("express");
const router = express.Router();
const Instrument = require("../models/instrument");
const methodOverride = require("method-override");
router.use(methodOverride("_method"));

router.get("/seed", (req, res) => {
  Instrument.create(
    [
      {
        name: "kick",
        soundFile: "http://kick-sound.url",
        picture: "http://somepic.url/kick.jpg",
      },
      {
        name: "snare",
        soundFile: "http://snare-sound.url",
        picture: "http://somepic.url/snare.jpg",
      },
      {
        name: "crash",
        soundFile: "http://crash-sound.url",
        picture: "http://somepic.url/crash.jpg",
      },
      {
        name: "clap",
        soundFile: "http://clap-sound.url",
        picture: "http://somepic.url/clap.jpg",
      },
    ],
    (error, instrument) => {
      res.redirect("/instrument");
    }
  );
});

router.get("/", (req, res) => {
  //index, get all
  Instrument.find({}, (error, instrument) => {
    res.send(instrument);
  });
  console.log("get all instruments");
});

router.get("/:id", (req, res) => {
  //show one instrument
  Instrument.findById(req.params.id, (error, instrument) => {
    res.send(instrument);
    return instrument;
  });
  console.log("get all instruments");
});

module.exports = router;
