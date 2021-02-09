import { React, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import BeatSeq from "./pages/BeatSeq";
import BeatSeqTeaser from "./pages/BeatSeqTeaser";
import Login from "./pages/account/Login";
import SignUp from "./pages/account/SignUp";
import AccountView from "./pages/account/AccountView";
import AccountEdit from "./pages/account/AccountEdit";
import PasswordEdit from "./pages/account/PasswordEdit";
import Logout from "./pages/account/Logout";
import DeleteAccount from "./pages/account/DeleteAccount";
import Help from "./pages/Help";
import NavBar from "./component/NavBar";
const jwt = require("jsonwebtoken");

function App() {
  const [user, setUser] = useState({});
  // const [token, setToken] = useState("")
  console.log("user at App", user);

  // useEffect(() => {
  //   if (token !== "") {
  //     const decoded = jwt.verify(token, "sei-26");//cant read secret :/
  //     setUser({ userId: decoded.user._id, username: decoded.user.username })
  //     console.log("user after setItem", user)
  //   }
  // }, [token]) //run once when token changes from "" to "xxx"

  return (
    <div>
      <Router>
        <NavBar user={user} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/restricted">
            <h1>You are not authorised to visit this page.</h1>
          </Route>
          <Route exact path="/beatseq">
            <BeatSeq />
          </Route>
          <Route path="/beatseq/:id">
            <BeatSeq />
          </Route>
          <Route exact path="/teaser">
            <BeatSeqTeaser />
          </Route>
          <Route exact path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route exact path="/user/new">
            <SignUp setUser={setUser} />
          </Route>
          <Route exact path="/user/:id">
            {/* {userId ? <AccountView /> : <Redirect to={"/login"} />} */}
            <AccountView />
          </Route>
          <Route exact path="/user/:id/edit">
            <AccountEdit />
          </Route>
          <Route exact path="/user/:id/changepassword">
            {/* {userId ? <PasswordEdit /> : <Redirect to={"/login"} />} */}
            <PasswordEdit />
          </Route>
          <Route exact path="/user/:id/delete">
            {/* {userId ? (
              <DeleteAccount setLoggedIn={setLoggedIn} />
            ) : (
                <Redirect to={"/login"} />
              )} */}

            <DeleteAccount user={user} setUser={setUser} />
          </Route>
          <Route exact path="/logout">
            <Logout setUser={setUser} />
          </Route>
          <Route exact path="/help">
            <Help />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
