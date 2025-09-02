import styles from './FirstMiniSection.module.css';

export default function FirstMiniSection() {
  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        {/* ⬇️ Your SVG block — unchanged */}
        <svg
          className={styles.tape}
          viewBox="0 0 1440 560"
          aria-labelledby="mission-title"
          role="img"
        >
          <title id="mission-title">Our Mission</title>
          <image
            href="/images/mission/Tape.png"
            x="0" y="-10svh" width="1440" height="560"
            preserveAspectRatio="xMinYMin meet"
          />
          <text
            x="120" y="230"
            fontSize="60"
            fontWeight="150"
            fill="RGB(90,122,94)"
            transform="rotate(-8 220 330)"
            textLength="400"
            lengthAdjust="spacing"
            style={{ fontFamily: 'inherit' }}
          >
            OUR MISSION
          </text>
        </svg>

        {/* Lead sentence under the tape */}
        <p className={styles.lead}>
          To educate and empower women and non-binary folks comfortable in women’s spaces,
          in the skills needed to survive emergencies in global wilderness environments.
        </p>
      </div>

      {/* Two-column content INSIDE the same section (keeps topo bg) */}
      <div className={`${styles.wrap} ${styles.content}`}>
        {/* Left: image stack */}
        <div className={styles.stack}>
          <img src="/images/mission/mission_pictures1.png" alt="" className={`${styles.shot} ${styles.shotA}`} />

        </div>

        {/* Right: paragraphs */}
        <div className={styles.copy}>
          <p>Jessie’s vision for O.W.L.S. Skills is rooted in the belief of women working together to support each other…</p>
          <p>Traditionally, wilderness skills have been passed down through generations…</p>
          <p>O.W.L.S. Skills welcomes everyone, with a particular focus on creating a supportive learning space…</p>
        </div>
      </div>
    </section>
  );
}
