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
        name: "sub1",
        soundFile: "http://sub1-sound.url",
        picture: "http://somepic.url/sub1.jpg",
      },
      {
        name: "sub2",
        soundFile: "http://sub2-sound.url",
        picture: "http://somepic.url/sub2.jpg",
      },
      {
        name: "snare",
        soundFile: "http://snare-sound.url",
        picture: "http://somepic.url/snare.jpg",
      },
      {
        name: "clap",
        soundFile: "http://clap-sound.url",
        picture: "http://somepic.url/clap.jpg",
      },
      {
        name: "hiHat",
        soundFile: "http://hiHat-sound.url",
        picture: "http://somepic.url/hiHat.jpg",
      },
      {
        name: "openHiHat",
        soundFile: "http://openHiHat-sound.url",
        picture: "http://somepic.url/openHiHat.jpg",
      },
    ],
    (error, instrument) => {
      res.redirect("/api/instrument");
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
  //show one instrument from id
  Instrument.findById(req.params.id, (error, instrument) => {
    res.send(instrument);
    return instrument;
  });
  console.log("get one instrument");
});

router.get("/name/:name", (req, res) => {
  //show one instrument from name
  Instrument.find({ name: req.params.name }, (error, instrument) => {
    res.send(instrument);
    return instrument;
  });
  console.log("get one instrument by name");
});

module.exports = router;
