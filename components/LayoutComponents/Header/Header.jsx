'use client'
import styles from './Header.module.css'

export default function Header(){
    const onHomePage = window.location.pathname === '/';
    return(
        <header className={onHomePage? "display_none":`${styles.header}`}>

        </header>
    )
}