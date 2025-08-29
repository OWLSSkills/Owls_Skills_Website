import styles from "./page.module.css";
import HeroLanding from "@/components/Home/Hero_Landing/Hero_Landing";
import CourseOfferings from "@/components/Home/Course_Offerings/CourseOfferings";
export default function Home() {
  return (
    <div className={styles.page}>
      <HeroLanding/>
      <CourseOfferings/>
    </div>
  );
}
