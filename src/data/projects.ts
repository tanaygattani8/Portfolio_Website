export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
  category: "Data Engineering" | "Automation & AI" | "Data Analytics" | "Machine Learning";
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
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  // ── Slide 2: Machine Learning projects ─────────────────────────────────
  {
    id: "netflix-recommendation",
    title: "Netflix Recommendation System",
    description:
      "A full-stack movie recommendation engine using content-based filtering and cosine similarity, with a Flask web app that scrapes live IMDB reviews and classifies them as Good or Bad using an NLP model.",
    techStack: ["Python", "Flask", "scikit-learn", "NLP", "BeautifulSoup", "Pickle"],
    highlights: [
      "Content-based filtering with CountVectorizer & cosine similarity across 5,000+ titles",
      "Live IMDB review scraping with real-time Naive Bayes sentiment classification",
      "Deployed Flask app with TMDB API integration for full cast & movie details",
    ],
    category: "Machine Learning",
    githubUrl: "https://github.com/tanaygattani8/Netflix_Recommendation_System",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "amazon-sentiment",
    title: "Amazon Review Sentiment Analysis",
    description:
      "End-to-end NLP pipeline that cleans and classifies 10,000+ Amazon product reviews as positive or negative using TF-IDF vectorization and machine learning classifiers.",
    techStack: ["Python", "scikit-learn", "NLTK", "TF-IDF", "Pandas", "Seaborn"],
    highlights: [
      "Cleaned 10,000 raw reviews to 919 high-quality samples via aggressive filtering",
      "TF-IDF feature engineering with lemmatization and stopword removal",
      "Multi-model benchmarking with accuracy, precision, recall, F1, and confusion matrix",
    ],
    category: "Machine Learning",
    githubUrl: "https://github.com/tanaygattani8/Amazon_Review_Sentiment_Analysis",
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
  // ── Slide 3: Automation & AI projects ────────────────────────────────────
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
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
  },
];
