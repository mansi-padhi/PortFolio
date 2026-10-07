/**
 * Single source of truth for all portfolio content.
 *
 * Everything here is taken from the latest résumé
 * (public/resume/Mansi_Padhi_Resume.pdf, generated 2026-10-04), with one
 * exception: the current role (Analyst at Deloitte) was provided directly by
 * Mansi and is not on that résumé, so no dates, responsibilities or
 * technologies are attached to it.
 *
 * Do not add anything here that cannot be traced back to one of those sources.
 */

export const profile = {
  name: "Mansi Padhi",
  firstName: "Mansi",
  initials: "MP",
  title: "Full Stack Developer",
  currentRole: { title: "Analyst", company: "Deloitte" },
  previousRole: {
    title: "Integration Solution Engineer",
    company: "Walkover Web Solutions",
    product: "viaSocket",
  },
  location: "Pipliyahana, Indore (M.P.)",
  city: "Indore, Madhya Pradesh",
  tagline:
    "Building full-stack web applications, SaaS integrations, and workflow automation solutions.",
  email: "mansipadhi1605@gmail.com",
  phone: "+91 7000241538",
  phoneHref: "tel:+917000241538",
  links: {
    github: "https://github.com/mansi-padhi",
    linkedin: "https://www.linkedin.com/in/mansi-padhi-888b52257/",
  },
  resume: "/resume/Mansi_Padhi_Resume.pdf",
  resumeFileName: "Mansi_Padhi_Resume.pdf",
  video: "/hero/intro.mp4",
  /** Unaltered still cropped from the intro video. */
  portrait: "/hero/portrait.jpg",
} as const;

/** Résumé numbers surfaced in the hero. Each `source` says where it comes from. */
export const highlights = [
  { value: "15+", label: "End-to-end app integrations delivered", source: "Walkover Web Solutions" },
  { value: "6", label: "Core modules in Hotelator OS", source: "Hotelator OS" },
  { value: "5+", label: "Hotel workflows automated with viaSocket Embed", source: "Hotelator OS" },
] as const;

export const about = {
  heading: "Hi, I'm Mansi.",
  paragraphs: [
    "I'm a full-stack developer, currently working as an Analyst at Deloitte. I studied Electronics and Telecommunication Engineering at SGSITS Indore (B.Tech., 2022–2026).",
    "Before Deloitte, I was an Integration Solution Engineer at Walkover Web Solutions (viaSocket), where I designed and delivered 15+ end-to-end app integrations using REST APIs, webhooks and OAuth 2.0 across SaaS platforms such as Salesforce, NetSuite, Calendly and Freshsales.",
    "On my own projects I work across the stack — React.js and Next.js on the front end, Spring Boot on the back end — and I like building practical software: a hotel property management system with automated workflows, and a mental wellness platform with real-time chat.",
  ],
};

export const quickFacts = [
  { label: "Location", value: profile.location },
  { label: "Current role", value: "Analyst at Deloitte" },
  { label: "Previous role", value: "Integration Solution Engineer at Walkover Web Solutions" },
  { label: "Education", value: "B.Tech. in Electronics and Telecommunication Engineering" },
  { label: "Institute", value: "SGSITS Indore" },
  { label: "Graduation", value: "2026" },
] as const;

export const idCard = {
  front: [
    { label: "Role", value: "Analyst" },
    { label: "Company", value: "Deloitte" },
    { label: "Location", value: "Indore, Madhya Pradesh" },
    { label: "Education", value: "B.Tech., Electronics & Telecommunication Engg." },
    { label: "Institute", value: "SGSITS Indore" },
    { label: "Class of", value: "2026" },
  ],
  whatIBuild: [
    "Full-stack web applications",
    "SaaS integrations",
    "REST APIs",
    "Webhooks",
    "OAuth 2.0",
    "Workflow automation",
    "AI-powered applications",
    "Real-time applications",
  ],
};

/* ------------------------------------------------------------------ Skills */

/** Where a skill is explicitly mentioned on the résumé. */
export type SkillContext = "Walkover Web Solutions" | "Hotelator OS" | "Mental Wellness App";

