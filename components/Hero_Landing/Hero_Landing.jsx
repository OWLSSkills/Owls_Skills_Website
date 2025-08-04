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
                    <img
                        src="/Button1.a.png"
                        alt="Book your course button"
                        className={`button_image`}
                    />
                    <img 
                        src="/Button1.b.png"
                        alt="subscribe to our newsletter button"
                        className={`button_image`}
                    />
                </div>
            </div>
            <div className={styles.meet_your_instructor_section}>
                <img src='/MeetJessie_picture.png' alt='Meet Jessie Image' className={styles.meet_instructor_image}/>
            </div>
            <div className={`${styles.as_seen_animation_banner}`}>
                <h2 className='justify_self_center light_green_for_text'>As Seen, Read and Heard On</h2>

                    <div className={styles.animation_banner_wrapper}>
                        <div className={styles.animation_banner_track}>

                            <img
                            src='/Animation_Banner/masterclass-logo_white.png'
                            alt='Masterclass Logo'
                            className={styles.animation_banner_image}
                            />
                            <img
                            src='/Animation_Banner/alone-s9-logo-black.png'
                            alt='Alone Logo'
                            className={styles.animation_banner_image}
                            />
                            <img
                            src='/Animation_Banner/Backpacker.png'
                            alt='Backpacker Logo'
                            className={styles.animation_banner_image}
                            />
                            <img
                            src='/Animation_Banner/National_Geographic.png'
                            alt='National Geographic Logo'
                            className={`${styles.animation_banner_image} ${styles.scale_up_logo}`}
                            />
                                                    <img
                            src='/Animation_Banner/masterclass-logo_white.png'
                            alt='Masterclass Logo'
                            className={styles.animation_banner_image}
                            />
                            <img
                            src='/Animation_Banner/alone-s9-logo-black.png'
                            alt='Alone Logo'
                            className={styles.animation_banner_image}
                            />
                            <img
                            src='/Animation_Banner/Backpacker.png'
                            alt='Backpacker Logo'
                            className={styles.animation_banner_image}
                            />
                            <img
                            src='/Animation_Banner/National_Geographic.png'
                            alt='National Geographic Logo'
                            className={`${styles.animation_banner_image} ${styles.scale_up_logo}`}
                            />
                        </div>
                    </div>
            </div>

        </div>
    )
}



