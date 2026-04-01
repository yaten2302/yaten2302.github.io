import Section from "./Section";
import { EXPERIENCE } from "../data";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <Section id="experience" label="Experience" title="Where I've worked" alt>
      <div className={styles.list}>
        {EXPERIENCE.map((e) => (
          <div key={e.role} className={styles.item}>
            <div className={styles.dot} />
            <div className={styles.role}>{e.role}</div>
            <div className={styles.org}>{e.org}</div>
            <div className={styles.date}>{e.date}</div>
            <div className={styles.desc}>
              {e.bullets ? (
                <ul>
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : (
                <p>{e.desc}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
