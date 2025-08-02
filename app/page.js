import Image from "next/image";
import styles from "./page.module.css";
import HeroLanding from "@/components/Hero_Landing/Hero_Landing";
export default function Home() {
  return (
    <div className={styles.page}>
      <HeroLanding/>
    </div>
  );
}
