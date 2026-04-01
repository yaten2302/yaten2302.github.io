import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>Built by Yaten Dhingra · 2026</span>
      <a
        href="https://github.com/yaten2302"
        target="_blank"
        rel="noreferrer"
        className={styles.link}
      >
        github.com/yaten2302 ↗
      </a>
    </footer>
  );
}
