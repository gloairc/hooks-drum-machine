const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { body, validationResult } = require("express-validator");
const methodOverride = require("method-override");
router.use(methodOverride("_method"));
const { StatusCodes } = require("http-status-codes");
const modelDefaults = require("../models/modelDefaults");

// SEEDING
router.get("/seed", (req, res) => {
  console.log("seeding");
  User.create(modelDefaults.userSeed, (error, user) => {
    if (error) {
      console.log(error);
      return res.send({ ...error, message: "likely user already exist" });
    }
    console.log("users", user);
    res.redirect("/api/user");
  });
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

router.post(
  "/",
  body("name", "Please enter your name").trim().notEmpty(),
  body("email", "Please enter a valid email address").isEmail(),
  body(
    "username",
    "Username has to be at least 8 alphanumeric characters long."
  )
    .trim()
    .isLength({ min: 8 }),
  body(
    "password",
    "Password has to be at least 8 alphanumeric characters long."
  )
    .trim()
    .isLength({ min: 8 })
    .isAlphanumeric(),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Errors returned in an array `errors.array()`.
      const locals = { UserInput: req.body, errors: errors.array() };
      res.status(StatusCodes.BAD_REQUEST).send(locals);
    } else {
      //Data is valid
      console.log(req.body);
      //overwrite the user password with the hashed password, then pass that in to our database
      req.body.password = bcrypt.hashSync(
        req.body.password,
        bcrypt.genSaltSync()
      );

      //create new user
      User.create(req.body, (error, user) => {
        if (error) {
          res.send(error);
        } else {
          res.send("submitted!");
          console.log("submitted");
          return user;
        }
      });

      // User.create(req.body, (err, createdUser) => {
      //   if (err) {
      //     res.status(StatusCodes.BAD_REQUEST).send(err);
      //   } else {
      //     console.log("user is created");
      //     req.session.currentUser = createdUser;
      //     //req.session creates a session, we are also creating a field called currentUser = createdUser
      //     res.status(StatusCodes.CREATED).send(createdUser);
      //   }
      // });
    }
  }
);

//edit account
router.put(
  "/:id",
  body("name", "Please enter your name").optional().trim().notEmpty(),
  body("email", "Please enter a valid email address").optional().isEmail(),
  body(
    "username",
    "Username has to be at least 8 alphanumeric characters long."
  )
    .optional()
    .trim()
    .isLength({ min: 8 }),
  body(
    "password",
    "Password has to be at least 8 alphanumeric characters long."
  )
    .optional()
    .trim()
    .isLength({ min: 8 })
    .isAlphanumeric(),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Errors returned in an array `errors.array()`.
      const locals = { UserInput: req.body, errors: errors.array() };
      res.status(StatusCodes.BAD_REQUEST).send(locals);
    } else {
      // when user update account page
      if (req.body.password && req.body.password !== "") {
        //user changes password
        req.body.password = bcrypt.hashSync(
          req.body.password,
          bcrypt.genSaltSync()
        );
      } else if (req.body.password === "") {
        // users didnt change password, remove the field "password"
        delete req.body.password;
      }
      User.findByIdAndUpdate(
        req.params.id, // id
        req.body, // what to update
        { new: true },
        (error, updatedUser) => {
          if (error) {
            res.status(StatusCodes.BAD_REQUEST).send(error);
          } else {
            res.status(StatusCodes.OK).send(updatedUser);
          }
        }
      );
    }
  }
);

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
