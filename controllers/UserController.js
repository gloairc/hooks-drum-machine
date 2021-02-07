const express = require("express");
const router = express.Router();
const User = require("../models/user");
const methodOverride = require("method-override");
router.use(methodOverride("_method"));
const { StatusCodes } = require("http-status-codes");

// SEEDING
router.get("/seed", (req, res) => {
  console.log("seeding");
  User.create(
    [
      {
        name: "Allo",
        email: "some@email.com",
        username: "user0",
        password: "aaaa1111",
        savedBeats: ["601d663a66153426d0518e7f"],
        status: "Active",
      },
      {
        name: "BAllo",
        email: "do@email.com",
        username: "user1",
        password: "aaaa1111",
        savedBeats: ["601eabb832cd5183fc161ae1", "601f6f1f5bdcaa491c77197b", "601f9ccb6dd05c8158925635", "601d663a66153426d0518e80"],
        status: "Active",
      },
      {
        name: "CAllo",
        email: "qwe@email.com",
        username: "user2",
        password: "12345678",
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
    ],
    (error, user) => {
      if (error) {
        console.log(error);
        return res.send({ ...error, message: "likely user already exist" });
      }
      console.log("users", user);
      res.redirect("/api/user");
    }
  );
});

// INDEX (show all users - admin access only)
router.get("/", (req, res) => {
  User.find({}, (error, users) => {
    if (error) {
      res.send(error);
    } else {
      res.send(users);
    }
  });
});

// router.get("/:id", (req, res) => {
//   //if there is a query, check if it exist
//   //   console.log("req.query.username", req.query.username);
//   User.findById(req.params.id, (error, oneUser) => {
//     if (error) {
//       res.status(StatusCodes.BAD_REQUEST).send(error);
//     } else {
//       //user exist
//       res.status(StatusCodes.OK).send(oneUser);
//     }
//   });
// });

router.get("/:id", (req, res) => {
  User.findById(req.params.id, (error, oneUser) => {
    if (error) {
      res.send(error);
    } else {
      //user exist
      res.send(oneUser);
    }
  });
});

router.post("/", (req, res) => {
  //create new user
  User.create(req.body, (error, user) => {
    if (error) {
      res.send(error);
    } else {
      res.send(req.body);
      console.log("submitted");
      return user;
    }
  });
});

router.put("/:id", (req, res) => {
  //edit account
  User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (error, updatedUser) => {
      if (error) {
        res.send(error);
      } else {
        res.send(updatedUser);
      }
    }
  );
});

router.put("/:id/sdelete", (req, res) => {
  //softdelete
  User.findById(req.params.id, (err, user) => {
    if (err) {
      res.send(err);
      console.log("error occurred " + err);
    } else {
      user.status = "Inactive";
      user.save((er) => {
        if (er) {
          res.send(er);
        } else {
          res.send(user);
        }
      });
      console.log("soft delete");
    }
  });
});

module.exports = router;
