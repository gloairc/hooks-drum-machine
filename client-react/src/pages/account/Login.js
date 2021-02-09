import { useState } from "react";
import axios from "axios";
import {
  Form,
  Button,
  FormLabel,
  FormControl,
  FormGroup,
  FormText,
  Row,
  Col,
  Alert,
} from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from "react-router-dom";
const jwt = require("jsonwebtoken");

const Login = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [loginStatus, setLoginStatus] = useState(false); //to redirect to /beatseq
  const [status, setStatus] = useState(""); //inform user that logging in

  const secret = process.env.JWT_SECRET_KEY;

  const handleLogin = (event) => {
    event.preventDefault();
    setStatus("logging in"); //re-render

    axios
      .post("/api/session", formData, { withCredentials: true }) //get token
      .then((response) => {
        console.log("response.data", response.data);
        if (response.data.token) {
          //set token to localStorage
          const token = response.data.token;
          localStorage.setItem("token", token);
          const decoded = jwt.verify(token, "sei-26"); //cant read secret :/
          // // console.log("decoded.user", decoded.user)
          // // localStorage.setItem("userId", decoded.user._id);
          // // localStorage.setItem("username", decoded.user.username);
          const user = {
            userId: decoded.user._id,
            username: decoded.user.username,
          }; //useState or if statement?
          // console.log("user after setItem", user)
          props.setUser(user);
          // props.setToken(token)
          console.log("logging in");
          setLoginStatus(true);
        }
      })
      .catch((error) => {
        //handling error not working
        setStatus("");
        setErrorMsg(error.error);
        // setErrorMsg(error.response.data.error); // custom message from backend
        console.log("error from posting session", error);
      });
  };

  if (loginStatus === true) {
    //redirect to /beatseq{
    return <Redirect to={"/beatseq"} />;
  }

  const keyWidth = 2;
  const valueWidth = 5;
  const buffer = 1;

  return (
    <div className="login">
      <div className="title">
        <h1>Log In</h1>
      </div>
      <div className="loginForm">
        <Row>
          <Col sm={buffer} />
          {errorMsg ? <Alert variant="danger">Error! {errorMsg}</Alert> : ""}
        </Row>
        <Form onSubmit={handleLogin}>
          <FormGroup as={Row} controlId="username">
            <Col sm={buffer} />
            <FormLabel column sm={keyWidth}>
              Username:
            </FormLabel>
            <Col sm={valueWidth}>
              <FormControl
                type="text"
                value={formData.username}
                onChange={(event) => {
                  // console.log(event.target)
                  setFormData((state) => {
                    return { ...state, username: event.target.value };
                  });
                }}
              />
            </Col>
          </FormGroup>

          <FormGroup as={Row} controlId="password">
            <Col sm={buffer} />
            <FormLabel column sm={keyWidth}>
              Password:{" "}
            </FormLabel>
            <Col sm={valueWidth}>
              <FormControl
                type="Password"
                value={formData.password}
                onChange={(event) => {
                  setFormData((state) => {
                    return { ...state, password: event.target.value };
                  });
                }}
              />
            </Col>
          </FormGroup>
          <Row>
            <Col sm={buffer} />
            <Col sm={keyWidth}>
              <Button variant="primary" type="submit">
                Log In
              </Button>
            </Col>

            <Col sm="3">
              {status === "logging in" ? "Logging in, please wait.." : ""}
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default Login;
