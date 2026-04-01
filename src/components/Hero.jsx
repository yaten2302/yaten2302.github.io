import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.tag}>
          <span className={styles.dot} />
          Open to opportunities
        </div>
        <h1 className={styles.title}>
          Yaten Dhingra
          <br />
          <em>Backend Engineer &amp; OSS Contributor</em>
        </h1>
        <p className={styles.sub}>
          Pre-final year CSE student from New Delhi, India. OpenTelemetry Org
          Member &amp; Code Owner for the{" "}
          <a
            href="https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter/awscloudwatchlogsexporter#aws-cloudwatch-logs-exporter"
            target="_blank"
            rel="noreferrer"
            className={styles.externalLink}
          >
            AWSCloudWatchLogsExporter
          </a>
          . Building in Go, contributing to the CNCF ecosystem.
        </p>
        <div className={styles.links}>
          <a
            href="https://github.com/yaten2302"
            target="_blank"
            rel="noreferrer"
            className={`${styles.btn} ${styles.primary}`}
          >
            GitHub ↗
          </a>
          <a
            href="https://linkedin.com/in/yaten2302"
            target="_blank"
            rel="noreferrer"
            className={`${styles.btn} ${styles.ghost}`}
          >
            LinkedIn ↗
          </a>
          <a
            href="mailto:yaten598@gmail.com"
            className={`${styles.btn} ${styles.ghost}`}
          >
            Email me
          </a>
        </div>
      </div>
    </section>
  );
}
