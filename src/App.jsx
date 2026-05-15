import { useEffect } from "react";
import { motion as Motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Database,
  Download,
  Mail,
  Send,
  Sparkles,
} from "lucide-react";
// import NameSpotlightSection from "./NameSpotlightSection";

const navItems = ["About", "Skills", "Experience", "Projects", "Contact"];

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18A10.9 10.9 0 0 1 12 6.07c.98 0 1.96.13 2.88.39 2.18-1.49 3.14-1.18 3.14-1.18.62 1.58.23 2.75.11 3.04.73.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.39-5.24 5.67.41.36.78 1.06.78 2.13v3.17c0 .31.21.67.79.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.33V9h3.43v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.27 2.38 4.27 5.47v6.27ZM6.55 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.79 13.02H4.77V9h3.57v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
    </svg>
  );
}

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/thisisquyenbui/", icon: LinkedInIcon },
  { label: "GitHub", href: "https://github.com/Quyenn24", icon: GitHubIcon },
  { label: "Email", href: "mailto:btlquyenn@gmail.com", icon: Mail },
];

const skills = [
  {
    category: "Languages",
    items: ["Python", "SQL", "R", "Power BI", "Tableau", "Advanced Excel"],
  },
  {
    category: "Data Science",
    items: ["Machine Learning", "LLM", "Regression", "Classification", "Time Series", "A/B Testing", "Model Evaluation", "Transformer"],
  },
  {
    category: "Engineering",
    items: ["PySpark", "Databricks", "ETL/ELT", "PostgreSQL", "API Integration", "Git"],
  },
  {
    category: "Product & Frontend",
    items: ["React", "Vite", "Leaflet", "Jira", "UAT"],
  },
];

const experiences = [
  {
    role: "Graduate Data Science Intern",
    company: "King County Metro",
    period: "Jun 2025 - Present",
    summary:
      "Analyzed ridership, GTFS, service performance, and geospatial datasets for transit planning and internal analytics products.",
    impact:
      "Influenced $13M in reliability investment decisions, improved recurring Databricks workflows, and helped expand planning insights for technical and non-technical stakeholders.",
  },
  {
    role: "IT Project Management Assistant",
    company: "Seattle University",
    period: "Nov 2024 - Present",
    summary:
      "Supported enterprise system ERP implementation through analytics, project coordination, data validation, automation, UAT, and executive reporting.",
    impact:
      "Maintained 99% data accuracy during migration, validated 10,000+ records, automated reporting visibility, and improved I-9 document processing efficiency by 40%.",
  },
  {
    role: "Teaching Assistant",
    company: "Seattle University",
    period: "March 26 - Present",
    summary:
      "Supported graduate students in understanding Machine Learning concepts and Python-based workflows to real analytical problems.",
    impact:
      "Improved student learning support and earned 4.9/5.0 mid-quarter feedback by making complex machine learning concepts more practical and approachable.",
  },
  {
    role: "IT Service Desk Support",
    company: "Seattle University",
    period: "Mar 2021 - Aug 2023",
    summary:
      "Delivered campus-wide technical support while contributing to system testing, documentation, troubleshooting, and workflow standardization.",
    impact:
      "Created 30+ technical documents, resolved classroom and access issues, and supported VDI performance testing that helped improve user retention by 15%.",
  },
  {
    role: "Finance Operations Intern",
    company: "Truong Minh Hai Ltd",
    period: "Jul 2019 - Dec 2019",
    summary:
      "Connected financial, transaction, inventory, and sales data to identify performance trends and improve reporting accuracy.",
    impact:
      "Used Excel and SQL analysis to uncover opportunities that improved inventory turnover by 10% across product categories.",
  },
];

const projects = [
  {
    title: "Transit AI Analyst",
    subtitle: "LLM-powered analytics assistant for King County Metro",
    description:
      "A Streamlit-based natural language analytics tool that translates planner questions into structured transit insights and decision-ready outputs.",
    stack: ["Python", "SQL", "Streamlit", "LangChain", "Llama 3", "PostgreSQL", "GTFS/Transit Data"],
    impact: "Adopted by King County Metro; reduced manual analysis time by 35%.",
    image: null,
    video: "/conversational_ai_demo.mp4",
    github: "https://github.com/ARena18/DS_Capstone_Team2.git",
  },
  {
    title: "Best Place to Live",
    subtitle: "Seattle neighborhood scoring dashboard",
    description:
      "A geospatial decision tool ranking 94 Seattle neighborhoods by housing affordability, transit access, and nearby amenities.",
    stack: ["Python", "GeoPandas", "GTFS", "React", "Leaflet", "Vercel"],
    impact: "Built a transparent multi-factor scoring experience for neighborhood comparison.",
    image: "/best-place-to-live.png",
    live: "https://best-place-to-live-xi.vercel.app",
    github: "https://github.com/Quyenn24/best-place-to-live.git",
  },
  {
    title: "Link Ridership Dashboard",
    subtitle: "Operational transit performance reporting",
    description:
      "A Power BI analytics dashboard for station trends, monthly changes, line contribution, and ridership behavior.",
    stack: ["Power BI", "Python", "SQL", "EDA", "Dashboard Design"],
    impact: "Translated 64M+ ridership records into actionable operational insights.",
    image: "/ridership-dashboard.png",
  },
];

