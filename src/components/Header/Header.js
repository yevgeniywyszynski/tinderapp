import React from 'react'
import Logo from '../Logo/Logo';
import styles from './Header.module.scss';

const Header = () => {

    return(
    <header>
        <div className={styles.fl}>
            <button className={styles.btnSettings} href="https://github.com/" type='button'>
                <a href="/"><img className={styles.userIcons} src='images/misc/user.png' alt="user Settings" /></a>
            </button>
        </div>

        <div className={styles.fl}>
            <Logo />
        </div>

        <div className={styles.fl}>
            <button className={styles.btnSettings} type='button'>
                <img className={styles.userIcons} src='images/misc/messages.png' alt="View Messages" />
            </button>
        </div>
    </header>
    )
}


export default Header;