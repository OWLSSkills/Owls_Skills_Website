import styles from "./NewsLetter.module.css";

export default function NewsLetter() {

    return (
        <div className={styles.section}>
            <h2 className={styles.subTitle}>WANT TO BE THE FIRST TO KNOW ABOUT UPCOMING COURSES AND DISCOUNTS? SINGUP FOR OUR NEWSLETTER!</h2>
            <form className={styles.form}>
                <input type="email" placeholder="Email" className={styles.email_input} />
                <button type="submit" className={`background_color_light_green font_color_white call_to_action_button ${styles.submit_button}`}>
                    SUBSCRIBE
                </button>
            </form>
        </div>
    )


}

