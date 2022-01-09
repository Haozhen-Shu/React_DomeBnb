import styles from './Footer.css';


const Footer = () => {
    return (
        <div id={styles.footer_container}>
            <ul>
                <li>Support</li>
                <li>Community</li>
                <li>Hosting</li>
                <li>About</li>
            </ul>

        </div>
    )
}

export default Footer;