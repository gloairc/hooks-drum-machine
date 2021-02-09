const bcrypt = require("bcrypt");
const express = require("express");
const jwtSession = express.Router();
const createJWTToken = require("../config/jwt");
const User = require("../models/user.js");
const { StatusCodes } = require("http-status-codes");

// jwtSession.get("/", (req, res) => {
//   if (req.session.currentUser) {
//     // if session exists
//     res.status(StatusCodes.OK).send("Session found. User is logged in!");
//   } else {
//     res
//       .status(StatusCodes.FORBIDDEN)
//       .send({ error: "You are not authorized to view this page." });
//   }
// });

// sessions.get("/", (req, res) => { //if equals to sessionsStorage
//   if (req.session.currentUser._id === req.body.userId) {
//     res.status(StatusCodes.OK).send("Session found. User is logged in!");
//   } else {
//     res.status(StatusCodes.FORBIDDEN).send({ error: "You are not authorized to view this page." });
//   }
// });

//TO ADD ON, if user is inactive/deleted, should not be able to log in
// POST on log-in /session

//login
jwtSession.post("/", async (req, res, next) => {
  try {
    // let currentSessionUser;
    // const { username, password } = req.body;
    const userLogin = await User.findOne(
      { username: req.body.username },
      (err, foundUser) => {
        if (err) {
          console.log(err);
          res
            .status(500)
            .send({ error: "Oops there's a problem with the server database" });
        } else if (!foundUser) {
          // res.status(401).send({ error: "Sorry, no user found" });
          res.status(401).send({ error: `Sorry, no user found` });
        }
      }
    );
    const result = await bcrypt.compare(req.body.password, userLogin.password);

    if (!result) {
      console.log("result", result)
      throw new Error("Login failed");
    }

    //create token
    const token = createJWTToken(userLogin);
    // req.session.currentUser = foundUser;

    //set expiry for token
    const oneDay = 24 * 60 * 60 * 1000;
    const oneWeek = oneDay * 7;
    const expiryDate = new Date(Date.now() + oneWeek);

    res.cookie("token", token, {
      expires: expiryDate,
      httpOnly: true, // client-side js cannot access cookie info
      secure: true, // use HTTPS
    });
    res.json({ token });
    res.send("You are now logged in!");
  } catch (err) {
    if (err.message === "Login failed") {
      err.statusCode = 400;
    }
    next(err);
  }
});

//logout
jwtSession.post("/logout", (req, res) => {
  res.clearCookie("token").send("You are now logged out!");
  res.status(StatusCodes.OK).send({ msg: "Logging out" });
});

module.exports = jwtSession;
