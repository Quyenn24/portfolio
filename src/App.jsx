import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import {
  Mail,
  Sparkles,
  BarChart3,
  Database,
  Map,
  BrainCircuit,
  CakeSlice,
  Stars,
  ChevronRight,
  Download,
} from "lucide-react";

// DATA
// const projects = [
//   {
//     title: "Conversational AI for Transit Analytics",
//     subtitle: "LLM-powered analytics assistant",
//     description:
//       "A capstone project focused on turning complex transit analysis into a more intuitive workflow by combining natural language interaction, analytical tooling, and visual outputs.",
//     impact: [
//       "Reduced manual analysis effort",
//       "Connected LLM-driven querying with analytics tasks",
//       "Built for real-world transit planning use cases",
//     ],
//     stack: ["Python", "LLMs", "Streamlit", "Data Analysis", "Visualization"],
//     href: "https://github.com/ARena18/DS_Capstone_Team2.git",
//     video: "/conversational_ai_demo.mp4",
//     accent: "from-emerald-200 via-green-100 to-teal-50",
//   },
//   {
//     title: "Best Place to Live",
//     subtitle: "Geospatial neighborhood scoring platform",
//     description:
//       "An end-to-end analytics project that ranks Seattle neighborhoods by combining housing affordability, transit access, and local amenities into one interactive decision-making experience.",
//     impact: [
//       "Scored 94 Seattle neighborhoods",
//       "Combined housing, GTFS transit, and amenity data",
//       "Built an interactive map-based frontend for exploration",
//     ],
//     stack: ["Python", "GeoPandas", "React", "Vite", "Leaflet", "HTML"],
//     href: "https://github.com/Quyenn24/best-place-to-live.git",
//     live: "https://best-place-to-live-xi.vercel.app",
//     accent: "from-teal-200 via-cyan-100 to-white",
//     image: "/best-place-to-live.png"
//   },
//   {
//     title: "Link Ridership Performance",
//     subtitle: "Transit analytics with business impact",
//     description:
//       "A polished ridership analytics dashboard built from raw ridership and demand data to help planners understand over-time trends, station performance, and daily ridership behavior.",
//     impact: [
//       "Analyzed 64M+ total ridership records",
//       "Tracked line contribution, station trends, and MoM changes",
//       "Designed for operational monitoring and planning decisions",
//     ],
//     stack: ["Power BI", "Python", "SQL", "EDA", "Dashboard Design"],
//     href: null,
//     accent: "from-green-200 via-emerald-100 to-white",
//     image: "/ridership-dashboard.png",
//   },
// ];

