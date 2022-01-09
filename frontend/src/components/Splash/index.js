import React from 'react';
import { useDispatch } from 'react-redux'
import * as sessionActions from '../../store/session'
import styles from './Splash.css';

const Splash = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(sessionActions.logout());
    }, [dispatch])

    return (
        <div className={styles.splash_container}>
            <div className="splash_dom">
                <img src="https://a0.muscache.com/im/pictures/9d753106-bce1-429f-91a3-ed2ac08ea29a.jpg?im_w=1200" alt="Dome"></img>
            </div>            
        </div>
    )
}
export default Splash;