import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button, Col, NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "../App.css"
// import "bootstrap/dist/css/bootstrap.min.css";
// import { StatusProvider, useUser, useDispatch } from "./context/Context";
const jwt = require("jsonwebtoken");

const NavBar = ({ user }) => {// user={userId, userName}
  // const [user, setUser] = useState(props.user) //from app which is triggered by login and logout
  // console.log("props at Nav bar", props)
  // console.log("props.user.userId at NavBar", props.user.userId)
  // console.log("props.user.username at NavBar", props.user.username)

  // let userNav = ""
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token === undefined || token === "" || token === null) {
  //     return
  //   } else {
  //     const decoded = jwt.verify(token, "sei-26");//cant read secret :/
  //     userNav = { userId: decoded.user._id, username: decoded.user.username }
  //     setUser(userNav)
  //   }
  // }, [props])

  // useEffect(() => {//setUsername rerender when username change
  //   //   if (Object.keys(props.user) !== 0) {
  //   setUsername(props.user.username)
  //   // setUserId(props.user.userId)
  //   // };
  // }, [props.user.username]);

  // console.log("NavBar username", user)
  const loggedIn = user.userId === undefined ? false : true

  // const handleClick = (event) => {//signup and logout
  //   // setUserType(localStorage.getItem("userType"));
  //   // setUserId(localStorage.getItem("userId"));
  //   console.log("handle click event");
  // };

  return (
    <Navbar
      bg="light"
      expand="lg"
      fixed="top"
      style={{ position: "sticky", fontWeight: "bold" }}
    >
      <Navbar.Brand as={Link} to="/">Cool App Name</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">

          <Nav.Link as={Link} to="/">Home</Nav.Link>

          <Nav.Link as={Link} to="/help">Help</Nav.Link>

          {loggedIn ? (
            <Nav.Link as={Link} to="/beatseq">Beat Sequencer</Nav.Link>
          ) : (
              // <Nav.Link onTouchCancel="/teaser">Teaser</Nav.Link>
              <Nav.Link as={Link} to="/teaser">Teaser</Nav.Link>
            )}
          {loggedIn ? (<span id="welcome-name">Welcome</span>) : ""}
          {loggedIn ? (
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to={`/user/${user.userId}`}>View Account</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={`/user/${user.userId}/changepassword`}>Change Password</NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
          ) : (
              <>
                <Nav.Link as={Link} to="/user/new">Sign Up!</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
              </>
            )}
        </Nav>
      </Navbar.Collapse>
      {/* <Col md={3} xs={2} xl={2} lg={2}>
        {userType ? (
          <Button
            href="/logout"
            size="md"
            variant="success"
            style={{ margin: "1px 2px", width: "90px", borderRadius: "20px" }}
            onClick={handleClick}
          >
            Logout
          </Button>
        ) : (
          <>
            <Button
              href="/login"
              size="md"
              variant="success"
              style={{ margin: "1px 2px", width: "90px", borderRadius: "20px" }}
            >
              Login
            </Button>

            <Button
              variant="success"
              href="/user/new"
              size="md"
              style={{ margin: "1px 2px", width: "90px", borderRadius: "20px" }}
              onClick={handleClick}
            >
              Sign Up
            </Button>
          </>
        )}
      </Col> */}
    </Navbar>
  );
};

export default NavBar;
