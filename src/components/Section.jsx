import styles from "./Section.module.css";

export default function Section({ id, label, title, alt, children }) {
  return (
    <section id={id} className={`${styles.section} ${alt ? styles.alt : ""}`}>
      <div className={styles.container}>
        <p className={styles.label}>{label}</p>
        <h2 className={styles.title}>{title}</h2>
        {children}
      </div>
    </section>
  );
}
