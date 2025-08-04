import styles from './Hero_landing.module.css';

export default function HeroLanding() {

    return (
        <div className={styles.hero_landing}>
            <div className={styles.hero_landing_topagraphic_background}>
                <div className={styles.hero_landing_images_container}>
                    <img
                        src="/O.W.L.S_banner.png"
                        alt="OWLS Banner"
                        className={styles.OWLS_banner}
                    />

                    <div className={styles.pictures_first_banner_wrapper}>
                        <img
                        src="/pictures_first_banner.png"
                        alt="Photo 1"
                        className={styles.pictures_first_banner}
                        />
                    </div>
                </div>
                <div className={styles.hero_landing_buttons_container}>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}



