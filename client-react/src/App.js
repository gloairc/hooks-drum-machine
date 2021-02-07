import { React, useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Home from './pages/Home'
import BeatSeq from './pages/BeatSeq'
import BeatSeqTeaser from './pages/BeatSeqTeaser'
import Login from './pages/account/Login'
import SignUp from './pages/account/SignUp'
import AccountView from './pages/account/AccountView'
import AccountEdit from './pages/account/AccountEdit'
import PasswordEdit from './pages/account/PasswordEdit'

function App() {
    const [loggedIn, setLoggedIn] = useState();
    const [userId, setUserId] = useState(sessionStorage.getItem("userId"));

    useEffect(() => {
        console.log("App useEffect");
        setUserId(sessionStorage.getItem("userId"));
    }, [loggedIn]);

    return (
        <div>
            {/* <NavBar loggedIn={loggedIn} /> */}
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </ Route>
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

                    {/* <Route exact path="/logout">
                        <Logout setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
                    </Route> */}
                </Switch>
            </Router>
        </div>
    );
}
export default App;


{/*<div>
            <NavBar loggedIn={loggedIn} />
            <Router>
                <Switch>     
                    <Route exact path="/user/:id/delete">
                        {userId ? (
                            <DeleteAccount setLoggedIn={setLoggedIn} />
                        ) : (
                                <Redirect to={"/login"} />
                            )}
                    </Route>
                    <Route exact path="/info">
                        <Info />
                    </Route>
                </Switch>
            </Router>
        </div> */}