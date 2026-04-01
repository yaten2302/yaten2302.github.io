import Section from "./Section";
import { CONTACT } from "../data";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <Section id="contact" label="Contact" title="Let's connect">
      <p className={styles.sub}>Open to collaborations, and OSS discussions.</p>
      <div className={styles.grid}>
        {CONTACT.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noreferrer"
            className={styles.link}
          >
            <div className={styles.icon}>{c.icon}</div>
            <div className={styles.meta}>
              <span className={styles.label}>{c.label}</span>
              <span className={styles.value}>{c.value}</span>
            </div>
            <span className={styles.arrow}>↗</span>
          </a>
        ))}
      </div>
    </Section>
  );
}
