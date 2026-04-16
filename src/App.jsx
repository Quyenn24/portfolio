import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, ExternalLink, Sparkles, BarChart3, Database, Map, BrainCircuit, CakeSlice, Stars, ChevronRight, Download } from "lucide-react";

const projects = [
  {
    title: "Conversational AI for Transit Analytics",
    subtitle: "LLM-powered analytics assistant",
    description:
      "A capstone project focused on turning complex transit analysis into a more intuitive workflow by combining natural language interaction, analytical tooling, and visual outputs.",
    impact: [
      "Reduced manual analysis effort",
      "Connected LLM-driven querying with analytics tasks",
      "Built for real-world transit planning use cases",
    ],
    stack: ["Python", "LLMs", "Data Analysis", "Visualization", "Team Project"],
    href: "https://github.com/ARena18/DS_Capstone_Team2.git",
    accent: "from-fuchsia-200 via-pink-100 to-white",
  },
  {
    title: "Best Place to Live",
    subtitle: "Geospatial neighborhood scoring platform",
    description:
      "An end-to-end analytics project that ranks Seattle neighborhoods by combining housing affordability, transit access, and local amenities into one interactive decision-making experience.",
    impact: [
      "Scored 94 Seattle neighborhoods",
      "Combined housing, GTFS transit, and amenity data",
      "Built an interactive map-based frontend for exploration",
    ],
    stack: ["Python", "GeoPandas", "React", "Vite", "Leaflet", "CSV/GeoJSON"],
    href: "https://github.com/Quyenn24/best-place-to-live.git",
    accent: "from-emerald-200 via-teal-100 to-white",
  },
  {
    title: "Link Ridership Performance",
    subtitle: "Transit analytics with business impact",
    description:
      "A polished ridership analytics dashboard built from raw service and demand data to help planners understand trends, station performance, and daily ridership behavior.",
    impact: [
      "Analyzed 64M+ total ridership records",
      "Tracked line contribution, station trends, and MoM changes",
      "Designed for operational monitoring and planning decisions",
    ],
    stack: ["Power BI", "Python", "SQL", "EDA", "Dashboard Design"],
    href: "#ridership",
    accent: "from-cyan-200 via-sky-100 to-white",
  },
];

const experiences = [
  {
    role: "Teaching Assistant",
    company: "Seattle University",
    period: "March 2025 – Present",
    bullets: [
      "Guided 25+ graduate students in Machine Learning core concepts including regression, classification, clustering, and model evaluation",
      "Held weekly office hours and provided individualized feedback on Python-based assignments and end-to-end ML pipeline projects",
    ],
  },
  {
    role: "Graduate Data Science Intern",
    company: "King County Metro",
    period: "Jun 2025 – Present",
    bullets: [
      "Owned the full analytics lifecycle for Link ridership, from data cleaning and feature engineering through dashboard delivery.",
      "Built reusable Python ETL pipelines for geospatial and community asset data with validation workflows in Databricks.",
      "Delivered insights and decision-support tools used by planners for service planning and operational analysis.",
    ],
  },
  {
    role: "Project Management Assistant",
    company: "Seattle University",
    period: "Nov 2024 – Present",
    bullets: [
      "Built and maintained Power BI dashboards to analyze campus hardware and software usage patterns.",
      "Automated recurring documentation workflows using Power Automate, reducing manual effort and improving consistency.",
      "Supported project delivery with Agile and Waterfall methods while keeping milestones and stakeholders aligned.",
    ],
  },
  {
    role: "IT Service Desk Support",
    company: "Seattle University",
    period: "Mar 2021 – Aug 2023",
    bullets: [
      "Resolved software, application, and operating system issues across 250 classrooms and support channels.",
      "Created training materials and onboarding documentation for student employees.",
      "Supported internal system testing, rollout, and technical documentation for campus tools.",
    ],
  },
];

