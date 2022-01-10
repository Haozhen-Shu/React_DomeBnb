import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import styles from './LoginForm.css';

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

    return (
        <form onSubmit={handleSubmit} id={styles.login_form}>

            <div id={styles.login_header_div}>
                <h2 id={styles.login_header}>Welcome Back!</h2>
            </div>
            <ul className={styles.login_errors}>
                {errors.map((error, idx) => (
                    <li id={styles.errors} key={idx}>{error}</li>
                ))}
            </ul>
            <div id={styles.login_input_container}>
                <div className={styles.login_input_div}>
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
            
                <div className={styles.login_input_div}>
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
            <div id={styles.login_btn_div}>
                <button type="submit">Log In</button>
            </div>
        </form>
    );
}

export default LoginForm;