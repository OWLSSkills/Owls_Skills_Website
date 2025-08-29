import styles from './CourseOfferings.module.css'

export default function CourseOfferings(){
    return(
        <div className={styles.section}>
            <div className={styles.first_sub_section}>
                
                <img src='/images/bubble_board_1.png' alt='One day survival course' className={styles.course_offerings_image}/>
                <img src='/images/bubble_board_2.png' alt='Weekend Survival Course' className={styles.course_offerings_image}/>
                <img src='/images/bubble_board_3.png' alt='Course Offerings Banner' className={styles.course_offerings_image}/>
            </div>
            <div className={styles.second_sub_section}>
                <img src='/images/custom_private.png' alt='Course Offerings Banner' className={styles.course_offerings_banner_image}/>
            </div>
        </div>
    )
}



