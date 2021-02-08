import { useState, useEffect } from "react";
import axios from "axios";
import "../../css/accountform.css";
import { Form, Button, FormLabel, FormControl, FormGroup, FormText, FormCheck, Row, Col, Alert } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import { useParams, Link, Redirect } from "react-router-dom";

const AccountDetailsForm = (props) => {//received user={userId, userName} from AccountEdit
    const [formData, setFormData] = useState({
    })
    const [currentUsername, setCurrentUsername] = useState()
    const [errorMsg, setErrorMsg] = useState()
    const [sent, setSent] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const userId = useParams().id

    useEffect(() => {//get user is there is userId in params
        if (userId) {
            setIsLoading(true)
            console.log("before axios")
            axios.get(`/api/user/${userId}`)
                .then((response) => {
                    setFormData(response.data)
                    setCurrentUsername(response.data.username)
                    setIsLoading(false)
                    console.log("response get user", response)
                })
                .catch((error) => {
                    console.log('error', error)
                })
        } else {
            console.log("new user. no set data")
        }
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedInfo = {
            username: formData.username,
            name: formData.name,
            email: formData.email,
        };
        if (!userId) { //new user => POST
            axios
                .post("/api/user", formData)
                .then((response) => {
                    console.log(response);
                    // localStorage.setItem("userId", response.data._id);
                    // localStorage.setItem("username", response.data.username);
                    //next time to axios a session and get token
                    setTimeout(() => {
                        setSent(true);
                    }, 2000);
                })
                .catch((error) => {
                    console.log("error", error.response.data.errors);
                    setErrorMsg(error.response.data.errors);
                });

            // validation WIP
            // const validate = formSchema.validate(formData, { abortEarly: false })
            // console.log(validate.error)
        } else if (userId) {//existing user => PUT
            axios
                .put(`/api/user/${userId}`, updatedInfo)
                .then((response) => {
                    //need to let navbar know so it can re-render itself
                    console.log("put response", response)
                    //trigger Navbar change
                    // props.changeName(response.data.username)
                    console.log("response.data after put", response.data)
                    setTimeout(() => {
                        setSent(true);
                    }, 2000);
                })
                .catch((error) => {
                    console.log("error", error.response.data.errors);
                    setErrorMsg(error.response.data.errors); // array of objects
                });
        }
    };

    if (sent && userId) { //editing profile
        return <Redirect to={`/user/${userId}`} />
    }
    else if (sent && !userId) { //signing up
        // return <Redirect to={'/beatseq'} />
        return <Redirect to={'/login'} />
    }

    const showErrors = () => {
        let errors = [];
        if (errorMsg) {
            errors.push(<p>Error!</p>);
            for (let i = 0; i < errorMsg.length; i++) {
                errors.push(<p>{errorMsg[i].msg}</p>);
            }
        }
        return errors;
    };

    const handleBlur = (event) => {
        setErrorMsg("");
        axios.get('/api/user', {  // /user?username=formData.username
            params: { username: formData.username }
        })
            .then((response) => {// either receive the existing one user else or all users when username ===""
                console.log("axios then response", response.data)
                if ((response.data).length === 1 && formData.username !== currentUsername) {
                    setErrorMsg([{ msg: "Username already taken!" }])
                }
            })
    }

    const keyWidth = 2;
    const valueWidth = 5;
    const buffer = 1;

    return (
        <>
            <Row>
                <Col sm={buffer} />
                {errorMsg ? <Alert variant="danger">{showErrors()}</Alert> : ""}
                {isLoading ? <Alert variant="info">Loading your data...</Alert> : ""}
            </Row>
            <Form onSubmit={handleSubmit}>
                <FormGroup as={Row} controlId="username">
                    <Col sm={buffer} />
                    <FormLabel column sm={keyWidth}>Username: </FormLabel>
                    <Col sm={valueWidth}>
                        <FormControl
                            type="text"
                            value={formData.username}
                            disabled={isLoading}
                            onChange={(event) => {
                                setFormData((state) => {
                                    return { ...state, username: event.target.value }
                                })
                            }}
                            onBlur={(event) => handleBlur(event)}
                        />
                        <FormText className="text">
                            Username must be at least 8 characters long
                            </FormText>
                    </Col>
                </FormGroup>

                <FormGroup as={Row} controlId="password">
                    <Col sm={buffer} />
                    <FormLabel column sm={keyWidth}> Password:{" "}</FormLabel>

                    <Col sm={valueWidth}>
                        <FormControl
                            type="Password"
                            value={userId ? "" : formData.password}
                            onChange={(event) => {
                                setFormData((state) => {
                                    return { ...state, password: event.target.value };
                                });
                            }}
                            disabled={userId}
                        />

                    </Col>
                    {userId ? (
                        <Col sm="2">
                            <Link to={`/user/${userId}/changepassword`}>
                                <Button
                                    variant="outline-warning"
                                    style={{
                                        borderRadius: "10px",
                                        width: "170px",
                                        border: "3px solid",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Change</Button>
                            </Link>
                        </Col>
                    ) : (
                            ""
                        )}
                </FormGroup>

                <FormGroup as={Row} controlId="name">
                    <Col sm={buffer} />
                    <FormLabel column sm={keyWidth}>Name: </FormLabel>
                    <Col sm={valueWidth}>
                        <FormControl type="text"
                            value={formData.name}
                            disabled={isLoading}
                            onChange={(event) => {
                                setFormData((state) => {
                                    return { ...state, name: event.target.value }
                                })
                            }} />
                    </Col>
                </FormGroup>

                <FormGroup as={Row} controlId="email">
                    <Col sm={buffer} />
                    <FormLabel column sm={keyWidth}>Email: </FormLabel>
                    <Col sm={valueWidth}>
                        <FormControl type="email"
                            value={formData.email}
                            disabled={isLoading}
                            onChange={(event) => {
                                setFormData((state) => {
                                    return { ...state, email: event.target.value }
                                })
                            }} />
                    </Col>
                </FormGroup>

                <Row>
                    <Col sm={buffer} />
                    <Col sm={keyWidth}>
                        <Button
                            variant="outline-warning"
                            style={{
                                borderRadius: "10px",
                                width: "150px",
                                border: "3px solid",
                                fontWeight: "bold",
                            }}
                            type="submit"
                            disabled={isLoading}
                        >
                            {userId ? "Save" : "Create Account"}
                        </Button>
                    </Col>
                    {userId ? (
                        <>
                            <Col sm="1"></Col>
                            <Col>
                                <Link to={`/user/${userId}`}>Back to Account Details</Link>
                            </Col>
                        </>
                    ) : (
                            ""
                        )}
                </Row>
            </Form>
        </>
    );
};

export default AccountDetailsForm;
