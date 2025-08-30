import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <div className={`${styles.footerStack}`}>
                <img src="/images/Jessie_Krebs_Color.png" alt="Jessie Krebs Logo" className={styles.smallLogo} />
                <p>© {currentYear} Jessie Krebs.</p>
                <p>All rights reserved.</p>
            </div>
        </footer>
    )
}