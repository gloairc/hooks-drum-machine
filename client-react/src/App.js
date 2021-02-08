import { React, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
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
import Info from "./pages/Info";
import NavBar from "./component/NavBar";

function App() {
  const [loggedIn, setLoggedIn] = useState();
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [username, setUsername] = useState(localStorage.getItem("username"));

  useEffect(() => {
    console.log("App useEffect");
    setUserId(localStorage.getItem("userId"));
    setUsername(localStorage.getItem("username"));
  }, [loggedIn]);

  return (
    <div>
      {/* <NavBar loggedIn={loggedIn} /> */}
      <NavBar loggedIn={loggedIn} />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route exact path="/restricted">
                        <h1>You are not authorised to visit this page.</h1>
                    </Route> */}
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
            <Login setLoggedIn={setLoggedIn} />
          </Route>
          <Route exact path="/user/new">
            <SignUp setLoggedIn={setLoggedIn} />
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
            {userId ? (
              <DeleteAccount setLoggedIn={setLoggedIn} />
            ) : (
                <Redirect to={"/login"} />
              )}
          </Route>
          <Route exact path="/logout">
            <Logout setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
          </Route>
          <Route exact path="/info">
            <Info />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
