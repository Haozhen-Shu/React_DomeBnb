import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";

function SignupFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, username, password }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    return (
        <form onSubmit={handleSubmit} id="signup_form">
            <div id="singup_content_wrapper">
                <div id="signup_header_div">
                    <h2 id="signup_header">Create an Account</h2>
                </div>

                <ul id="signup_errors">
                    {errors.map((error, idx) => <li className="errors" key={idx}>{error}</li>)}
                </ul>

                <div id="signup_input_container">
                    <div id="signup_input_div">
                        <label>
                            Email
                        </label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div id="signup_input_div">
                        <label>
                            Username
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div id="signup_input_div">
                            <label>
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                    </div>

                    <div id="signup_input_div">
                            <label>
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                    </div>  
                </div>
                <div id="signup_btn"> 
                    <button type="submit">Sign Up</button>
                </div>
            </div>
        </form>
    );
}

export default SignupFormPage;