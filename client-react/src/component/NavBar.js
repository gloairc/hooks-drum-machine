import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button, Col, NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "../App.css"
// import "bootstrap/dist/css/bootstrap.min.css";
// import { StatusProvider, useUser, useDispatch } from "./context/Context";

const NavBar = ({ user }) => {// {userId, userName}

  const loggedIn = user.userId === undefined ? false : true

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

          {/* <Nav.Link as={Link} to="/">Home</Nav.Link> */}
          {loggedIn ? (
            <Nav.Link as={Link} to="/beatseq">Beat Sequencer</Nav.Link>
          ) : (
              // <Nav.Link onTouchCancel="/teaser">Teaser</Nav.Link>
              <Nav.Link as={Link} to="/teaser">Teaser</Nav.Link>
            )}

          <Nav.Link as={Link} to="/help">Help</Nav.Link>

          {loggedIn ? (<span id="welcome-name">Welcome {user.username}</span>) : ""}
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