const projects = [
  {
    title: "AI-Powered Analytics Tool",
    subtitle: "LLM-powered transit analytics assistant",
    description:
      "A capstone project for King County Metro that turns natural language questions into structured analytical outputs for transit planning use cases.",

    problem:
      "Transit planners needed faster access to complex service and performance insights without relying on repeated manual analysis or technical intermediaries.",

    role:
      "I worked across product discovery, analytics design, and technical implementation.",

    built: [
      "Built a Streamlit-based natural language query interface.",
      "Designed LLM-powered tool-calling workflows using Ollama.",
      "Connected user questions to structured analytical tools and transit datasets.",
      "Formatted outputs for planner-friendly interpretation and decision support."
    ],

    technicalScope: [
      "Python",
      "Streamlit",
      "Ollama",
      "LLM Tool Calling",
      "Transit Data",
      "Data Validation"
    ],

    productScope: [
      "Stakeholder Requirements",
      "Feature Prioritization",
      "Planner Use Cases",
      "Self-Service Analytics",
      "Usability"
    ],

    impact:
      "Formally adopted by King County Metro, reducing manual analysis time by 35% and expanding self-service data access for non-technical stakeholders.",

    relevance: [
      "Data Scientist",
      "Product Analyst",
      "AI Engineer",
      "Data Analyst"
    ],

    href: "https://github.com/ARena18/DS_Capstone_Team2.git",
    video: "/conversational_ai_demo.mp4",
    accent: "from-emerald-200 via-green-100 to-teal-50"
  },

  {
    title: "Best Place to Live",
    subtitle: "Seattle neighborhood scoring platform",
    description:
      "An end-to-end geospatial analytics project that ranks neighborhoods using housing affordability, transit access, and nearby amenities.",

    problem:
      "People compare neighborhoods using fragmented information across housing, transit, and amenity sources. This project brings those factors into one interactive decision-support tool.",

    role:
      "I designed the data pipeline, scoring model, geospatial processing workflow, and interactive map-based frontend.",

    built: [
      "Processed neighborhood boundaries, housing data, GTFS transit data, and amenity data.",
      "Created a weighted scoring model to compare neighborhood livability.",
      "Built a React, Vite, and Leaflet frontend for interactive map exploration.",
      "Deployed the project as a live web app using Vercel."
    ],

    technicalScope: [
      "Python",
      "GeoPandas",
      "GTFS",
      "Foursquare API",
      "React",
      "Vite",
      "Leaflet",
      "Vercel"
    ],

    productScope: [
      "User Decision Criteria",
      "Weighted Scoring",
      "Tradeoff Design",
      "Map UX",
      "Data Storytelling"
    ],

    impact:
      "Created an interactive tool that helps users compare 94 Seattle neighborhoods using transparent, multi-factor scoring.",

    relevance: [
      "Data Analyst",
      "Product Analyst",
      "Frontend Developer",
      "Data Engineer"
    ],

    href: "https://github.com/Quyenn24/best-place-to-live.git",
    live: "https://best-place-to-live-xi.vercel.app",
    accent: "from-teal-200 via-cyan-100 to-white",
    image: "/best-place-to-live.png"
  },

  {
    title: "Link Ridership Performance",
    subtitle: "Transit dashboard for operational insights",
    description:
      "A ridership analytics dashboard designed to help planners understand station trends, line contribution, monthly changes, and overall ridership behavior.",

    problem:
      "Transit stakeholders needed a clearer way to monitor ridership patterns and identify performance changes across stations and time periods.",

    role:
      "I analyzed ridership data, designed dashboard metrics, and created visual reporting for planning and operational decision-making.",

    built: [
      "Analyzed 64M+ ridership records.",
      "Tracked ridership trends, station-level performance, and month-over-month changes.",
      "Designed dashboard views for operational monitoring.",
      "Used visual storytelling to make ridership patterns easier to interpret."
    ],

    technicalScope: [
      "Power BI",
      "Python",
      "SQL",
      "EDA",
      "Dashboard Design",
      "KPI Reporting"
    ],

    productScope: [
      "Operational Metrics",
      "Stakeholder Reporting",
      "Decision Support",
      "Dashboard UX"
    ],

    impact:
      "Helped translate large ridership datasets into actionable insights for planning, monitoring, and service performance analysis.",

    relevance: [
      "Data Analyst",
      "BI Analyst",
      "Product Analyst",
      "Transit Analyst"
    ],

    href: null,
    accent: "from-green-200 via-emerald-100 to-white",
    image: "/ridership-dashboard.png"
  }
];

