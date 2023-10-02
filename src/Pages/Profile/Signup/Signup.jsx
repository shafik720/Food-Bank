import { Helmet } from "react-helmet-async";
import './Signup.css' ; 

const Signup = () => {
    return (
        <div className="signup-div">
            <Helmet>
                <title>Sign Up</title>
                <link rel="icon" type="image/svg+xml" href="/vite.svg" />
            </Helmet>
            <div className="form-div">
                <h2> Sign Up </h2>
                <div className="form-fields">
                    <input type="text" name="" id="" />
                    <input type="email" name="" id="" />
                </div>
            </div>
        </div>
    );
};

export default Signup;