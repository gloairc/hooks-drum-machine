import AccountDetailsForm from "./AccountDetailsForm";
import "../../css/accountform.css";

const SignUp = (props) => {

    const setUser = props.setUser

    return (
        <div className="signupForm">
            <div style={{ width: "85%", margin: "5px auto" }}>
                <h1>Create a new account</h1>
            </div>
            <AccountDetailsForm setUser={setUser} />
        </div>
    );
};


export default SignUp;
