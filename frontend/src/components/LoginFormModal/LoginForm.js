import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import {Redirect, useHistory} from 'react-router-dom';

function LoginForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user)
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);


    if (sessionUser) return (
        <>{}

        <Redirect to='/spots' />
        </>
    )
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
                if (data && data.errors) {
                    setErrors(data.errors)
                    history.push('/spots')
                } else {
                    history.push('/spots')
                }

            }
        );
    };
    return (
        <div>
        <div id="login_header_div">
            <h2 id="login_header">Welcome Back!</h2>
        </div>
        <form onSubmit={handleSubmit} id="login_form">

            <div className="login_errors">
                {errors.map((error, idx) => (
                    <div id="errors" key={idx}>{error}</div>
                ))}
            </div>
            <div id="login_input_container">
                <input
                    type="text"
                    value={credential}
                    onChange={(e) => setCredential(e.target.value)}
                    required
                    className="login_input"
                    placeholder="Username or Email"
                />
            
               
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="login_input"
                    placeholder="Passord"
                />
                
            </div>
            <div id="login_btn_div">
                <button className="login_btn" type="submit">Log In</button>
                <button className="login_btn" onClick={handleDemo}>Demo User</button>
            </div>
        </form>
    </div>
    );
}

export default LoginForm;