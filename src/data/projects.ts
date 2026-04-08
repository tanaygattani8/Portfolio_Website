export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
  category: "Data Engineering" | "Automation & AI" | "Data Analytics";
  githubUrl?: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "data-platform",
    title: "Data Platform - Databricks, Airflow & AWS",
    description:
      "Built a medallion architecture data pipeline on Databricks processing XML data through Bronze, Silver, and Gold layers with automated quality validation and Kubernetes-orchestrated scheduling.",
    techStack: ["PySpark", "Databricks", "Airflow", "AWS S3", "Kubernetes", "Docker"],
    highlights: [
      "Medallion architecture with Delta Lake incremental upserts",
      "Automated data quality validation using databricks-labs-dqx",
      "End-to-end Airflow orchestration deployed on K8s via Helm",
    ],
    category: "Data Engineering",
    image: "/images/project-data-platform.png",
  },
  {
    id: "netflix-modeling",
    title: "Netflix Data Modeling - dbt & Snowflake",
    description:
      "Architected a multi-layer dbt data model on Snowflake across staging, dimension, fact, mart, and snapshot layers, transforming 6 raw source tables into analytics-ready assets.",
    techStack: ["dbt", "Snowflake", "SQL", "Jinja"],
    highlights: [
      "Incremental materialization with schema-change guards",
      "Type 2 SCD snapshot with surrogate key generation",
      "Ephemeral model for movie-tag enrichment",
    ],
    category: "Data Analytics",
    githubUrl: "https://github.com/tanaygattani8/NetflixAnalysis_Dbt_Snowflake",
    image: "/images/project-netflix.png",
  },
  {
    id: "sales-analysis",
    title: "Regional Sales Analysis",
    description:
      "End-to-end data pipeline in Python ingesting multi-sheet Excel data into MySQL, with 13+ exploratory analyses covering sales trends, channel distribution, and customer segmentation.",
    techStack: ["Python", "MySQL", "Matplotlib", "Seaborn", "Plotly", "SQL"],
    highlights: [
      "Wholesale accounts for 54% of total sales",
      "Export leads in profitability at 37.93% average margin",
      "Choropleth maps for regional insights across US states",
    ],
    category: "Data Analytics",
    githubUrl: "https://github.com/tanaygattani8/Sales_Analytics",
    image: "/images/project-sales.png",
  },
  {
    id: "corporate-sociologist",
    title: "The Corporate Sociologist - Multi-Agent System",
    description:
      "A blunt, factual multi-agent system built with n8n, Gemini, and Pinecone that orchestrates corporate intelligence gathering and analysis through autonomous AI agents.",
    techStack: ["n8n", "Gemini", "Pinecone", "Python", "LLM"],
    highlights: [
      "Multi-agent orchestration with autonomous task delegation",
      "RAG-powered knowledge retrieval via Pinecone",
      "Factual, no-nonsense corporate analysis output",
    ],
    category: "Automation & AI",
    githubUrl:
      "https://github.com/tanaygattani8/The-Corporate-Sociologist-Multi-Agent-System",
    image: "/images/project-agents.png",
  },
  {
    id: "ecommerce-agents",
    title: "Scalable Agent Collaboration for E-commerce",
    description:
      "Flexible fulfillment pipeline with modular LLM-powered agents and dynamic tracking, designed for scalable e-commerce order processing and automation.",
    techStack: ["Python", "Jupyter", "LLM", "Agents"],
    highlights: [
      "Modular agent architecture for fulfillment workflows",
      "Dynamic tracking and order state management",
      "LLM-powered decision making at each pipeline stage",
    ],
    category: "Automation & AI",
    githubUrl:
      "https://github.com/tanaygattani8/Scalable-Agent-Collaboration-for-E-commerce",
    image: "/images/project-agents.png",
  },
  {
    id: "process-capability-agent",
    title: "Process Capability AI Agent",
    description:
      "AI-powered process capability analysis agent for manufacturing quality control, automating statistical evaluations and generating actionable insights.",
    techStack: ["Python", "AI Model", "Agents", "Statistics"],
    highlights: [
      "Automated quality control analysis",
      "Process capability index calculation",
      "Actionable insights generation",
    ],
    category: "Automation & AI",
    githubUrl: "https://github.com/tanaygattani8/Process_Capability_AI_Agent",
    image: "/images/project-agents.png",
  },
  {
    id: "survey-dashboard",
    title: "Data Professional Survey Analysis",
    description:
      "Interactive Power BI dashboard analyzing data professional survey responses to uncover industry trends, salary benchmarks, and demographic distributions.",
    techStack: ["Power BI", "Data Viz", "Survey Analysis"],
    highlights: [
      "Interactive filtering and drill-down capabilities",
      "Salary benchmarking by role and experience",
      "Demographic insights visualization",
    ],
    category: "Data Analytics",
    githubUrl: "https://github.com/tanaygattani8/Data_Professional_Survey_Analysis_Dashboard_Power_BI",
    image: "/images/project-sales.png",
  },
];