const experiences = [
  {
    role: "Teaching Assistant",
    company: "Seattle University",
    period: "March 2026 – Present",
    description:
    "I support graduate students in understanding Machine Learning concepts and Python-based workflows to real analytical problems.",

    work: [
      "Led weekly office hours for a 100-student graduate Machine Learning course.",
      "Explained supervised learning, feature engineering, cross-validation, and model evaluation concepts to 30+ students per session.",
      "Mentored students on Python-based ML projects covering data preprocessing, feature engineering, cross-validation, and model evaluation using Python, pandas, NumPy, and scikit-learn.",
    ],

    impact:
      "Improved student learning support and earned 4.9/5.0 mid-quarter feedback by making complex machine learning concepts more practical and approachable.",

    relevance: [
      "Data Scientist",
      "Machine Learning Analyst",
      "Data Analyst",
      "Technical Mentor",
    ]
  },
  {
    role: "Graduate Data Science Intern",
    company: "King County Metro",
    period: "Jun 2025 – Present",
    description:
    "I support data-driven transit planning by analyzing ridership, GTFS, service performance, and geospatial datasets to help planners make better decisions.",

    work: [
      "Conducted exploratory and statistical analysis on GTFS and APC data to identify high-demand corridors and travel patterns for FIFA World Cup 2026 planning.",
      "Built Python and Databricks ETL pipelines to ingest, clean, and transform geospatial API data.",
      "Developed predictive models using regression and time-series methods across 140+ corridors.",
      "Led discovery session with stakeholders to identify requirements and product scope, evaluate feature options for an internal AI-powered analytics tool."
    ],

    impact:
      "Influenced $13M in reliability investment decisions, improved recurring data workflows, and helped improve access to planning insights for technical and non-technical stakeholders.",

    relevance: [
      "Data Analyst",
      "Data Scientist",
      "Product Analyst",
      "Data Engineer"
    ]
  },
  {
    role: "Project Management Assistant",
    company: "Seattle University",
    period: "Nov 2024 – Present",
    description:
    "I support enterprise system implementation by combining analytics, project coordination, data validation, and automation.",

    work: [
      "Built and maintained exceultive-facing Power BI dashboards with automated refresh and scheduled reporting for leadership and cross-functional teams.",
      "Validated 10,000+ employee and student records by reconciling discrepancies between legacy systems and Workday.",
      "Designed data extraction workflows using open-source LLMs to structure and validate data from 8,000+ I-9 documents.",
      "Coordinated User Acceptance Testing for 50+ end users, tracked defects in Jira, and translated user feedback into product improvements.",
      "Developed Power Automate workflows to streamline KPI tracking, project reporting, and stakeholder visibility.",
      "Supported Agile delivery by managing backlog items, contributing to sprint planning, and coordinating across engineering, HR, and payroll teams.",
      "Served as student representative on the Workday Steering Committee and provided end-user insights that influenced feature adoption decisions."
    ],

    impact:
      "Helped maintain 99% data accuracy during migration, improved document processing efficiency by 40%, and increased reporting visibility for leadership and implementation teams.",

    relevance: [
      "Product Analyst",
      "Data Analyst",
      "Business System Analyst",
      "Technical Project Coordinator"
    ]
  },
  {
    role: "IT Service Desk Support",
    company: "Seattle University",
    period: "Mar 2021 – Aug 2023",
    description:
    "I provided technical support across campus while contributing to system testing, documentation, troubleshooting, and workflow standardization.",

    work: [
      "Collaborated with System Engineers to CONDUCT A/B experiemnts on VDI configurations and analyze performance metrics such as login time and latency.",
      "Created 30+ technical documents, training materials, and configuration guides to standardize internal workflows and improve knowledge sharing.",
      "Resolved hardware, software, application, and access issues for students, staff, and 250+ classrooms.",
      "Used Jira ticketing and Azure Active Directory to troubleshoot issues and support access management.",
    ],

    impact:
      "Improved user support quality, strengthened technical documentation, and contributed to system testing that helped improve user retention by 15%.",

    relevance: [
      "Software Support",
      "QA Analyst",
      "Technical Analyst",
      "Systems Analyst",
      "IT Analyst"
    ]
  },
  {
    role: "Finance & Accounting Intern",
    company: "Truong Minh Hai Ltd",
    period: "Jul 2019 – Dec 2019",

    description:
      "I supported financial and operational analysis by working with transaction, inventory, and sales data to identify performance trends and improve reporting accuracy.",

    work: [
      "Analyzed transaction and inventory data using advanced Excel and SQL within a Warehouse Management System.",
      "Identified sales trends, margin variance, and inventory movement patterns across all product categories.",
      "Prepared analytical summaries and presented to leadership to support finance and operations decision-making.",
      "Helped connect financial performance indicators with inventory and operational data."
    ],

    impact:
      "Identified opportunities that helped improve inventory turnover by 10% across all product categories.",

    relevance: [
      "Data Analyst",
      "Business Analyst",
      "Finance Analyst",
      "Operations Analyst"
    ]
  }
];

const skills = [
  {
    category: "Programming Language",
    items: ["Python", "SQL", "R", "TypeScript", "React", "HTML"]
  },
  {
    category: "Analytics & Applied Machine Learning",
    items: [
      "EDA",
      "Statistical Analysis",
      "Predictive Modeling",
      "Classification",
      "Regression",
      "Time Series",
      "Feature Engineering",
      "Model Evaluation",
      "Cross-validation",
      "A/B Testing"
    ]
  },
  {
    category: "BI & Visualization",
    items: ["Power BI", "Tableau", "ArcGIS", "Advance Excel", "Miscrosoft Suite"]
  },
  {
    category: "Data Engineering & Automation",
    items: [
      "ETL/ELT Pipelines",
      "API Integration",
      "Databricks",
      "PostgreSQL",
      "Power Automate",
      "Data Validation & Reconciliation",
      "Data Quality Assurance"
    ]
  },
  {
    category: "Product & Delivery",
    items: [
      "Jira",
      "Trello",
      "UAT",
      "Agile practices",
      "Waterfall methodology",
      "Stakeholder Communication",
      "Backlog Management",
      "Sprint Planning"
    ]
  },
  {
    category: "AI Tools",
    items: [
      "LLMs",
      "Open-source LLMs",
      "Streamlit",
      "Claude Code",
      "Automation Workflows"
    ]
  }
];

