const beatSequenceDummy = [
  {
    username: "user0",
    name: "user0-beat0",
    tempo: 65,
    beatGrid: {
      Kick: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      Sub1: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      Sub2: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      Snare: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      Clap: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      HiHat: [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      OpenHiHat: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    },
    status: "Active",
  },
  {
    username: "user1",
    name: "user1",
    tempo: 65,
    beatGrid: {
      Kick: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      Sub1: [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
      Sub2: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      Snare: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      Clap: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      HiHat: [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      OpenHiHat: [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    },
    status: "Active",
  },
  {
    username: "user2",
    name: "user2",
    tempo: 500,
    beatGrid: {
      Kick: [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      Sub1: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      Sub2: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      Snare: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      Clap: [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      HiHat: [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      OpenHiHat: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    },
    status: "Active",
  },
  {
    username: "user1",
    name: "ublah",
    tempo: 10,
    beatGrid: {
      Kick: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      Sub1: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      Sub2: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      Snare: [1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      Clap: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      HiHat: [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      OpenHiHat: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    },
    status: "Active",
  },
  {
    username: "user0",
    name: "user0-beat1",
    tempo: 120,
    beatGrid: {
      Kick: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      Sub1: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      Sub2: [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      Snare: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      Clap: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      HiHat: [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      OpenHiHat: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    },
    status: "Active",
  },
];

module.exports = beatSequenceDummy;

// const beatSequenceDummy = [
//   {
//     username: "user0",
//     name: "user0-beat0",
//     tempo: 65,
//     beatGrid: [
//       {
//         instrument: "601b73cfcb84de34a9b825c5",
//         beatRow: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//       },
//       {
//         instrument: "601b73cfcb84de34a9b825c7",
//         beatRow: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//       },
//     ],
//     status: "Active",
//   },
//   {
//     username: "user1",
//     name: "user1",
//     tempo: 65,
//     beatGrid: [
//       {
//         instrument: "601b73cfcb84de34a9b825c5",
//         beatRow: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//       },
//       {
//         instrument: "601b73cfcb84de34a9b825c7",
//         beatRow: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//       },
//     ],
//     status: "Active",
//   },
//   {
//     username: "user2",
//     name: "user2",
//     tempo: 500,
//     beatGrid: [
//       {
//         instrument: "601b73cfcb84de34a9b825c5",
//         beatRow: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//       },
//       {
//         instrument: "601b73cfcb84de34a9b825c7",
//         beatRow: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//       },
//     ],
//     status: "Active",
//   },
//   {
//     username: "user1",
//     name: "ublah",
//     tempo: 10,
//     beatGrid: [
//       {
//         instrument: "601b73cfcb84de34a9b825c5",
//         beatRow: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//       },
//       {
//         instrument: "601b73cfcb84de34a9b825c7",
//         beatRow: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//       },
//     ],
//     status: "Active",
//   },
//   {
//     username: "user0",
//     name: "user0-beat1",
//     tempo: 120,
//     beatGrid: [
//       {
//         instrument: "601b73cfcb84de34a9b825c5",
//         beatRow: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//       },
//       {
//         instrument: "601b73cfcb84de34a9b825c7",
//         beatRow: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//       },
//     ],
//     status: "Active",
//   },
// ];

// module.exports = beatSequenceDummy;
