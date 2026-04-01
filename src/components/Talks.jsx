import Section from "./Section";
import { TALKS } from "../data";
import styles from "./Talks.module.css";

const statusClass = { talk: "talk", volunteer: "volunteer" };

export default function Talks() {
  return (
    <Section id="talks" label="Talks & Community" title="Speaking & Events">
      <div className={styles.list}>
        {TALKS.map((t) => {
          const Tag = t.href ? "a" : "div";
          const linkProps = t.href
            ? { href: t.href, target: "_blank", rel: "noreferrer" }
            : {};
          return (
            <Tag
              key={t.num}
              className={`${styles.item} ${t.href ? styles.clickable : ""}`}
              {...linkProps}
            >
              <span className={styles.num}>{t.num}</span>
              <div className={styles.info}>
                <div className={styles.title}>{t.title}</div>
                <div className={styles.venue}>{t.venue}</div>
              </div>
              <span
                className={`${styles.status} ${styles[statusClass[t.statusType]]}`}
              >
                {t.status}
              </span>
            </Tag>
          );
        })}
      </div>
    </Section>
  );
}
