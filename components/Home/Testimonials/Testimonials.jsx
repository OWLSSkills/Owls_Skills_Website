import styles from "./Testimonials.module.css";



const TESTIMONIALS = [
  {
    name: "Aly",
    text:
      `I learned a lot from you, and your positive spirit made me feel comfortable...
       I love your plan for OWLS, and please pre-sign me up for your email list once that’s up and running.`,
    initial: "A",
  },
  {
    name: "James",
    text:
      `Night-time navigation was really interesting… The extended map and compass work
       was really great, and I’m happy to have that knowledge now.`,
    initial: "J",
  },
  {
    name: "James",
    text:
      `Night-time navigation was really interesting… The extended map and compass work
       was really great, and I’m happy to have that knowledge now.`,
    initial: "J",
  },
  {
    name: "James",
    text:
      `Night-time navigation was really interesting… The extended map and compass work
       was really great, and I’m happy to have that knowledge now.`,
    initial: "J",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section} aria-labelledby="testimonials-title">
      <div className={styles.container}>

        <div className={styles.grid}>
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} className={styles.card}>
              <figcaption className={styles.header}>
                <div className={styles.avatar} aria-hidden="true">{t.initial ?? t.name[0]}</div>
                <span className={styles.name}>{t.name}</span>
              </figcaption>
              <blockquote className={styles.quote}>
                <p>“{t.text}”</p>
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
