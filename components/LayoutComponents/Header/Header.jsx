'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  if (pathname === '/') return null;

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Link href="/" className={styles.brand} aria-label="OWLS Skills — Home">
          <img className={styles.logo} src="/images/OWLS_Color_No_Under_Text.png" alt="OWLS Skills" />
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          <Link href="/mission" className={styles.navLink}>Mission</Link>
          <Link href="/courses" className={styles.navLink}>About Our Courses</Link>
          <Link href="/faqs" className={styles.navLink}>FAQs</Link>
          <Link href="/newsletter" className={styles.navLink}>Newsletter</Link>
        </nav>

        <div className={styles.ctaWrap}>
          <Link href="/book" className="background_color_light_purple font_color_white call_to_action_button">
            BOOK A COURSE
          </Link>
        </div>
      </div>
    </header>
  );
}
