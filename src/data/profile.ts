export const profile = {
  name: "Tanay Gattani",
  title: "Data Analyst · Data Engineer · Automation & AI",
  email: "tgattani@wisc.edu",
  phone: "+1 (608)-213-8463",
  location: "Madison, WI",
  linkedin: "https://www.linkedin.com/in/tanay-gattani-5ab51220b/",
  github: "https://github.com/tanaygattani8",
  aboutIntro:
    "I'm a data professional finishing my MS in Information Science at UW-Madison (May 2026), with a background that covers both the engineering and the analytics side of data work. I build pipelines that make data reliable, and I do the analysis that makes it useful. Most of my projects have involved both.",
  aboutBullets: [
    "Automated ingestion of 50+ daily CSV files at MSA Professional Services, cutting 10 hours of weekly manual work and reducing quality analysis time by 95%.",
    "Developed a predictive model at UW-Madison that forecasts research paper retraction rates across 19,000+ author clusters, achieving 0.604 R² using XGBoost with SHAP analysis to identify strongest predictors.",
    "Engineered a Python pipeline at AlmaMeal Media that improved customer-to-service match rates by 12%, paired with Tableau dashboards that caught a 40% user drop-off and fed directly into a product redesign."
  ],
  aboutOutro:
    "I do my best work when there's a real business question on the other end. Not just \"build the dashboard\" but \"here's the decision we're trying to make.\" I want to own problems from the source data to the stakeholder conversation, and I'm looking for a team where both SQL and strategic thinking matter.",

  education: [
    {
      institution: "University of Wisconsin-Madison",
      degree: "MS in Information Science",
      dates: "Sep. 2024 – May 2026",
      coursework:
        "Big Data Systems, Azure AI Foundations, Advanced Analytics, Machine Learning",
    },
    {
      institution: "Mumbai University",
      degree: "BE in Electronics, Minor: Computer Science",
      dates: "Aug. 2019 – Jun. 2023",
      coursework:
        "Probability & Statistics, Database Management System, Statistical Analysis",
    },
  ],

  experience: [
    {
      company: "University of Wisconsin-Madison",
      title: "Project Assistant",
      dates: "Mar. 2026 – Present",
      location: "Madison, WI",
      bullets: [
        "Graded moral analysis essays for LIS 461: Data Ethics & Algorithms taught by Professor Ian Hutchins, applying the Rubel-Castro heuristic to evaluate arguments across consequentialist, Kantian, and rights-based frameworks",
        "Assessed student work for conceptual clarity, factual accuracy, and depth of critical reflection on automated decision systems and fairness in algorithmic contexts"
      ],
    },
    {
      company: "University of Wisconsin-Madison",
      title: "Graduate Research Assistant",
      dates: "Sep. 2025 – Present",
      location: "Madison, WI",
      bullets: [
        "Built a predictive modeling pipeline using XGBoost, Random Forest, and Linear Regression to forecast future retraction rates across research author clusters, achieving 0.604 R² and 0.013 MAE",
        "Engineered 21 features integrating bibliometric indicators, knowledge graph metrics, journal-level signals and author-level attributes using Pandas and NumPy",
        "Applied SHAP TreeExplainer analysis across Random Forest and XGBoost models, quantifying feature importance and identifying key predictors of future retractions",
      ],
    },
    {
      company: "MSA Professional Services",
      title: "Data Analyst (Apprenticeship)",
      dates: "Sep. 2025 – Dec. 2025",
      location: "Madison, WI",
      bullets: [
        "Engineered a scalable ETL/ELT pipeline in Microsoft Fabric automating ingestion of 50+ daily CSV files, eliminating 10 hours of weekly manual processing",
        "Developed an automated data quality and governance script using PySpark that detects schema changes across 100+ monthly files, reducing manual analysis time by 95%",
        "Built an automated enrichment pipeline integrating technical metadata with business context, delivering reporting dashboards through Delta Tables",
      ],
    },
    {
      company: "AlmaMeal Media Pvt. Ltd.",
      title: "Analytics Intern",
      dates: "Sep. 2023 – Apr. 2024",
      location: "India",
      bullets: [
        "Designed and implemented a data analysis pipeline using Python and Pandas, improving customer-to-service match rates by 12%",
        "Re-engineered 7+ legacy SQL queries by optimizing joins and indexing, cutting data retrieval times by 30%",
        "Translated business requirements into Tableau dashboards with measurable KPIs, revealing a 40% user drop-off that drove a UI redesign",
      ],
    },
  ],

  certifications: [
    "McKinsey Forward Program",
    "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    "5-Day AI Agents Intensive Course with Google (Kaggle)",
  ],

  careerProgression: [
    {
      title: "Electronics Engineer",
      description:
        "Built a foundation in circuits, embedded systems, and signal processing at Mumbai University.",
      isCurrent: false,
    },
    {
      title: "Data Analyst",
      description:
        "Transitioned into analytics — building ETL pipelines, dashboards, and predictive models.",
      isCurrent: false,
    },
    {
      title: "AI & Automation",
      description:
        "Building multi-agent AI systems and scalable data platforms at UW-Madison.",
      isCurrent: true,
    },
  ],
};
