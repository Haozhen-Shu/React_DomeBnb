import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

function LoginForm() {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
    };

    const handleDemo = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential:'John', password:"password" })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
    };
    return (
        <div>
        <form onSubmit={handleSubmit} id="login_form">

            <div id="login_header_div">
                <h2 id="login_header">Welcome Back!</h2>
            </div>
            <ul className="login_errors">
                {errors.map((error, idx) => (
                    <li id="errors" key={idx}>{error}</li>
                ))}
            </ul>
            <div id="login_input_container">
                <div className="login_input_div">
                    <label>
                        Username or Email
                    </label>
                    <input
                        type="text"
                        value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                        required
                    />
                </div>
            
                <div className="login_input_div">
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
            </div>
            <div id="login_btn_div">
                <button className="login_btn" type="submit">Log In</button>
            </div>
        </form>
        <button onClick={handleDemo}>Demo User</button>
        </div>
    );
}

export default LoginForm;