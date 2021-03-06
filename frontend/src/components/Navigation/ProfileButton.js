import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import {NavLink, useHistory} from 'react-router-dom';
import * as sessionActions from '../../store/session';


function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const history = useHistory();

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = async(e) => {
        e.preventDefault();
        await dispatch(sessionActions.logout());
        await history.push("/")
        
    };

    return (
        <>
            {/* <button onClick={openMenu}>
                <i className="fas fa-user-circle" />
            </button> */}
            {/* {showMenu && ( */}
                <div className="profile-dropdown">
                    {/* <p>WELCOME!</p> */}
                     {/* <NavLink to="/" className="nav_logout">
                        Log Out
                    </NavLink> */}
                    <span>
                        <button className="nav_logout" onClick={logout}>Log Out</button>
                    </span>
                </div>
            {/* )} */}
        </>
    );
}

export default ProfileButton;