const skills = [
  "Python",
  "SQL",
  "R",
  "React",
  "HTML",
  "Typescript",
  "Databricks",
  "Power BI",
  "Tableau",
  "ArcGIS",
  "GeoPandas",
  "ETL Pipelines",
  "Statistical Modeling",
  "Predictive Modeling",
  "Feature Engineering",
  "API Integration",
  "Data Quality Validation",
];

const values = [
  {
    icon: <BrainCircuit className="h-5 w-5" />,
    title: "Analytical",
    text: "Data is my language, insights are my output",
  },
  {
    icon: <CakeSlice className="h-5 w-5" />,
    title: "Creative",
    text: "Baking reminds me that good outcomes come from precision, iteration, and intuition working together.",
  },
  {
    icon: <Stars className="h-5 w-5" />,
    title: "Disciplined",
    text: "Aerial dance taught me patience, resilience, and how to stay steady while doing hard things.",
  },
];

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-rose-500">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-base leading-7 text-slate-600">{description}</p> : null}
    </div>
  );
}

function Chip({ children }) {
  return (
    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(244,114,182,0.12),_transparent_30%),radial-gradient(circle_at_right,_rgba(192,132,252,0.12),_transparent_28%),linear-gradient(to_bottom,_#fff7fb,_#ffffff)] text-slate-800">
      <header className="sticky top-0 z-40 border-b border-white/70 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <p className="text-lg font-semibold tracking-tight text-slate-900">Quyen Bui</p>
            <p className="text-sm text-slate-500">Data Scientist · Data Analyst · Software Development</p>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#projects" className="transition hover:text-slate-900">Projects</a>
            <a href="#experience" className="transition hover:text-slate-900">Experience</a>
            <a href="#about" className="transition hover:text-slate-900">About</a>
            <a href="#skills" className="transition hover:text-slate-900">Skills</a>
            <a href="#contact" className="transition hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pt-20">
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-medium text-rose-700">
                <Sparkles className="h-4 w-4" />
                A Data Scienctist making data tell its story
              </div>
              
              <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-slate-950 md:text-6xl">
                Hi, I'm Quyen Bui
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                I build data tools that make work easier and decisions sharper. My work spans analytics, geospatial data, dashboards, and automation — always with an eye toward business impact and human-centered design.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-rose-500 to-fuchsia-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-rose-200/60 transition hover:-translate-y-0.5"
                >
                  View Projects <ChevronRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5"
                >
                  Contact Me
                </a>
                <a
                  href="/resume.pdf"
                  className="inline-flex items-center gap-2 rounded-2xl border border-rose-200 bg-rose-50 px-5 py-3 text-sm font-medium text-rose-700 shadow-sm transition hover:-translate-y-0.5"
                >
                  Resume <Download className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Chip>Python</Chip>
                <Chip>SQL</Chip>
                <Chip>Power BI</Chip>
                <Chip>Geospatial Analytics</Chip>
                <Chip>ETL Pipelines</Chip>
                <Chip>Data Storytelling</Chip>
                <Chip>Creative Problem Solving</Chip>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-teal-200/50 blur-2xl" />
            <div className="absolute -bottom-4 right-0 h-36 w-36 rounded-full bg-fuchsia-200/40 blur-3xl" />

            <div className="relative overflow-hidden rounded-[28px] border border-white/70 bg-white/80 p-4 shadow-2xl shadow-slate-200/70 backdrop-blur">
              <div className="rounded-[22px] border border-slate-200 bg-slate-50 p-3">
                <div className="mb-3 flex items-center gap-2 px-1">
                  <span className="h-3 w-3 rounded-full bg-rose-300" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-300" />
                </div>

                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  <img
                    src="/profile.png"
                    alt="Quyen Bui porttrait"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-2xl font-semibold text-slate-900">64M+</p>
                  <p className="mt-1 text-sm text-slate-500">Ridership analyzed</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-2xl font-semibold text-slate-900">94</p>
                  <p className="mt-1 text-sm text-slate-500">Neighborhoods scored</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-2xl font-semibold text-slate-900">27K+</p>
                  <p className="mt-1 text-sm text-slate-500">Amenities processed</p>
                </div>
              </div> */}
            </div>
          </motion.div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <SectionTitle
            eyebrow="About me"
            title="More than a technical profile"
            description="I care about thoughtful work, curiosity, and building a career that blends rigor with creativity."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-slate-100 p-3 text-slate-700">{item.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">My perspective</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
                  Data work should feel rigorous, useful, and human.
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  I am especially interested in roles where I can bridge analytics with product thinking, business decisions,
                  and process improvement. My background includes dashboards, automation, geospatial analysis, and decision support.
                  I enjoy work that starts with ambiguity and ends with clarity.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <BarChart3 className="h-5 w-5 text-slate-700" />
                  <p className="mt-3 font-medium text-slate-900">Analytics</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Dashboards, trend analysis, KPI framing, and stakeholder-friendly insights.</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5">
                  <Database className="h-5 w-5 text-slate-700" />
                  <p className="mt-3 font-medium text-slate-900">Data pipelines</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">ETL workflows, data validation, transformation, and scalable processing.</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5">
                  <Map className="h-5 w-5 text-slate-700" />
                  <p className="mt-3 font-medium text-slate-900">Geospatial</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Location intelligence, neighborhood scoring, transit coverage, and map-based products.</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5">
                  <Sparkles className="h-5 w-5 text-slate-700" />
                  <p className="mt-3 font-medium text-slate-900">Creative edge</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">I care about visual polish, storytelling, and making analytical work feel memorable.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <SectionTitle
            eyebrow="Selected work"
            title="Projects that show how I think"
            // description="I like projects that combine technical depth with clear decision-making value. These are the ones I would want a recruiter or hiring manager to remember."
          />

          <div className="grid gap-6">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm"
              >
                <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className={`bg-gradient-to-br ${project.accent} p-8`}>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Featured project</p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">{project.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{project.subtitle}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span key={item} className="rounded-full border border-white/70 bg-white/70 px-3 py-1 text-sm text-slate-700 backdrop-blur">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-8">
                    <p className="text-base leading-8 text-slate-600">{project.description}</p>
                    <div className="mt-6">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Highlights</p>
                      <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
                        {project.impact.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-rose-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-7 flex flex-wrap gap-4">
                      <a
                        href={project.href}
                        target={project.href.startsWith("http") ? "_blank" : undefined}
                        rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                        className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5"
                      >
                        {project.href.startsWith("http") ? "View GitHub" : "View Preview"}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
        
        <section id="experience" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <SectionTitle
            eyebrow="Experience"
            title="Work that built my foundation"
            description="Real-world experience in analytics, automation, and decision support"
          />

          <div className="grid gap-6">
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.role}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[28px] border border-rose-100 bg-white p-7 shadow-sm"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{exp.role}</h3>
                    <p className="mt-1 text-sm font-medium text-rose-500">{exp.company}</p>
                  </div>
                  <span className="rounded-full bg-rose-50 px-4 py-2 text-sm text-slate-600">{exp.period}</span>
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-fuchsia-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <SectionTitle
            eyebrow="Skills"
            title="Technical strengths"
            description="A mix of analytics, data engineering, full stack developer, and product-minded execution."
          />

          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-900 to-rose-950 px-8 py-10 text-white shadow-xl shadow-rose-200/30 md:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-200">Let’s connect</p>
            <div className="mt-4 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  I am open to opportunities in data science, software development, and QA-focused roles.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                  I am especially excited about roles where I can build analytical systems, improve data quality,
                  create dashboards, and support better decision-making across teams.
                </p>
              </div>

              <div className="grid gap-4 text-sm">
                <a href="mailto:btlquyenn@gmail.com" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                  <Mail className="h-5 w-5 text-rose-200" />
                  <span>btlquyenn@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <MapPin className="h-5 w-5 text-rose-200" />
                  <span>Seattle, WA</span>
                </div>
                <a
                  href="https://github.com/Quyenn24"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                >
                  <span className="font-medium text-rose-200">GitHub</span>
                  <span>github.com/Quyenn24</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
