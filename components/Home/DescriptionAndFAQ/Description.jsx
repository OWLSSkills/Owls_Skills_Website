import styles from './Description.module.css';

export default function Description() {

    return (
            <div className={styles.first_sub_section}>
                <img src='/images/IMG_1720.jpg' alt='Description and FAQ Banner' className={styles.description_and_faq_image}/>
                <div className={styles.description_text}>
                    <h2 className={styles.subTitle}>OUTDOOR SKILLS FOR WOMEN BY WOMEN</h2>
                    <p className={styles.paragraph}>To educate and empower women and other under represented demographics in the skills of surviving emergency situations in global wilderness envrionments</p>

                    <div className={styles.button_container}>
                        <button className={`background_color_light_green font_color_white call_to_action_button`}>
                            LEARN MORE
                        </button>
                        <button className={`background_color_light_green font_color_white call_to_action_button`}>
                            COURSES
                        </button>
                    </div>

                </div>
            </div>
            



    )
}





