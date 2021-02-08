const express = require("express");
const router = express.Router();
const Instrument = require("../models/instrument");

const defaultGrid = Array(16).fill(0);
// // const getInstruments = async () => {
// //   let instrArray = [];
// //   await Instrument.find({}, (error, instruments) => {
// //     // console.log(instruments);
// //     instrArray = instruments.map((instrument) => {
// //       return {
// //         id: instrument.id,
// //         name: instrument.name,
// //         beatRow: defaultGrid,
// //       };
// //     });
// //   });
// //   //   console.log(instrArray);
// //   return instrArray;
// // };

// // const instrumentArray = getInstruments();
// // console.log(instrumentArray[1]);
// // console.log(getInstruments().mongooseCollection.name);

// const defaultBeat = [
//   {
//     // instrument: instrumentArray[0]._id, //how does it know the ids?
//     // instrument: "601b73cfcb84de34a9b825c5",
//     name: "Kick",
//     beatRow: defaultGrid,
//   },
//   {
//     // instrument: instrumentArray[1].name,
//     // instrument: "601b73cfcb84de34a9b825c7",
//     name: "Sub1",
//     beatRow: defaultGrid,
//   },
//   {
//     name: "Sub2",
//     beatRow: defaultGrid,
//   },
//   {
//     name: "Snare",
//     beatRow: defaultGrid,
//   },
//   {
//     name: "Clap",
//     beatRow: defaultGrid,
//   },
//   {
//     name: "HiHat",
//     beatRow: defaultGrid,
//   },
//   {
//     name: "OpenHiHat",
//     beatRow: defaultGrid,
//   },
// ];
<<<<<<< HEAD

const userSeed = [
  {
    name: "Allo",
    email: "some@email.com",
    username: "user0",
    password: "aaaa1111",
    savedBeats: [],
    status: "Active",
  },
  {
    name: "BAllo",
    email: "do@email.com",
    username: "user1",
    password: "aaaa1111",
    savedBeats: [],
    status: "Active",
  },
  {
    name: "CAllo",
    email: "qwe@email.com",
    username: "user2",
    password: "aaaa1111",
    savedBeats: [],
    status: "Active",
  },
  {
    name: "DAllo",
    email: "tyu@email.com",
    username: "user3",
    password: "aaaa1111",
    savedBeats: [],
    status: "Active",
  },
];

const defaultBeat = {
  Kick: defaultGrid,
  Sub1: defaultGrid,
  Sub2: defaultGrid,
  Snare: defaultGrid,
  Clap: defaultGrid,
  HiHat: defaultGrid,
  OpenHiHat: defaultGrid,
};

// const defaultBeat = instrumentArray;
// console.log("here");
// console.log(instrumentArray);
=======

// // const defaultBeat = instrumentArray;
// // console.log("here");
// // console.log(instrumentArray);

const defaultBeat = {
  "Kick": defaultGrid,
  "Sub1": defaultGrid,
  "Sub2": defaultGrid,
  "Snare": defaultGrid,
  "Clap": defaultGrid,
  "HiHat": defaultGrid,
  "OpenHiHat": defaultGrid,
};
>>>>>>> 195d5739040e1f7a2f75b895eb70a66ea7cdee35

const modelDefaults = {
  sequence: defaultBeat,
  userSeed: userSeed,
};

module.exports = modelDefaults;