function GlobalHead() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = "https://fonts.googleapis.com";
    document.head.appendChild(link);

    const font = document.createElement("link");
    font.rel = "stylesheet";
    font.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap";
    document.head.appendChild(font);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(font);
    };
  }, []);

  return null;
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 26 });

  return (
    <Motion.div
      className="fixed left-0 right-0 top-0 z-[80] h-px origin-left bg-white"
      style={{ scaleX }}
    />
  );
}

function SectionHeader({
  eyebrow,
  title,
  copy,
  align = "center",
  className = "",
  titleClassName = "",
  copyClassName = "",
}) {
  const alignment = align === "left" ? "mx-0 text-left" : "mx-auto text-center";

  return (
    <Motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 max-w-3xl ${alignment} ${className}`}
    >
      <p className="text-xs font-bold uppercase tracking-[0.34em] text-zinc-500">{eyebrow}</p>
      <h2 className={`mt-4 text-4xl font-black tracking-tight text-white md:text-5xl ${titleClassName}`}>
        {title}
      </h2>
      {copy && <p className={`mt-5 text-base leading-8 text-zinc-400 ${copyClassName}`}>{copy}</p>}
    </Motion.div>
  );
}

function ButtonLink({ href, children, variant = "dark" }) {
  const classes =
    variant === "light"
      ? "border-white bg-white text-black hover:bg-zinc-200"
      : "border-white/15 bg-white/5 text-white hover:border-white/35 hover:bg-white/10";

  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-bold transition duration-300 ${classes}`}
    >
      {children}
    </a>
  );
}

