import styles from './CourseOfferings.module.css'

export default function CourseOfferings(){
    return(
        <div className={styles.section}>
            <div className={styles.first_sub_section}>
                
                <figure className={styles.boardWrap} style={{
                    // tweak these three numbers to line it up perfectly
                    // (percentages are relative to the image's width/height)
                    '--btn-left': '9.5%',   // x from the left edge
                    '--btn-top':  '50.0%',  // y from the top edge
                    '--btn-width':'28%',    // width of the button area
                    }}>
                    <img
                        src="/images/bubble_board_1.png"   // use the duplicate WITHOUT the printed button
                        alt="One day survival course"
                        className={styles.course_offerings_image}
                    />

                    <a href="/courses/one-day"
                        className={`background_color_light_green font_color_white call_to_action_button ${styles.overlayBtn}`}
                        aria-label="Book your one-day survival course">
                        BOOK YOUR COURSE
                    </a>
                </figure>                
                <figure className={styles.boardWrap} style={{
                    // tweak these three numbers to line it up perfectly
                    // (percentages are relative to the image's width/height)
                    '--btn-left': '30%',   // x from the left edge
                    '--btn-top':  '64.0%',  // y from the top edge
                    '--btn-width':'28%',    // width of the button area
                    }}>
                <img src='/images/bubble_board_2.png' alt='Weekend Survival Course' className={styles.course_offerings_image}/>
                <a href="/courses/TODO"
                        className={`background_color_light_green font_color_white call_to_action_button ${styles.overlayBtn}`}
                        aria-label="Book your one-day survival course">
                        FIND YOUR COURSE
                    </a>
                </figure>  
                <figure className={styles.boardWrap} style={{
                    // tweak these three numbers to line it up perfectly
                    // (percentages are relative to the image's width/height)
                    '--btn-left': '35%',   // x from the left edge
                    '--btn-top':  '75.0%',  // y from the top edge
                    '--btn-width':'28%',    // width of the button area
                    }}>
                <img src='/images/bubble_board_3.png' alt='Course Offerings Banner' className={styles.course_offerings_image}/>
                <a href="/courses/TODO"
                        className={`background_color_light_green font_color_white call_to_action_button ${styles.overlayBtn}`}
                        aria-label="Book your one-day survival course">
                        CHOOSE YOUR ADVENTURE
                    </a>
                </figure>  
            </div>
            <div className={styles.second_sub_section}>
                <img src='/images/custom_private.png' alt='Course Offerings Banner' className={`${styles.course_offerings_image} mt-8 `}/>
            </div>
        </div>
    )
}



