export const profile = {
  name: "Tanay Gattani",
  title: "Data Analyst · Data Engineer · Automation & AI",
  email: "tgattani@wisc.edu",
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
        "Developed a retraction risk forecasting pipeline across 19000+ author clusters using XGBoost and Random Forest, achieving R2 of 0.604 and MAE of 0.013 through comparative model evaluation",
        "Engineered a 21-variable analytical dataset for statistical modeling using Python and Pandas, integrating publication history, author network signals, and journal-level features from heterogeneous sources into a single clean, analysis-ready table",
        "Applied SHAP analysis to quantify feature importance across model outputs using Python, identifying authorship change over time as the strongest positive predicator of future retractions and translating findings into plain-language recommendations for faculty"
      ],
    },
    {
      company: "MSA Professional Services",
      title: "Data Analyst (Apprenticeship)",
      dates: "Sep. 2025 – Dec. 2025",
      location: "Madison, WI",
      bullets: [
        "Eliminated 10 hours of weekly manual data entry by building an ETL/ELT pipeline in Microsoft Fabric that automated ingestion of 50+ daily CSV files using Lookup activities and ForEach loops",
        "Cut manual data validation time by 95% by automating schema change detection across 100+ monthly files using PySpark, routing anomalous records to a quarantine table before they reached reporting layers",
        "Consolidated operational metadata and business context into a Delta Table reporting pipeline using Microsoft Fabric, powering weekly KPI dashboards reviewed by operations leadership"
      ],
    },
    {
      company: "AlmaMeal Media Pvt. Ltd.",
      title: "Data Analyst Intern",
      dates: "Aug. 2023 – May. 2024",
      location: "India",
      bullets: [
        "Established a customer data pipeline using Python to clean, join, and integrate records across multiple sources, improving customer-to-service match rates by 12%",
        "Reduced query runtime by 30% and improved recommendation accuracy by 3% by refactoring 7+ legacy SQL queries using optimized joins and indexing strategies",
        "Created user behavior KPI dashboards in Tableau to track funnel drop-off for the marketing team, surfacing a 40% abandonment rate at a critical product step that directly drove a UI redesign decision"
      ],
    },
  ],

  education: [
    {
      institution: "University of Wisconsin-Madison",
      degree: "MS in Information Science",
      dates: "Sep. 2024 – May 2026",
      coursework:
        "Big Data Systems, Azure AI Foundations, Advanced Analytics, Machine Learning",
    },
    {
      institution: "University of Mumbai",
      degree: "BS in Electronics & Computer Engineering",
      dates: "Aug. 2019 – Jun. 2023",
      coursework:
        "Probability & Statistics, Database Management System, Statistical Analysis",
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