export default function App() {
  return (
    <>
      <GlobalHead />
      <ScrollProgress />

      <div className="min-h-screen bg-black font-[Inter] text-zinc-100 selection:bg-white selection:text-black">
        <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.12),transparent_24%),radial-gradient(circle_at_78%_4%,rgba(255,255,255,0.08),transparent_22%),linear-gradient(135deg,rgba(255,255,255,0.06)_0_1px,transparent_1px_100%)] bg-[length:auto,auto,28px_28px]" />

        <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:px-6">
          <Motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/55 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-6"
          >
            <a href="#home" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-black text-black">
              QB
            </a>
            <nav className="hidden items-center gap-7 text-xs font-bold uppercase tracking-[0.18em] text-zinc-400 lg:flex">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-white">
                  {item}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              className="rounded-full bg-white px-5 py-2.5 text-xs font-black uppercase tracking-[0.16em] text-black transition hover:bg-zinc-200"
            >
              Contact Me
            </a>
          </Motion.div>
        </header>

        <main className="relative z-10">
          <section id="home" className="relative min-h-screen overflow-hidden pt-24">
            <div className="absolute inset-y-0 right-0 hidden w-[56%] bg-white lg:block [clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]" />
            <div className="mx-auto grid min-h-[calc(100vh-6rem)] w-full max-w-none items-stretch px-5 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-12">
              <Motion.div
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col justify-center py-16 lg:pl-10 lg:pr-20"
              >
                <p className="mb-5 text-2xl font-bold text-zinc-300">Hi, I am</p>
                <h1 className="max-w-4xl text-5xl font-black leading-[0.92] tracking-tight text-white sm:text-7xl lg:text-8xl">
                  Quyen Bui
                </h1>
                <p className="mt-5 text-lg font-semibold text-zinc-300 sm:text-xl">
                  Data Analyst | Data Scientist | Data Engineer
                </p>
                <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400">
                  I build analytical products that turn complex datasets into clear decisions, blending a finance foundation with modern data science, automation, and product-minded engineering.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <ButtonLink href="#projects" variant="light">
                    View Projects <ArrowUpRight className="h-4 w-4" />
                  </ButtonLink>
                  <ButtonLink href="/resume_QB.pdf">
                    Resume <Download className="h-4 w-4" />
                  </ButtonLink>
                </div>
                <div className="mt-14 flex items-center gap-3">
                  {socialLinks.map((item) => {
                    const SocialIcon = item.icon;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                        aria-label={item.label}
                        className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-300 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white hover:text-black"
                      >
                        <SocialIcon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </Motion.div>

              <Motion.div
                initial={{ opacity: 0, x: 42 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex min-h-[560px] items-end justify-center overflow-visible md:min-h-[700px] lg:min-h-[calc(100vh-6rem)] lg:justify-end"
              >
                <img
                  src="/profile.png"
                  alt="Professional portrait of Quyen Bui"
                  className="relative z-10 h-[900px] w-auto max-w-none translate-x-6 object-contain object-bottom drop-shadow-[0_34px_46px_rgba(0,0,0,0.38)] sm:h-[660px] md:h-[760px] lg:h-[min(920px,92vh)] lg:translate-x-24 xl:h-[min(1000px,94vh)] xl:translate-x-[none] 2xl:h-[min(1080px,95vh)]"
                />
              </Motion.div>
            </div>
          </section>

          <section id="about" className="px-5 py-24 sm:px-6 lg:py-32">
            <div className="mx-auto grid max-w-7xl items-start gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <SectionHeader
                eyebrow="About Me"
                title="My hobbies and my work share the same logic."
                copy="Whether I'm building a data pipeline, baking bread, or training aerial moves, I'm drawn to the same things: precision, iteration, and figuring out why something works."
                align="left"
                className="lg:mb-0 lg:pt-6 lg:pr-8"
                titleClassName="max-w-2xl text-5xl leading-[0.92] md:text-[4rem] lg:text-[4.6rem]"
                copyClassName="mt-8 max-w-lg text-[1.15rem] leading-9 text-zinc-400"
              />
              <Motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 backdrop-blur sm:p-8"
              >
                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    [
                      "Analytical",
                      "I approach data with a product mindset, focusing on what decisions need to be made and how data can support them.",
                    ],
                    [
                      "Creative",
                      "Baking reminds me that good outcomes come from precision, iteration, and intuition working together.",
                    ],
                    [
                      "Disciplined",
                      "Aerial dance taught me patience, resilience, and how to stay steady while doing hard things.",
                    ],
                  ].map(([title, copy]) => (
                    <div key={title} className="rounded-2xl border border-white/10 bg-black/30 p-5 lg:p-6">
                      <p className="font-bold text-white">{title}</p>
                      <p className="mt-2 text-sm leading-6 text-zinc-400">{copy}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-3xl border border-white/10 bg-black/35 p-6 lg:p-7">
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-zinc-500">
                    How I approach problems
                  </p>
                  <h3 className="mt-3 text-2xl font-black tracking-tight text-white">
                    I care about solving real problems, not just analyzing data.
                  </h3>
                  <p className="mt-4 text-base leading-8 text-zinc-400">
                    I've learned that the most useful thing data can do is make a decision easier for someone who has to make it under pressure. I carry that into every tool and system I build: if it doesn't reduce friction for the person using it, it's not done yet. I enjoy work that starts with ambiguity and ends with clarity.
                  </p>
                </div>
              </Motion.div>
            </div>
          </section>

          <section id="skills" className="border-y border-white/10 bg-white px-5 py-24 text-black sm:px-6 lg:py-32">
            <div className="mx-auto max-w-7xl">
              <div className="mb-12 max-w-3xl">
                <p className="text-xs font-black uppercase tracking-[0.34em] text-zinc-500">Skills</p>
                <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Technical stack with business context.</h2>
              </div>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {skills.map((group, index) => (
                  <Motion.article
                    key={group.category}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="group rounded-[1.75rem] border border-zinc-200 bg-zinc-50 p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-black hover:bg-black hover:text-white hover:shadow-2xl"
                  >
                    <h3 className="text-xl font-black">{group.category}</h3>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-bold text-zinc-700 transition group-hover:border-white/15 group-hover:bg-white/10 group-hover:text-zinc-100"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </Motion.article>
                ))}
              </div>
            </div>
          </section>

          <section id="experience" className="px-5 py-24 sm:px-6 lg:py-32">
            <div className="mx-auto max-w-7xl">
              <SectionHeader
                eyebrow="Experience"
                title="A timeline of practical impact."
                copy="Roles across transit analytics, enterprise systems, IT support, project management, and finance operations."
              />
              <div className="relative mx-auto max-w-5xl">
                <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-white via-white/30 to-transparent md:block" />
                <div className="space-y-6">
                  {experiences.map((experience, index) => (
                    <Motion.article
                      key={`${experience.role}-${experience.company}`}
                      initial={{ opacity: 0, x: -24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="relative md:pl-14"
                    >
                      <span className="absolute left-[10px] top-8 hidden h-3 w-3 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.08)] md:block" />
                      <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07]">
                        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                          <div>
                            <p className="text-sm font-bold uppercase tracking-[0.22em] text-zinc-500">{experience.company}</p>
                            <h3 className="mt-2 text-2xl font-black text-white">{experience.role}</h3>
                          </div>
                          <span className="w-fit rounded-full border border-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-zinc-400">
                            {experience.period}
                          </span>
                        </div>
                        <p className="mt-5 leading-7 text-zinc-400">{experience.summary}</p>
                        <p className="mt-4 rounded-2xl border border-white/10 bg-black/35 p-4 text-sm leading-7 text-zinc-300">
                          <span className="font-bold text-white">Impact: </span>
                          {experience.impact}
                        </p>
                      </div>
                    </Motion.article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="border-y border-white/10 bg-zinc-950 px-5 py-24 sm:px-6 lg:py-32">
            <div className="mx-auto max-w-7xl">
              <SectionHeader
                eyebrow="Featured Projects"
                title="Analytical products with a polished surface."
                copy="Project cards combine the problem, build, stack, and measurable impact so hiring teams can quickly see the shape of the work."
              />
              <div className="grid gap-6 lg:grid-cols-2">
                {projects.map((project, index) => (
                  <Motion.article
                    key={project.title}
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/25 transition duration-300 hover:-translate-y-2 hover:border-white/25"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-black">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={`${project.title} preview`}
                          className="h-full w-full object-cover object-top opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center p-8">
                          <div className="grid h-full w-full grid-cols-3 gap-3 opacity-70">
                            {Array.from({ length: 9 }).map((_, cellIndex) => (
                              <span
                                key={cellIndex}
                                className="rounded-2xl border border-white/10 bg-white/[0.04]"
                              />
                            ))}
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
                      <div className="absolute bottom-5 left-5 right-5">
                        <p className="text-xs font-black uppercase tracking-[0.28em] text-zinc-400">{project.subtitle}</p>
                        <h3 className="mt-2 text-3xl font-black tracking-tight text-white">{project.title}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="leading-7 text-zinc-400">{project.description}</p>
                      <p className="mt-5 rounded-2xl border border-white/10 bg-black/35 p-4 text-sm leading-7 text-zinc-300">
                        <span className="font-bold text-white">Impact: </span>
                        {project.impact}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-zinc-300">
                            {item}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6 flex flex-wrap gap-3">
                        {project.live && (
                          <ButtonLink href={project.live} variant="light">
                            Demo <ArrowUpRight className="h-4 w-4" />
                          </ButtonLink>
                        )}
                        {project.video && (
                          <ButtonLink href={project.video}>
                            Watch Demo <ArrowUpRight className="h-4 w-4" />
                          </ButtonLink>
                        )}
                        {project.github && (
                          <ButtonLink href={project.github}>
                            GitHub <GitHubIcon className="h-4 w-4" />
                          </ButtonLink>
                        )}
                      </div>
                    </div>
                  </Motion.article>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="px-5 py-24 sm:px-6 lg:py-32">
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/25">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.34em] text-zinc-500">Contact</p>
                  <h2 className="mt-5 text-4xl font-black tracking-tight text-white md:text-6xl">
                    Let&apos;s build something useful.
                  </h2>
                  <p className="mt-6 text-base leading-8 text-zinc-400">
                    Open to data analyst, data scientist, data engineer, business systems, and product-focused roles where analytics becomes action.
                  </p>
                </div>
                <div className="mt-10 flex flex-wrap gap-3">
                  {socialLinks.map((item) => {
                    const SocialIcon = item.icon;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm font-bold text-zinc-300 transition hover:border-white/30 hover:bg-white hover:text-black"
                      >
                        <SocialIcon className="h-4 w-4" />
                        {item.label}
                      </a>
                    );
                  })}
                </div>
              </div>

              <Motion.form
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-[2rem] border border-white/10 bg-white p-6 text-black shadow-2xl shadow-black/25 sm:p-8"
                action="mailto:btlquyenn@gmail.com"
                method="post"
                encType="text/plain"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-bold">
                    Name
                    <input className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none transition focus:border-black focus:bg-white" name="name" placeholder="Your name" />
                  </label>
                  <label className="grid gap-2 text-sm font-bold">
                    Email
                    <input className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none transition focus:border-black focus:bg-white" name="email" type="email" placeholder="you@email.com" />
                  </label>
                </div>
                <label className="mt-5 grid gap-2 text-sm font-bold">
                  Message
                  <textarea className="min-h-40 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none transition focus:border-black focus:bg-white" name="message" placeholder="Tell me about the opportunity, project, or collaboration." />
                </label>
                <button
                  type="submit"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-zinc-800 sm:w-auto"
                >
                  Send Message <Send className="h-4 w-4" />
                </button>
              </Motion.form>
            </div>
          </section>

          {/* <NameSpotlightSection /> */}

        </main>

        <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-zinc-500 sm:px-6">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
            <p>Designed and built by Quyen Bui.</p>
            <div className="flex items-center gap-2 text-zinc-600">
              <BriefcaseBusiness className="h-4 w-4" />
              <span>Data + Product + Engineering portfolio</span>
              <Database className="h-4 w-4" />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
