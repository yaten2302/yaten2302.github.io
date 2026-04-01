export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "OSS", href: "#oss" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Talks", href: "#talks" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { num: "OTel", label: "Org Member & Code Owner" },
  { num: "KCD", label: "KCD Delhi'26 Volunteer" },
  { num: "LiFT", label: "Scholar '25 · Linux Foundation" },
  { num: "CNCG ND", label: "Volunteer @ CNCG New Delhi" },
];

export const SKILLS = [
  "Go",
  "JavaScript",
  "TypeScript",
  "React",
  "Docker",
  "MongoDB",
  "OpenTelemetry",
  "Kubernetes",
  "Distributed Systems",
];

export const OSS = [
  {
    abbr: "OTel",
    title: "OpenTelemetry",
    desc: "Fixed critical `role_arn` bug in AWSCloudWatchLogsExporter that was blocking IBM Software Group's production release planning.",
    badge: "Code Owner",
    badgeType: "green",
    href: "https://github.com/open-telemetry/opentelemetry-collector-contrib/pull/42541",
  },
  {
    abbr: "Sup",
    title: "Supabase",
    desc: "Added a CLI flag to retrieve the Postgres DB URL via `branches get` command, reducing manual env management in CI/CD workflows.",
    badge: "Contributor",
    badgeType: "gray",
    href: "https://github.com/supabase/cli/pull/2996",
  },
  {
    abbr: "Tpy",
    title: "Taipy",
    desc: "Built a metrics visual component for a Python AI/data framework with linear, circular, and raw modes, flexible API, 90%+ test coverage and documentation.",
    badge: "Contributor",
    badgeType: "gray",
    href: "https://github.com/Avaiga/taipy/pull/1303",
  },
];

export const PROJECTS = [
  {
    title: "otel-playground",
    desc: "Distributed tracing sandbox across HTTP, Kafka, and PostgreSQL via Jaeger. Helps developers replicate and debug production-like OTel scenarios locally.",
    tech: ["Go", "OpenTelemetry", "Jaeger", "Kafka", "PostgreSQL"],
    href: "https://github.com/yaten2302/otel-playground",
  },
  {
    title: "DBVault",
    desc: "Go CLI for unified database backup, restore, and cloud storage. Supports any database type with a clean, extensible interface.",
    tech: ["Go", "CLI", "Cloud Storage", "Databases"],
    href: "https://github.com/yaten2302/dbvault",
  },
];

export const EXPERIENCE = [
  {
    role: "Contributing Member & Code Owner",
    org: "OpenTelemetry",
    date: "October 2025 – Present",
    bullets: [
      "Code owner of the AWSCloudWatchLogsExporter, reviewing PRs and maintaining exporter stability.",
      "Fixed a critical role_arn issue affecting cross-account AWS deployments, unblocking IBM Software Group's release planning.",
    ],
  },
  {
    role: "Software Engineering Intern",
    org: "ERP Manthan (VSET)",
    date: "June 2025 – July 2025",
    bullets: [
      "Worked on ERP Manthan, a centralized college ERP portal; independently built a student registration module to manage and store student data across multiple batches and courses.",
    ],
  },
];

export const TALKS = [
  {
    num: "01",
    title:
      "Observability Made Simple with OpenTelemetry: From Usage to Contribution",
    venue: "CNCG Noida",
    status: "Talk",
    statusType: "talk",
    href: "https://docs.google.com/presentation/d/1kkBEsHNUxt82wcoN1yEReRuKXcB3WZSL/edit?usp=drive_link&ouid=109655936400233442502&rtpof=true&sd=true",
  },
  {
    num: "02",
    title:
      "Observability Made Simple with OpenTelemetry: From Usage to Contribution",
    venue: "PyDelhi",
    status: "Talk",
    statusType: "talk",
    href: "https://docs.google.com/presentation/d/1Z9BCd_LKbmZeUB0gb0mOt3T0wePIwrBB/edit?usp=drive_link&ouid=109655936400233442502&rtpof=true&sd=true",
  },
  {
    num: "03",
    title: "KCD Delhi 2026 - Volunteer",
    venue: "Kubernetes Community Days",
    status: "Volunteer",
    statusType: "volunteer",
    href: "https://www.kcddelhi.com/",
  },
  {
    num: "04",
    title: "CNCG New Delhi",
    venue: "Cloud Native Computing Groups",
    status: "Volunteer",
    statusType: "volunteer",
    href: null,
  },
];

export const CONTACT = [
  {
    icon: "GH",
    label: "GitHub",
    value: "yaten2302",
    href: "https://github.com/yaten2302",
  },
  {
    icon: "in",
    label: "LinkedIn",
    value: "yaten2302",
    href: "https://linkedin.com/in/yaten2302",
  },
  {
    icon: "@",
    label: "Email",
    value: "yaten598@gmail.com",
    href: "mailto:yaten598@gmail.com",
  },
];
