import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button, Col, NavDropdown } from "react-bootstrap";
import "../App.css"
// import "bootstrap/dist/css/bootstrap.min.css";
// import { StatusProvider, useUser, useDispatch } from "./context/Context";
const jwt = require("jsonwebtoken");

const NavBar = (props) => {// user={userId, userName}
  const [user, setUser] = useState(props.user)
  console.log("props at Nav bar", props)
  // console.log("props.user.userId at NavBar", props.user.userId)
  // console.log("props.user.username at NavBar", props.user.username)

  let userNav = ""
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === undefined || token === "" || token === null) {
      return
    } else {
      const decoded = jwt.verify(token, "sei-26");//cant read secret :/
      userNav = { userId: decoded.user._id, username: decoded.user.username }
      setUser(userNav)
    }
  }, [props.user])

  // useEffect(() => {//setUsername rerender when username change
  //   //   if (Object.keys(props.user) !== 0) {
  //   setUsername(props.user.username)
  //   // setUserId(props.user.userId)
  //   // };
  // }, [props.user.username]);

  console.log("NavBar username", user)
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
      <Navbar.Brand href="/">Cool App Name</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {loggedIn ? (<span id="welcome-name">Welcome {user.username}</span>) : ""}
          <Nav.Link href="/">Home</Nav.Link>

          <Nav.Link href="/info">Help</Nav.Link>

          {loggedIn ? (
            <Nav.Link href="/beatseq">Beat Sequencer</Nav.Link>
          ) : (
              <Nav.Link href="/teaser">Teaser</Nav.Link>
            )}

          {loggedIn ? (
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href={`/user/${user.userId}`}>View Account</NavDropdown.Item>
              <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
          ) : (
              <>
                <Nav.Link href="/user/new">Sign Up!</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
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
