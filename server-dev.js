require("dotenv").config();
const path = require("path");
const express = require("express");
const methodOverride = require("method-override");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.json());

const session = require("express-session");
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const BeatSequenceController = require("./controllers/BeatSequenceController");
app.use("/api/beatsequence", BeatSequenceController);

const InstrumentController = require("./controllers/InstrumentController");
app.use("/api/instrument", InstrumentController);

const UserController = require("./controllers/UserController");
app.use("/api/user", UserController);

// const sessionController = require("./controllers/SessionController");
// app.use("/api/session", sessionController);

const jwtController = require("./controllers/JwtController");
app.use("/api/session", jwtController);

app.get("/", (req, res) => {
  res.send("test");
});

app.get("/api", (req, res) => {
  res.send("this is for api");
});

const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
