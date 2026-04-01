import Section from "./Section";
import { PROJECTS } from "../data";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <Section id="projects" label="Projects" title="What I'm building">
      <div className={styles.grid}>
        {PROJECTS.map((p) => (
          <a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            <div className={styles.orb}>◎</div>
            <h3 className={styles.title}>{p.title}</h3>
            <p className={styles.desc}>{p.desc}</p>
            <div className={styles.tech}>
              {p.tech.map((t) => (
                <span key={t} className={styles.tag}>
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
