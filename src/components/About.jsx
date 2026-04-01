import Section from "./Section";
import { STATS, SKILLS } from "../data";
import styles from "./About.module.css";

export default function About() {
  return (
    <Section id="about" label="About" title="Who I am">
      <p className={styles.bio}>
        I'm a backend-focused engineer passionate about distributed systems,
        observability, and open source. I contribute a lot to OSS especially
        CNCF projects like, OpenTelemetry, Harbor, and ArgoCD. I'm an organising
        team member for KCD Delhi 2026 and an active volunteer with CNCG New
        Delhi.
      </p>

      <div className={styles.grid}>
        {STATS.map((s) => (
          <div key={s.num} className={styles.stat}>
            <span className={styles.num}>{s.num}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      <div className={styles.skillRow}>
        {SKILLS.map((s) => (
          <span key={s} className={styles.skill}>
            {s}
          </span>
        ))}
      </div>
    </Section>
  );
}