export type IconKey =
  | "cplusplus" | "java" | "javascript" | "python" | "sql" | "html" | "typescript"
  | "react" | "nextjs" | "tailwind" | "springboot" | "spring" | "docker"
  | "rest" | "webhook" | "oauth" | "jwt" | "json" | "spec" | "embed" | "websocket"
  | "vscode" | "github" | "git" | "agile" | "automation"
  | "dsa" | "dbms" | "os" | "network";

export type Skill = { name: string; icon: IconKey; usedIn: SkillContext[] };
export type SkillGroup = { id: string; title: string; note?: string; skills: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    title: "Languages",
    skills: [
      { name: "C/C++", icon: "cplusplus", usedIn: [] },
      { name: "Java", icon: "java", usedIn: [] },
      { name: "JavaScript", icon: "javascript", usedIn: [] },
      { name: "Python", icon: "python", usedIn: [] },
      { name: "SQL", icon: "sql", usedIn: ["Mental Wellness App"] },
      { name: "HTML/CSS", icon: "html", usedIn: [] },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "React.js", icon: "react", usedIn: ["Hotelator OS", "Mental Wellness App"] },
      { name: "Next.js", icon: "nextjs", usedIn: ["Walkover Web Solutions", "Hotelator OS"] },
      { name: "Tailwind CSS", icon: "tailwind", usedIn: ["Hotelator OS"] },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "Spring Boot", icon: "springboot", usedIn: ["Mental Wellness App"] },
      { name: "Spring AI", icon: "spring", usedIn: [] },
    ],
  },
  {
    id: "apis",
    title: "APIs & Integration",
    skills: [
      { name: "REST APIs", icon: "rest", usedIn: ["Walkover Web Solutions", "Hotelator OS", "Mental Wellness App"] },
      { name: "Webhooks", icon: "webhook", usedIn: ["Walkover Web Solutions"] },
      { name: "OAuth 2.0", icon: "oauth", usedIn: ["Walkover Web Solutions"] },
      { name: "JWT", icon: "jwt", usedIn: ["Hotelator OS", "Mental Wellness App"] },
      { name: "JSON", icon: "json", usedIn: [] },
      { name: "API Specifications", icon: "spec", usedIn: ["Walkover Web Solutions"] },
      { name: "viaSocket Embed", icon: "embed", usedIn: ["Walkover Web Solutions", "Hotelator OS"] },
    ],
  },
  {
    id: "tools",
    title: "Tools & Development",
    skills: [
      { name: "Docker", icon: "docker", usedIn: [] },
      { name: "VS Code", icon: "vscode", usedIn: [] },
      { name: "GitHub", icon: "github", usedIn: [] },
      { name: "Git", icon: "git", usedIn: [] },
      { name: "Agile/Scrum", icon: "agile", usedIn: ["Walkover Web Solutions"] },
      { name: "Automation", icon: "automation", usedIn: ["Walkover Web Solutions", "Hotelator OS"] },
    ],
  },
  {
    id: "projects",
    title: "Also used in projects",
    note: "Not listed under Technical Skills, but named in the project stacks.",
    skills: [
      { name: "TypeScript", icon: "typescript", usedIn: ["Hotelator OS"] },
      { name: "WebSocket", icon: "websocket", usedIn: ["Mental Wellness App"] },
    ],
  },
  {
    id: "coursework",
    title: "Coursework",
    skills: [
      { name: "Data Structures and Algorithms", icon: "dsa", usedIn: [] },
      { name: "DBMS", icon: "dbms", usedIn: [] },
      { name: "Operating Systems", icon: "os", usedIn: [] },
      { name: "Computer Networks", icon: "network", usedIn: [] },
    ],
  },
];

/* ---------------------------------------------------------------- Projects */

export type Project = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  date: string;
  points: string[];
  features: string[];
  metrics: { value: string; label: string }[];
  stack: string[];
  live?: string;
  github?: string;
  mock: "hotel" | "wellness";
};

