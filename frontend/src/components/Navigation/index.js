import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import styles from './Navigation.css';

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
                <NavLink to="/signup">Sign Up</NavLink>
            </>
        );
    }

    return (
        <nav id={styles.nav}> 
            <div id={styles.logo_div}>         
                <img src='https://static.thenounproject.com/png/11999-200.png' alt='logo' className={styles.logo} ></img>
            </div>
            <ul>
                <li>
                    <NavLink exact to="/" className={styles.navlink} >Home</NavLink>
                    {isLoaded && sessionLinks}
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;