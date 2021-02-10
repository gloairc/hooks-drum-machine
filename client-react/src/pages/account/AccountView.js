import { useState, useEffect } from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import axios from "axios";
import { Row, Col, Container, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
const jwt = require("jsonwebtoken");

const AccountView = () => {//user={userId, username}
    const [formData, setFormData] = useState({});
    // const userId = props.user.userId;
    // console.log("props.userId", props.user.userId)
    const userIdParam = useParams().id;

    // const [userId, setUserId] = useState(props.user.userId)
    const token = localStorage.getItem("token");
    const decoded = jwt.verify(token, "sei-26");//cant read secret :/
    const user = { userId: decoded.user._id, username: decoded.user.username }

    // useEffect(() => {
    //     setUserId(user.userId)
    // }, [user.userId])

    useEffect(() => {//get the user
        axios
            .get(`/api/user/${userIdParam}`)
            // .get(`/user/${userId}`)
            .then((response) => {
                setFormData(response.data);
                console.log("getting user to view", response);
            })
            .catch((error) => {
                console.log("error", error);
            });
    }, [userIdParam]);

    const keyWidth = 2;
    const valueWidth = 5;

    return (
        <div>
            {user.userId === userIdParam ? ( //prevent people from manipulating with userId in params
                <div className="accForm">
                    <div id="accountdetail-form">
                        <Row style={{ margin: "10px 0 2px 2px" }}>
                            <h2>Account Details</h2>
                        </Row>
                        <Container style={{ margin: "5px" }}>
                            <Row style={{ height: "50px" }}>
                                <Col sm={keyWidth}>
                                    <span class="font-weight-bold">Username:</span>{" "}
                                </Col>
                                <Col sm={valueWidth}>{formData.username}</Col>
                            </Row>
                            <Row style={{ height: "50px" }}>
                                <Col sm={keyWidth}>
                                    <span class="font-weight-bold">Password:</span>{" "}
                                </Col>
                                <Col sm={valueWidth}>xxxxxx</Col>
                                <Col sm={2}>
                                    <div className="rightLink">
                                        <Link to={`/user/${user.userId}/changepassword`}>
                                            <Button
                                                variant="outline-warning"
                                                style={{
                                                    borderRadius: "10px",
                                                    padding: "6px",
                                                    width: "150px",
                                                    marginTop: "10px",
                                                    border: "3px solid",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                Change
                </Button>
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                            <Row style={{ height: "50px" }}>
                                <Col sm={keyWidth}>
                                    <span class="font-weight-bold">Name:</span>{" "}
                                </Col>
                                <Col sm={valueWidth}>{formData.name}</Col>
                            </Row>

                            <Row style={{ height: "50px" }}>
                                <Col sm={keyWidth}>
                                    <span class="font-weight-bold">Email:</span>{" "}
                                </Col>
                                <Col sm={valueWidth}>{formData.email}</Col>
                            </Row>
                        </Container>
                    </div>

                    <div id="accountDetail-buttonRow">
                        <div className="rightLink">
                            <Link to={`/user/${user.userId}/edit`}>
                                <Button
                                    variant="outline-warning"
                                    style={{
                                        borderRadius: "10px",
                                        padding: "6px",
                                        width: "150px",
                                        border: "2px solid",
                                        fontWeight: "bold",
                                        margin: "5px",
                                    }}
                                >
                                    Edit Profile
                </Button>
                            </Link>
                        </div>

                        <div className="rightLink">
                            <Link to={`/user/${user.userId}/delete`}>
                                <Button
                                    variant="danger"
                                    style={{
                                        borderRadius: "10px",
                                        padding: "6px",
                                        width: "150px",
                                        border: "2px solid red",
                                        margin: "5px",
                                    }}
                                >
                                    Delete Account
                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )
                : (
                    <Redirect to={"/restricted"} />
                )
            }
        </div >
    );
};

export default AccountView;
