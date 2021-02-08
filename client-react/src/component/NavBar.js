import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button, Col, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { StatusProvider, useUser, useDispatch } from "./context/Context";

const NavBar = ({ loggedIn }) => {
  //   const [userType, setUserType] = useState(sessionStorage.getItem("userType"));
  //   const [userId, setUserId] = useState(sessionStorage.getItem("userId"));
  // const loggedIn = false;
  console.log(loggedIn);
  const handleClick = (event) => {
    // setUserType(sessionStorage.getItem("userType"));
    // setUserId(sessionStorage.getItem("userId"));
    console.log("handle click event");
  };

  //   useEffect(() => {
  //     setUserType(sessionStorage.getItem("userType"));
  //     setUserId(sessionStorage.getItem("userId"));
  //   }, [props]);

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
          <Nav.Link href="/">Home</Nav.Link>

          <Nav.Link href="/info">Help</Nav.Link>

          {loggedIn ? (
            <Nav.Link href="/beatseq">Beat Sequencer</Nav.Link>
          ) : (
            <Nav.Link href="/teaser">Teaser</Nav.Link>
          )}

          {loggedIn ? (
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="/user/:id">View Account</NavDropdown.Item>
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