const values = [
  {
    icon: <BrainCircuit className="h-5 w-5" />,
    title: "Analytical",
    text: "I approach data with a product mindset — focusing on what decisions need to be made and how data can support them.",
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

// UTILITY COMPONENTS

function GlobalStyles() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,400&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const style = document.createElement("style");
    style.id = "portfolio-global-styles";
    style.textContent = `
      body { font-family: 'DM Sans', sans-serif; }
      h1,h2,h3,h4,.syne { font-family: 'Syne', sans-serif !important; }

      @keyframes floatA {
        0%,100% { transform: translateY(0px) translateX(0px); }
        33%      { transform: translateY(-22px) translateX(8px); }
        66%      { transform: translateY(6px) translateX(-8px); }
      }
      @keyframes floatB {
        0%,100% { transform: translateY(0px) scale(1); }
        50%      { transform: translateY(-18px) scale(1.04); }
      }
      @keyframes floatC {
        0%,100% { transform: translateY(0px) translateX(0px); }
        40%      { transform: translateY(14px) translateX(-12px); }
        70%      { transform: translateY(-8px) translateX(10px); }
      }
      @keyframes shimmer {
        0%   { background-position: 0% 50%; }
        50%  { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      .blob-a { animation: floatA 9s ease-in-out infinite; }
      .blob-b { animation: floatB 7s ease-in-out infinite 1s; }
      .blob-c { animation: floatC 11s ease-in-out infinite 2s; }
      .blob-d { animation: floatA 8s ease-in-out infinite 3.5s; }

      .gradient-name {
        background: linear-gradient(120deg, #059669 0%, #0d9488 40%, #16a34a 75%, #059669 100%);
        background-size: 250% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: shimmer 4s linear infinite;
      }

      .tilt-container { perspective: 1000px; }

      .dot-grid {
        background-image: radial-gradient(circle, rgba(148,163,184,0.22) 1px, transparent 1px);
        background-size: 28px 28px;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(link);
      const s = document.getElementById("portfolio-global-styles");
      if (s) document.head.removeChild(s);
    };
  }, []);
  return null;
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: "0%",
        background: "linear-gradient(90deg, #059669, #0d9488, #16a34a)",
        zIndex: 9999,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
      }}
    />
  );
}

function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1400;
    const start = Date.now();
    const tick = () => {
      const t = Math.min((Date.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(eased * to));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, to]);

  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

function TiltCard({ children, className }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-120, 120], [4, -4]);
  const rotateY = useTransform(x, [-120, 120], [-4, 4]);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="tilt-container">
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: [0.33, 1, 0.68, 1] }}
      className="mb-10 max-w-3xl"
    >
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-emerald-600">
        {eyebrow}
      </p>
      <h2 className="syne text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-7 text-slate-500">{description}</p>
      )}
    </motion.div>
  );
}

// LIGHTBOX 
 
function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);
 
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.33, 1, 0.68, 1] }}
        className="relative z-10 max-h-full w-full max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={src} alt={alt} className="w-full rounded-2xl shadow-2xl shadow-black/50" />
        <button
          onClick={onClose}
          className="absolute -right-4 -top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg font-bold text-slate-800 shadow-lg transition hover:bg-emerald-50 hover:text-emerald-700"
        >
          ✕
        </button>
        <p className="mt-3 text-center text-sm text-slate-400">
          Press <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-xs">Esc</kbd> or click outside to close
        </p>
      </motion.div>
    </motion.div>
  );
}

// MAIN APP

export default function App() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <GlobalStyles />
      <ScrollProgress />

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            src={lightbox.src}
            alt={lightbox.alt}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>

      <div className="relative min-h-screen overflow-x-hidden bg-[#f4faf6] text-slate-800">
        {/* Ambient floating background blobs */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div className="blob-a absolute -top-20 -left-20 h-[520px] w-[520px] rounded-full bg-emerald-300/20" />
          <div className="blob-b absolute top-1/3 right-0 h-96 w-96 rounded-full bg-teal-300/20" />
          <div className="blob-c absolute bottom-1/4 left-1/4 h-80 w-80 rounded-full bg-green-300/15" />
          <div className="blob-d absolute bottom-10 right-10 h-64 w-64 rounded-full bg-cyan-200/25" />
        </div>

        {/* Dot grid overlay */}
        <div className="dot-grid pointer-events-none fixed inset-0 z-0 opacity-40" />

        {/* ── HEADER ── */}
        <header className="sticky top-0 z-40 px-6 pt-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/80 bg-white/70 px-6 py-3 shadow-lg shadow-emerald-100/40 backdrop-blur-xl"
          >
            <div>
              <p className="syne text-base font-bold tracking-tight text-slate-900">Quyen Bui</p>
              <p className="text-xs text-slate-400">Product Analyst · Data Scientist · Data Engineer · Developer</p>
            </div>
            <nav className="hidden items-center gap-6 text-sm font-medium text-slate-500 md:flex">
              {["projects", "experience", "about", "skills", "contact"].map((id) => (
                <a key={id} href={`#${id}`} className="capitalize transition-colors hover:text-emerald-600">
                  {id}
                </a>
              ))}
            </nav>
          </motion.div>
        </header>

        <main className="relative z-10">
          {/* ── HERO ── */}
          <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pt-24">
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700"
              >
                <Sparkles className="h-4 w-4" />
                Data is my language, insights are my output
              </motion.div>

              {[
                { text: "Hi, I'm", cls: "text-4xl md:text-5xl font-semibold text-slate-600 syne", delay: 0.15, shimmer: false },
                { text: "Quyen Bui", cls: "text-5xl md:text-7xl font-extrabold syne", delay: 0.28, shimmer: true },
              ].map(({ text, cls, delay, shimmer }) => (
                <div key={text} className="overflow-hidden leading-[1.1]">
                  <motion.div
                    initial={{ y: "105%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.75, delay, ease: [0.33, 1, 0.68, 1] }}
                  >
                    <span className={`${cls} block tracking-tight`}>
                      {shimmer ? <span className="gradient-name">{text}</span> : text}
                    </span>
                  </motion.div>
                </div>
              ))}

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-6 max-w-2xl text-lg leading-8 text-slate-500"
              >
                I’m a data science and analytics professional with experience across data analysis, product analytics, AI-powered tools, ETL pipelines, dashboards development, and enterprise system implementation.
                Always with an eye toward business impact and user-centered design.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-emerald-200/60 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-300/50"
                >
                  View Projects
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md"
                >
                  Contact Me
                </a>
                <a
                  href="/resume_QB.pdf"
                  className="inline-flex items-center gap-2 rounded-2xl border-2 border-emerald-200 bg-emerald-50 px-6 py-3 text-sm font-semibold text-emerald-700 transition-all hover:-translate-y-1 hover:bg-emerald-100"
                >
                  Resume <Download className="h-4 w-4" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-10 flex flex-wrap gap-2"
              >
                {["Python", "SQL", "Power BI", "Product Analytics", "ETL Pipelines", "Data Storytelling"].map((s) => (
                  <span key={s} className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm backdrop-blur">
                    {s}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Profile card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.33, 1, 0.68, 1] }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[32px] border border-white/90 bg-white/80 p-5 shadow-2xl shadow-emerald-200/40 backdrop-blur">
                <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-3">
                  <div className="mb-3 flex items-center gap-2 px-1">
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-teal-400" />
                    {/* <span className="ml-2 text-xs text-slate-400">portfolio.quyen.dev</span> */}
                  </div>
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-emerald-50 to-teal-50">
                    <img src="/profile.png" alt="Quyen Bui portrait" className="h-full w-full object-cover" />
                  </div>
                </div>
              </div>
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-teal-300/40 blur-2xl" />
              <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-emerald-300/30 blur-2xl" />
            </motion.div>
          </section>

          {/* ── PROJECTS ── */}
          <section id="projects" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <SectionTitle eyebrow="Selected work" title="Projects that show how I think" />
            <div className="grid gap-8">
              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                >
                  <TiltCard className="group overflow-hidden rounded-[32px] border border-slate-200/70 bg-white shadow-md transition-all duration-300 hover:border-emerald-200/60 hover:shadow-2xl hover:shadow-emerald-100/50">
                    <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                      <div className={`relative overflow-hidden bg-gradient-to-br ${project.accent} ${project.image ? "p-0" : "p-8"}`}>
                        {project.image ? (
                          <>
                            {/* Dashboard screenshot with overlay */}
                            <div className="relative h-full min-h-[260px]">
                              <img
                                src={project.image}
                                alt={`${project.title} dashboard`}
                                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                              />
                              {/* Gradient overlay so text is readable */}
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                              {/* Text pinned to bottom */}
                              <div className="absolute bottom-0 left-0 right-0 p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-emerald-300">Featured project</p>
                                <h3 className="syne mt-2 text-2xl font-bold tracking-tight text-white">{project.title}</h3>
                                <p className="mt-1 text-sm font-medium text-slate-300">{project.subtitle}</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                  {project.technicalScope.map((item) => (
                                    <span key={item} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                                      {item}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="absolute inset-0 bg-white/0 transition-all duration-500 group-hover:bg-white/20" />
                            <p className="relative text-[11px] font-bold uppercase tracking-[0.3em] text-slate-500">Featured project</p>
                            <h3 className="syne relative mt-3 text-2xl font-bold tracking-tight text-slate-950">{project.title}</h3>
                            <p className="relative mt-2 text-sm font-medium text-slate-500">{project.subtitle}</p>
                            <div className="relative mt-6 flex flex-wrap gap-2">
                              {project.technicalScope.map((item) => (
                                <span key={item} className="rounded-full border border-white/80 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                      <div className="relative p-8">

                        {/* Default compact view */}
                        <div className="transition-opacity duration-300 group-hover:opacity-10">
                          <p className="text-base leading-8 text-slate-600">
                            {project.description}
                          </p>

                          <div className="mt-6">
                            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">
                              Highlights
                            </p>
                            <ul className="mt-3 space-y-2">
                              {project.built.slice(0, 3).map((item) => (
                                <li key={item} className="flex gap-3 text-sm text-slate-600">
                                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-white/95 p-8 backdrop-blur">

                          <div className="space-y-4">

                            <div>
                              <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-600">
                                Problem
                              </p>
                              <p className="mt-1 text-sm text-slate-600">
                                {project.problem}
                              </p>
                            </div>

                            <div>
                              <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-600">
                                Impact
                              </p>
                              <p className="mt-1 text-sm text-slate-600">
                                {project.impact}
                              </p>
                            </div>

                            <div>
                              <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-600">
                                Relevant For
                              </p>
                              <div className="mt-2 flex flex-wrap gap-2">
                                {project.relevance.map((item) => (
                                  <span key={item} className="rounded-full bg-slate-900 px-3 py-1 text-xs text-white">
                                    {item}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* View Button */}
                        <div className="mt-7 flex flex-wrap gap-3">
                          {project.live ? (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noreferrer"
                              className="group inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-700 hover:shadow-lg hover:shadow-emerald-100/50"
                            >
                              View Details
                            </a>
                          ) : project.image ? (
                            <button
                              onClick={() => setLightbox({ src: project.image, alt: project.title })}
                              className="group inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-700 hover:shadow-lg hover:shadow-emerald-100/50"
                            >
                              View Details
                            </button>
                          ) : null}

                          {project.video && (
                            <a
                              href={project.video}
                              target="_blank"
                              rel="noreferrer"
                              className="group inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-700 hover:shadow-lg hover:shadow-emerald-100/50"
                            >
                              Watch Demo
                            </a>
                          )}

                          {project.href && (
                            <a
                              href={project.href}
                              target="_blank"
                              rel="noreferrer"
                              className="group inline-flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-2.5 text-sm font-semibold text-emerald-700 transition-all hover:-translate-y-0.5 hover:bg-emerald-100 hover:border-emerald-400 hover:shadow-md"
                            >
                              View on GitHub
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </motion.article>
              ))}
            </div>
          </section>

          {/* ── EXPERIENCE ── */}
          <section id="experience" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <SectionTitle eyebrow="Experience" title="Work that built my foundation" description="Real-world experience in analytics, automation, and decision support" />
            <div className="relative">
              <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-emerald-400 via-teal-300 to-transparent hidden md:block" />
              <div className="grid gap-6">
                {experiences.map((exp, index) => (
                  <motion.article
                    key={exp.role}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative md:pl-16"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 300 }}
                      className="absolute left-[20px] top-8 hidden h-[15px] w-[15px] rounded-full border-2 border-emerald-400 bg-white shadow-md shadow-emerald-200 md:block"
                    />
                    <div className="rounded-[24px] border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:border-emerald-200/60 hover:shadow-xl hover:shadow-emerald-100/30">
                      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="syne text-xl font-bold text-slate-900">{exp.role}</h3>
                          <p className="mt-1 text-sm font-semibold text-emerald-600">{exp.company}</p>
                        </div>
                        <span className="inline-flex items-center rounded-full border border-emerald-100 bg-gradient-to-r from-emerald-50 to-teal-50 px-4 py-1.5 text-xs font-medium text-slate-600">
                          {exp.period}
                        </span>
                      </div>
                      <div className="mt-5 space-y-4">

                        {/* Description */}
                        <p className="text-sm leading-7 text-slate-600">
                          {exp.description}
                        </p>

                        {/* What I worked on */}
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                            What I worked on
                          </p>
                          <ul className="mt-2 space-y-2">
                            {exp.work.map((item) => (
                              <li key={item} className="flex gap-3 text-sm text-slate-500">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-400" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Impact */}
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                            Impact
                          </p>
                          <p className="mt-1 text-sm text-slate-600">
                            {exp.impact}
                          </p>
                        </div>

                        {/* Relevance */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {exp.relevance.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                    </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          {/* ── ABOUT ── */}
          <section id="about" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <SectionTitle eyebrow="About me" title={<>My hobbies and my work <br /> share the same logic</>} description="Whether I'm building a data pipeline, baking bread, or training aerial moves, I'm drawn to the same things — precision, iteration, and figuring out why something works." />
            <div className="grid gap-6 md:grid-cols-3 items-stretch">
              {values.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                >
                  <TiltCard className="h-full min-h-[230px] flex flex-col rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-emerald-200/60 hover:shadow-xl hover:shadow-emerald-100/30">
                    <div className="mb-4 inline-flex rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 p-3 text-emerald-600">
                      {item.icon}
                    </div>
                    <h3 className="syne text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-500 flex-grow">{item.text}</p>
                  </TiltCard>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-8 rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400">How I approach problems</p>
                  <h3 className="syne mt-3 text-2xl font-bold tracking-tight text-slate-900">
                    I care about solving real problems, not just analyzing data.
                  </h3>
                  <p className="mt-4 text-base leading-8 text-slate-500">
                    I've learned that the most useful thing data can do is make a decision easier for someone who has to make it under pressure. 
                    I carry that into every tool and system I build — if it doesn't reduce friction for the person using it, it's not done yet. 
                    I enjoy work that starts with ambiguity and ends with clarity.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { icon: <BarChart3 className="h-5 w-5" />, title: "Analytics", desc: "Turn complex data into clear signals — identifying trends, defining metrics, and supporting real decisions." },
                    { icon: <Database className="h-5 w-5" />, title: "Data systems", desc: "Build reliable data pipelines and workflows — from ingestion to transformation and validation" },
                    { icon: <Map className="h-5 w-5" />, title: "Machine Learning & LLM", desc: "Apply machine learning models and LLMs to extract insights, automate workflows, and build intelligent applications." },
                    { icon: <Sparkles className="h-5 w-5" />, title: "Product & UX Thinking", desc: "Design tools with the user in mind — focusing on clarity, usability, and how data fits into real workflows." },
                  ].map((card) => (
                    <div key={card.title} className="group rounded-2xl bg-slate-50 p-5 transition-all duration-200 hover:bg-gradient-to-br hover:from-emerald-50 hover:to-teal-50">
                      <div className="text-slate-500 transition-colors group-hover:text-emerald-600">{card.icon}</div>
                      <p className="mt-3 font-semibold text-slate-900">{card.title}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-500">{card.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          {/* ── SKILLS ── */}
          <section id="skills" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <SectionTitle 
              eyebrow="Skills" 
              title="Technical strengths" 
              description="A mix of analytics, data engineering, AI tools, and product-minded execution." 
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="grid gap-6 md:grid-cols-2">

                {skills.map((group, groupIndex) => (
                  <motion.div
                    key={group.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: groupIndex * 0.1 }}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-5"
                  >
                    {/* Category Title */}
                    <h3 className="syne text-lg font-bold text-slate-900">
                      {group.category}
                    </h3>

                    {/* Skill Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((item, i) => (
                        <motion.span
                          key={item}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.03 }}
                          whileHover={{ scale: 1.08, y: -2 }}
                          className="cursor-default rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm transition-all hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}

              </div>
            </motion.div>
          </section>

          {/* ── CONTACT ── */}
          <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="relative overflow-hidden rounded-[36px] bg-slate-950 px-8 py-12 text-white shadow-2xl shadow-slate-900/30 md:px-12"
            >
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-600/25 blur-3xl" />
              <div className="absolute -bottom-24 left-16 h-64 w-64 rounded-full bg-teal-600/20 blur-3xl" />
              <div className="absolute right-1/3 top-1/2 h-40 w-40 rounded-full bg-green-600/15 blur-2xl" />

              <div className="relative">
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-emerald-400">Let's connect</p>
                <div className="mt-4 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                  <div>
                    <h2 className="syne text-3xl font-bold tracking-tight md:text-4xl">
                      Open to opportunities in data science, software development, and product-focused roles.
                    </h2>
                    <p className="mt-4 text-base leading-8 text-slate-400">
                      Especially excited about roles where I can build analytical systems, improve data quality,
                      develope dashboard reports, and support better decision-making across teams.
                    </p>
                  </div>
                  <div className="grid gap-3 text-sm">
                    {[
                      {
                        icon: <Mail className="h-5 w-5" />,
                        href: "mailto:btlquyenn@gmail.com",
                        label: "btlquyenn@gmail.com",
                      },
                      {
                        icon: (
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5 w-5"
                            aria-hidden="true"
                          >
                            <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM8.339 20.452H4.771V9h3.568v11.452zM6.555 7.438a2.067 2.067 0 1 1 0-4.134 2.067 2.067 0 0 1 0 4.134zM20.452 20.452h-3.566v-5.569c0-1.328-.025-3.037-1.851-3.037-1.853 0-2.136 1.446-2.136 2.941v5.665H9.333V9H12.76v1.561h.049c.477-.902 1.641-1.851 3.377-1.851 3.614 0 4.266 2.379 4.266 5.473v6.269z" />
                          </svg>
                        ),
                        href: "https://www.linkedin.com/in/thisisquyenbui/",
                        label: "LinkedIn",
                      },
                      {
                        icon: (
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5 w-5"
                            aria-hidden="true"
                          >
                            <path d="M12 .5C5.649.5.5 5.649.5 12A11.5 11.5 0 0 0 8.36 22.02c.575.106.785-.25.785-.556 0-.274-.01-1-.016-1.962-3.182.692-3.854-1.533-3.854-1.533-.52-1.322-1.27-1.674-1.27-1.674-1.038-.71.079-.696.079-.696 1.148.08 1.752 1.178 1.752 1.178 1.02 1.748 2.676 1.243 3.327.95.103-.739.4-1.243.727-1.529-2.54-.289-5.211-1.27-5.211-5.655 0-1.249.446-2.27 1.177-3.07-.118-.288-.51-1.45.111-3.023 0 0 .96-.307 3.146 1.173A10.94 10.94 0 0 1 12 6.03c.973.004 1.954.132 2.87.387 2.184-1.48 3.143-1.173 3.143-1.173.623 1.573.231 2.735.114 3.023.733.8 1.175 1.821 1.175 3.07 0 4.396-2.676 5.363-5.224 5.647.411.354.777 1.049.777 2.114 0 1.526-.014 2.757-.014 3.132 0 .309.207.668.79.555A11.502 11.502 0 0 0 23.5 12C23.5 5.649 18.351.5 12 .5z" />
                          </svg>
                        ),
                        href: "https://github.com/Quyenn24",
                        label: "GitHub",
                      },
                    ].map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.12 }}
                      >
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel="noreferrer"
                            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:border-emerald-500/40 hover:bg-white/10"
                          >
                            <span className="text-emerald-400">{item.icon}</span>
                            <span className="text-slate-300">{item.label}</span>
                          </a>
                        ) : (
                          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                            <span className="text-emerald-400">{item.icon}</span>
                            <span className="text-slate-300">{item.label}</span>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        </main>
      </div>
    </>
  );
}