export const projects: Project[] = [
  {
    id: "hotelator",
    number: "01",
    title: "Hotelator OS",
    subtitle: "Hotel Property Management System",
    date: "Sept 2025",
    points: [
      "Covers 6 core modules — reservations, guest profiles, room management, housekeeping, maintenance and billing — in a unified dashboard.",
      "Integrated viaSocket Embed to automate 5+ hotel operation workflows: WhatsApp notifications, Gmail confirmations, Slack alerts and Google Sheets ledger entries on booking events.",
      "JWT-based authentication with per-hotel session isolation and tokenized guest check-in links for contactless self check-in.",
    ],
    features: [
      "Reservations",
      "Guest profiles",
      "Room management",
      "Housekeeping",
      "Maintenance",
      "Billing",
      "Workflow automation",
      "Contactless check-in",
    ],
    metrics: [
      { value: "100%", label: "of manual notification effort eliminated" },
      { value: "70%", label: "less front-desk manual processing" },
    ],
    stack: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "JWT", "viaSocket", "REST APIs"],
    live: "https://hotelator-os-production.up.railway.app",
    mock: "hotel",
  },
  {
    id: "wellness",
    number: "02",
    title: "Mental Wellness App",
    subtitle: "Full-stack wellness platform",
    date: "June 2025",
    points: [
      "Achieved 100% responsiveness and reduced page load time by 40% via optimized API design.",
      "Secure JWT-based authentication with role-based access control, enabling protected access for 200+ test users during the pilot phase.",
      "AI-powered chatbot and real-time chat rooms using WebSocket for peer discussions — increasing user engagement time by 60% in early user testing.",
    ],
    features: [
      "JWT authentication",
      "Role-based access control",
      "AI-powered chatbot",
      "Real-time chat rooms",
      "Peer discussions",
      "Responsive interface",
    ],
    metrics: [
      { value: "40%", label: "faster page loads" },
      { value: "200+", label: "test users in the pilot phase" },
      { value: "60%", label: "more engagement time in early testing" },
    ],
    stack: ["React.js", "Spring Boot", "SQL", "JWT", "REST API", "WebSocket"],
    mock: "wellness",
  },
];

/* -------------------------------------------------------------- Experience */

export type Role = {
  title: string;
  company: string;
  companyNote?: string;
  status: "Current" | "Previous";
  period?: string;
  points: string[];
  platforms?: string[];
  tags?: string[];
};

export const experience: Role[] = [
  {
    title: "Analyst",
    company: "Deloitte",
    status: "Current",
    points: [],
  },
  {
    title: "Integration Solution Engineer",
    company: "Walkover Web Solutions",
    companyNote: "viaSocket",
    status: "Previous",
    period: "From Dec 2025",
    points: [
      "Designed and delivered 15+ end-to-end app integrations using REST APIs, webhooks and OAuth 2.0 across SaaS platforms, improving data accessibility and reducing manual effort; enforced secure API access, reducing unauthorized requests by 35%.",
      "Built event-driven and polling-based Actions and Triggers; contributed to agile sprints, wrote API specifications, conducted code reviews and performed integration testing.",
      "Developed a production-grade hotel PMS using viaSocket Embed, embedding workflow automation into a Next.js SaaS product to trigger WhatsApp, Gmail, Slack and Google Sheets events on booking actions with zero manual effort.",
      "Optimized end-to-end workflow reliability by handling API errors, rate limits, pagination and retries; performed data-driven debugging to resolve integration failures across multiple connectors.",
    ],
    platforms: ["Salesforce", "NetSuite", "Calendly", "Freshsales"],
    tags: ["REST APIs", "Webhooks", "OAuth 2.0", "Actions & Triggers", "API Specs", "viaSocket Embed", "Integration testing"],
  },
];

/* --------------------------------------------------------------- Education */

export const education = {
  degree: {
    institute: "Shri Govindram Seksaria Institute of Science and Technology, Indore",
    short: "SGSITS Indore",
    course: "B.Tech. in Electronics and Telecommunication Engineering",
    period: "2022 – 2026",
    score: { label: "CGPA", value: "7.54/10" },
  },
  school: {
    institute: "S.I.C.A. S.S. School, Indore",
    scores: [
      { label: "Class XII", value: "94.2%", year: "2021" },
      { label: "Class X", value: "91.0%", year: "2019" },
    ],
  },
};

/* --------------------------------------------- Position of responsibility */

export const responsibilities = [
  {
    title: "Placement Manager",
    org: "Training and Placement Cell, SGSITS Indore",
    period: "Nov 2023 – May 2026",
  },
];

/* -------------------------------------------------------------- Navigation */

export const nav = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
] as const;
