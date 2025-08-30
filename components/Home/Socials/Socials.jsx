
import styles from "./Socials.module.css";


export default function SocialIcons(){
    return(
        <div className={styles.section}>
            <img src="/images/socials/facebook_icon-01.png" alt="facebook" className={`${styles.social_icon} ${styles.size_correction_for_facebook}`}/>
            <img src="/images/socials/IG.png" alt="Instagram" className={styles.social_icon}/>
            <img src="/images/socials/youtube.png" alt="youtube" className={styles.social_icon}/>
        </div>
    )
}

