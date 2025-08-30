"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./Testimonials.module.css";

const TESTIMONIALS = [
  { name: "Aly",   text: `I learned a lot from you, and your positive spirit made me feel comfortable... I love your plan for OWLS, and please pre-sign me up for your email list once that’s up and running.`, initial: "A" },
  { name: "Jake",   text: `aoskdjflkskdf jlskjd l fjasj dkflaj slkd jf jaslkdjfjasjlkdfjkajsdjflj aklsjdlkf jlajsldkf jlkajsdj flajsdjflkajskldjfkljasjd lfjalksjdlkfjasjdklf jklasjdfjlasjdkfjajskdj fkjaksdjf jksdj ifjosjdjfoisdifojsdjfoiasdl japsdjfoiasjdlfj asldfkj asdoifh ajsidof jasdiof jasdif jkajsndkfjna ksbhdf absdfbajsdnkfjnahsbdkf nasbjdfjanshdf jasdhb fbsdhbfashdbfhabsdhf bhabsdhbfh sbdfhsdn fjnsdhj njsdbfjnsjdb fjnsjdn jfnjsndjfnjsnI learned a lot from you, and your positive spirit made me feel comfortable... I love your plan for OWLS, and please pre-sign me up for your email list once that’s up and running.`, initial: "J" },
  { name: "James", text: `Night-time navigation was really interesting… The extended map and compass work was really great, and I’m happy to have that knowledge now.`, initial: "J" },
  { name: "Pat",   text: `The field exercises were spot-on. I left feeling confident and excited to practice more.`, initial: "P" },
  { name: "Rae",   text: `Super organized and welcoming. I appreciated the safety-first approach without losing the fun.`, initial: "R" },
];

export default function Testimonials() {
  const viewportRef = useRef(null);
  const setRef = useRef(null);

  const [loopWidth, setLoopWidth] = useState(1000);
  const [copies, setCopies] = useState(2);
  const [expanded, setExpanded] = useState(() => new Set());      // which indexes are expanded
  const [hasOverflow, setHasOverflow] = useState([]);             // which need “…more”
  const [isPaused, setIsPaused] = useState(false);

  const cardRefs = useRef([]);    // refs to the base set's card elements

  const SPEED_PX_PER_SEC = 80;    // << tune marquee speed; stays constant as cards change
  const CARD_MAX_H = 360;         // must match --card-max-h in CSS

  // Build the base set once
  const baseSet = useMemo(() => TESTIMONIALS, []);

  // Duplicate the set enough times to loop seamlessly
  const repeated = useMemo(() => {
    const arr = [];
    for (let i = 0; i < copies; i++) arr.push(...baseSet);
    return arr;
  }, [baseSet, copies]);

  // Measure widths & copies for seamless loop
  useEffect(() => {
    if (!viewportRef.current || !setRef.current) return;

    const measure = () => {
      const setRect = setRef.current.getBoundingClientRect();
      const vpRect  = viewportRef.current.getBoundingClientRect();
      const widthOneSet = Math.ceil(setRect.width);
      const neededCopies = Math.max(2, Math.ceil((vpRect.width * 2) / Math.max(widthOneSet, 1)));
      setLoopWidth(widthOneSet || 1000);
      setCopies(neededCopies);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(viewportRef.current);
    ro.observe(setRef.current);
    return () => ro.disconnect();
  }, []);

  // Detect overflow per card to show “…more” only when needed
  useEffect(() => {
    const flags = baseSet.map((_, i) => {
      const el = cardRefs.current[i];
      if (!el) return false;
      // card content height vs max collapsed height
      return el.scrollHeight > CARD_MAX_H + 1;
    });
    setHasOverflow(flags);

    // Re-check on resize
    const ro = new ResizeObserver(() => {
      const again = baseSet.map((_, i) => {
        const el = cardRefs.current[i];
        return el ? el.scrollHeight > CARD_MAX_H + 1 : false;
      });
      setHasOverflow(again);
    });
    cardRefs.current.forEach(el => el && ro.observe(el));
    return () => ro.disconnect();
  }, [baseSet]);

  // Animation duration = distance / speed
  const durationSec = Math.max(1, loopWidth / SPEED_PX_PER_SEC);

  // Pause animation on press/hold (mobile) and resume on release
  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;

    const down = () => setIsPaused(true);
    const up = () => setIsPaused(false);

    vp.addEventListener("pointerdown", down, { passive: true });
    window.addEventListener("pointerup", up, { passive: true });
    window.addEventListener("pointercancel", up, { passive: true });
    return () => {
      vp.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
  }, []);

  const toggleExpanded = (i) => {
    setExpanded(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <section className={styles.section} aria-labelledby="testimonials-title">
      <div className={styles.container}>
        <h2 id="testimonials-title" className={styles.title}>What folks say</h2>

        <div
          className={`${styles.viewport} ${isPaused ? styles.paused : ""}`}
          ref={viewportRef}
        >
          <div
            className={styles.track}
            style={{ ["--duration"]: `${durationSec}s`, ["--loop"]: `${loopWidth}px` }}
          >
            {/* Base, interactive set */}
            <div className={styles.set} ref={setRef}>
              {baseSet.map((t, i) => {
                const isOpen = expanded.has(i);
                const showMore = !!hasOverflow[i];
                return (
                  <figure
                    key={`base-${i}`}
                    className={`${styles.card} ${isOpen ? styles.cardExpanded : ""}`}
                    aria-expanded={isOpen}
                  >
                    <figcaption className={styles.header}>
                      <div className={styles.avatar} aria-hidden="true">
                        {t.initial ?? t.name[0]}
                      </div>
                      <span className={styles.name}>{t.name}</span>
                    </figcaption>

                    {/* Wrap the text in a ref'd box we measure for overflow */}
                    <blockquote className={styles.quote}>
                      <p ref={el => (cardRefs.current[i] = el)}>“{t.text}”</p>
                    </blockquote>

                    {/* Fade overlay only when truncated */}
                    <div className={showMore && !isOpen ? styles.fade : styles.fadeHidden} />

                    {/* Show More / Less button only if overflowing */}
                    {showMore && (
                      <button
                        type="button"
                        className={styles.moreBtn}
                        onClick={() => toggleExpanded(i)}
                        aria-label={`${isOpen ? "Collapse" : "Expand"} testimonial from ${t.name}`}
                      >
                        {isOpen ? "Show less" : "...more"}
                      </button>
                    )}
                  </figure>
                );
              })}
            </div>

            {/* Cloned, non-interactive sets to make the loop seamless */}
            {Array.from({ length: Math.max(copies - 1, 0) }).map((_, copyIdx) => (
              <div className={styles.set} key={`copy-${copyIdx}`} aria-hidden="true">
                {baseSet.map((t, i) => (
                  <figure key={`copy-${copyIdx}-${i}`} className={styles.card}>
                    <figcaption className={styles.header}>
                      <div className={styles.avatar} aria-hidden="true">
                        {t.initial ?? t.name[0]}
                      </div>
                      <span className={styles.name}>{t.name}</span>
                    </figcaption>
                    <blockquote className={styles.quote}>
                      <p>“{t.text}”</p>
                    </blockquote>
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
