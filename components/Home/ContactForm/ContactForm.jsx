"use client";

import styles from './ContactForm.module.css';

export default function ContactForm() {
  function handle_emailing_jessie(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);               // ← grab values from the form
    const name = (fd.get("name") || "").toString().trim();
    const email = (fd.get("email") || "").toString().trim();
    const message = (fd.get("message") || "").toString().trim();

    console.log(name, email, message);
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }
  }

  return (
    <div className={styles.mt5}>
      <h2 className={styles.title}>Contact Jessie!</h2>

      <form className={styles.form} onSubmit={handle_emailing_jessie}>
        <div className={styles.formRow}>
          <label className={styles.srOnly} htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Name" className={styles.input} />

          <label className={styles.srOnly} htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="Email" className={styles.input} />
        </div>

        <label className={styles.srOnly} htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Message" className={styles.textarea} rows={6} />

        <button type="submit" className="background_color_light_green font_color_white call_to_action_button">
          CONTACT JESSIE
        </button>
      </form>
    </div>
  );
}
