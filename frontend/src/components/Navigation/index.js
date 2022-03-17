import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <LoginFormModal />
                <NavLink to="/signup" className="signup_link">Sign Up</NavLink>
            </>
        );
    }

    return (
        <nav id="nav">
            <div className="logo_container">        
                <img className="logo" src='https://static.thenounproject.com/png/11999-200.png' alt='logo' ></img>
                <p>DomeBnb</p>
            </div>
            <ul>
                <li className="nav_btn_container">
                    <NavLink exact to="/" className="nav_link" >Home</NavLink>
                    {isLoaded && sessionLinks}
                <a href='https://github.com/Haozhen-Shu/React_DomeBnb' target="_blank" className="github_link">
                    GitHub
                </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;