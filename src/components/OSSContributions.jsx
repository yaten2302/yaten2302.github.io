import Section from "./Section";
import { OSS } from "../data";
import styles from "./OSSContributions.module.css";

export default function OSSContributions() {
  return (
    <Section id="oss" label="Open Source" title="OSS Contributions" alt>
      <div className={styles.list}>
        {OSS.map((item) => (
          <a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className={styles.item}
          >
            <div className={styles.icon}>{item.abbr}</div>
            <div className={styles.meta}>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.desc}>{item.desc}</div>
            </div>
            <span className={`${styles.badge} ${styles[item.badgeType]}`}>
              {item.badge}
            </span>
          </a>
        ))}
      </div>

      <a
        href="https://github.com/yaten2302"
        target="_blank"
        rel="noreferrer"
        className={styles.more}
      >
        <span>More contributions on GitHub</span>
        <span className={styles.moreArrow}>↗</span>
      </a>
    </Section>
  );
}
