// ============================================
// PORTFOLIO DATA - Edit this file to update your portfolio!
// ============================================

// BASIC INFO
export const personalInfo = {
  name: "Omgiri Goswami ",
  initials: "Om ",
  title: "Data Scientist ",
  tagline: "Transforming complex data into actionable insights through machine learning, statistical analysis, and elegant code solutions.",
  location: "Ahmadabad, India",
  email: "omg60963@gmail.com",
  availability: "Available for remote opportunities",
  welcomeText: "Welcome to my portfolio",
};

// HERO SECTION
export const heroSection = {
  words: ["Data Scientist", "&", "MERN Developer"],
  highlightWordIndex: 0, // Index of word to highlight with gradient (0 = first word)
  ctaPrimary: {
    text: "View Work",
    href: "#projects",
    scrollTo: "projects",
  },
  ctaSecondary: {
    text: "Get in Touch",
    href: "#contact",
  },
  ctaResume: {
    text: "Download Resume",
    resumeUrl: "/resume/Om Goswami (2).pdf",
  },
};

// ABOUT SECTION
export const aboutSection = {
  sectionId: "about",
  subtitle: "About Me",
  title: "From Full Stack to",
  titleHighlight: "Data-Driven",
  paragraphs: [
    "My journey in tech began with building full-stack applications using the MERN stack. I was fascinated by creating interactive user experiences and scalable backend systems.",
    "However, I discovered a deeper passion in the intersection of data and decision-making. The ability to extract meaningful patterns from raw data and influence strategic decisions through insights became my new calling.",
    "Today, I specialize in machine learning, statistical analysis, and data visualization. I combine my software engineering background with data science expertise to build end-to-end data solutions—from data pipelines to deployed models.",
  ],
  traits: [
    "Problem Solving",
    "Clean Code",
    "Data Storytelling",
  ],
};

// SKILLS SECTION
export type SkillCategory = "programming" | "data" | "web" | "tools";

export interface Skill {
  id: string;
  name: string;
  icon: string; // Lucide icon name (e.g., "Code2", "Database")
  level: number; // 0-100
  description: string;
  category: SkillCategory;
}

export const skillsSection = {
  sectionId: "skills",
  subtitle: "Technical Skills",
  title: "Tools &",
  titleHighlight: "Technologies",
};

export const skills: Skill[] = [
  {
    id: "python",
    name: "Python",
    icon: "Code2",
    level: 90,
    description: "Pandas,Numpy,Data Analysis, ML, Automation",
    category: "programming",
  },
  {
    id: "sql",
    name: "SQL",
    icon: "Database",
    level: 85,
    description: "Queries, Optimization, ETL",
    category: "data",
  },
  {
    id: "machine-learning",
    name: "Machine Learning",
    icon: "Brain",
    level: 80,
    description: "Scikit-learn, TensorFlow, NLP",
    category: "data",
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: "Globe",
    level: 85,
    description: "Full-stack, SSR, API Routes",
    category: "web",
  },
  {
    id: "react",
    name: "React",
    icon: "Layout",
    level: 88,
    description: "Components, Hooks, State",
    category: "web",
  },
  {
    id: "data-visualization",
    name: "Data Visualization",
    icon: "BarChart3",
    level: 82,
    description: "Matplotlib, Seaborn, D3.js",
    category: "data",
  },
  {
    id: "data-clearing",
    name: "Data Clearing",
    icon: "BarChart3",
    level: 89,
    description: "Seaborn",
    category: "data",
  },
];

// PROJECTS SECTION
export type ProjectCategory = "all" | "machine-learning" | "data-analysis" | "web-dev" | "nlp";
export type VizType = "bar" | "line" | "scatter" | "area" | "pie";

export interface ProjectTool {
  name: string;
  icon: string; // Lucide icon name
}

export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  category: ProjectCategory;
  dataTags: string[];
  tools: ProjectTool[];
  metric: string;
  metricLabel: string;
  vizType: VizType;
  githubUrl?: string;
  color: string; // Hex color for the project accent
}

export const projectsSection = {
  sectionId: "projects",
  subtitle: "Data Storytelling",
  title: "Featured",
  titleHighlight: "Projects",
  description: "Deep dives into real-world data problems—click any card to explore the full story.",
};

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "machine-learning", label: "Machine Learning" },
  { id: "data-analysis", label: "Data Analysis" },
  { id: "nlp", label: "NLP" },
  { id: "web-dev", label: "Web Dev" },
];

export const projects: Project[] = [
  {
    id: "churn-prediction",
    title: "Customer Churn Prediction",
    description: "Predictive model identifying at-risk customers with 89% accuracy using ensemble methods.",
    problem: "A subscription-based SaaS company was losing 15% of customers monthly with no early warning system. The marketing team needed to identify churn signals 30 days in advance to enable proactive retention campaigns.",
    solution: "Built a XGBoost-based ensemble model trained on 50+ behavioral features including login frequency, feature usage patterns, and support ticket history. Integrated with CRM for automated outreach workflows.",
    category: "machine-learning",
    dataTags: ["Classification", "Ensemble Methods", "Customer Analytics"],
    tools: [
      { name: "Python", icon: "Code2" },
      { name: "XGBoost", icon: "TreePine" },
      { name: "Scikit-learn", icon: "Brain" },
      { name: "Pandas", icon: "Grid3X3" },
    ],
    metric: "23%",
    metricLabel: "Churn Reduction",
    vizType: "bar",
    githubUrl: "https://github.com/example/churn-prediction",
    color: "#00d4ff",
  },
  {
    id: "sales-dashboard",
    title: "Sales Trend Analysis Dashboard",
    description: "Interactive dashboard analyzing 5 years of sales data with seasonal pattern detection.",
    problem: "The operations team struggled with manual Excel reports taking 3 days to compile. Regional managers had no real-time visibility into performance, leading to delayed inventory decisions.",
    solution: "Developed a Next.js dashboard with Python backend processing 2M+ transactions. Implemented automated anomaly detection and seasonal decomposition for accurate demand forecasting.",
    category: "data-analysis",
    dataTags: ["Time Series", "Forecasting", "Visualization"],
    tools: [
      { name: "Next.js", icon: "Globe" },
      { name: "Python", icon: "Code2" },
      { name: "Plotly", icon: "BarChart2" },
      { name: "SQL", icon: "Database" },
    ],
    metric: "15%",
    metricLabel: "Cost Reduction",
    vizType: "line",
    githubUrl: "https://github.com/example/sales-dashboard",
    color: "#00ff88",
  },
  {
    id: "user-segmentation",
    title: "RFM User Segmentation Engine",
    description: "ML-powered customer segmentation system identifying 6 distinct personas for targeted marketing.",
    problem: "Marketing campaigns were blasting all customers with generic messages, resulting in low engagement rates and wasted budget. The team needed intelligent segmentation to deliver personalized content.",
    solution: "Implemented RFM (Recency, Frequency, Monetary) analysis combined with K-Means clustering. Created automated persona profiles with preferred channels, optimal send times, and content recommendations.",
    category: "machine-learning",
    dataTags: ["Clustering", "Marketing Analytics", "RFM Analysis"],
    tools: [
      { name: "Python", icon: "Code2" },
      { name: "Scikit-learn", icon: "Brain" },
      { name: "SQL", icon: "Database" },
      { name: "React", icon: "Layout" },
    ],
    metric: "31%",
    metricLabel: "Conversion Lift",
    vizType: "scatter",
    githubUrl: "https://github.com/example/user-segmentation",
    color: "#ff6b6b",
  },
  {
    id: "sentiment-analysis",
    title: "Real-time Sentiment Analyzer",
    description: "NLP pipeline processing 10K+ reviews daily with sub-second latency for product insights.",
    problem: "Product managers relied on quarterly surveys missing 90% of customer feedback scattered across app stores, social media, and support tickets. Manual analysis couldn't scale with growth.",
    solution: "Deployed a fine-tuned BERT model on AWS Lambda with Redis caching. Built a real-time dashboard aggregating sentiment trends by product feature, competitor comparison, and emerging issues.",
    category: "nlp",
    dataTags: ["NLP", "BERT", "Real-time Processing"],
    tools: [
      { name: "Python", icon: "Code2" },
      { name: "Transformers", icon: "Brain" },
      { name: "AWS", icon: "Cloud" },
      { name: "Redis", icon: "Zap" },
    ],
    metric: "89%",
    metricLabel: "Accuracy",
    vizType: "area",
    githubUrl: "https://github.com/example/sentiment-analyzer",
    color: "#a855f7",
  },
  {
    id: "fraud-detection",
    title: "E-commerce Fraud Detection",
    description: "Real-time transaction scoring system preventing fraudulent purchases with 0.3% false positive rate.",
    problem: "The fraud team was manually reviewing 20% of transactions, causing checkout delays and customer frustration. Fraud losses were eating 3% of revenue monthly.",
    solution: "Built a lightweight Random Forest model optimized for low-latency inference. Implemented feature engineering pipeline extracting device fingerprint, velocity patterns, and behavioral biometrics.",
    category: "machine-learning",
    dataTags: ["Anomaly Detection", "Real-time", "Risk Scoring"],
    tools: [
      { name: "Python", icon: "Code2" },
      { name: "Scikit-learn", icon: "Brain" },
      { name: "Kafka", icon: "Zap" },
      { name: "PostgreSQL", icon: "Database" },
    ],
    metric: "$2.4M",
    metricLabel: "Annual Savings",
    vizType: "pie",
    githubUrl: "https://github.com/example/fraud-detection",
    color: "#f59e0b",
  },
  {
    id: "inventory-optimizer",
    title: "Smart Inventory Optimizer",
    description: "ML-driven demand forecasting reducing stockouts by 45% while cutting excess inventory.",
    problem: "The warehouse was managing 50K SKUs with Excel-based ordering causing frequent stockouts on popular items and overstock on slow-movers. Manual forecasting couldn't account for trends or seasonality.",
    solution: "Developed a time series forecasting system combining Prophet for trend decomposition with custom safety stock calculations. Integrated with ERP for automated purchase order generation.",
    category: "data-analysis",
    dataTags: ["Forecasting", "Supply Chain", "Optimization"],
    tools: [
      { name: "Python", icon: "Code2" },
      { name: "Prophet", icon: "TrendingUp" },
      { name: "SQL", icon: "Database" },
      { name: "FastAPI", icon: "HardDrive" },
    ],
    metric: "45%",
    metricLabel: "Fewer Stockouts",
    vizType: "line",
    color: "#22c55e",
  },
];

// TIMELINE SECTION
export type TimelineItemType = "education" | "work" | "certification";

export interface TimelineItem {
  type: TimelineItemType;
  title: string;
  organization: string;
  location?: string;
  period: string;
  description: string;
  highlights?: string[];
}

export const timelineSection = {
  sectionId: "experience",
  subtitle: "Journey",
  title: "Experience &",
  titleHighlight: "Education",
  description: "From academia to industry—my path in technology and data science.",
};

export const timelineItems: TimelineItem[] = [
  {
    type: "education",
    title: "Master of Computer Applications (MCA)",
    organization: "LDRP Institute of Technology and Research",
    location: "Gujarat, India",
    period: "2025 - 2027",
    description: "Specialized in Data Science and Machine Learning with a focus on practical applications. Completed thesis on predictive analytics using ensemble methods.",
    highlights: ["Data Science Track", "Machine Learning Specialization", "Research Thesis"],
  },
  {
    type: "work",
    title: "Data Science Intern",
    organization: "Essy Learn Academy",
    location: "Remote",
    period: "Jun 2022 - Dec 2022",
    description: "Built ML models for customer behavior analysis and developed data pipelines processing real-time events. Created visualization dashboards for business intelligence.",
    highlights: ["Customer Analytics", "Real-time Pipelines", "Dashboard Development"],
  },
  {
    type: "certification",
    title: "AWS Certified Data Analytics",
    organization: "Amazon Web Services",
    period: "2023",
    description: "Validated expertise in designing and implementing AWS data analytics solutions at scale, including Kinesis, Glue, and Redshift.",
  },
  {
    type: "work",
    title: "Founder & Developer",
    organization: "Nexora Digital",
    location: "Self-founded",
    period: "2024 - Present",
    description: "Building innovative data-driven solutions for businesses. Specializing in ML-powered applications, dashboards, and automation tools.",
    highlights: ["Full-stack Development", "ML Integration", "Product Development"],
  },
  {
    type: "education",
    title: "Bachelor of Computer Applications (BCA)",
    organization: "Gujarat University",
    location: "Gujarat, India",
    period: "2018 - 2021",
    description: "Foundation in computer science, programming, and software development principles.",
    highlights: ["Programming Fundamentals", "Web Development", "Database Systems"],
  },
];

// CONTACT SECTION
export const contactSection = {
  sectionId: "contact",
  subtitle: "Get in Touch",
  title: "Let's",
  titleHighlight: "Connect",
  description: "Have a project in mind or want to collaborate? I'd love to hear from you.",
  successTitle: "Message Sent!",
  successMessage: "Thanks for reaching out. I'll get back to you within 24 hours.",
  copyEmailSuccess: "Email copied to clipboard!",
  messageSuccess: "Message sent successfully!",
};

export const contactInfo = {
  email: "omg60963@gmail.com",
  location: "Ahmadabad, India",
  availability: "Available for remote opportunities",
};

// SOCIAL LINKS
export interface SocialLink {
  name: string;
  href: string;
  iconType: "github" | "linkedin" | "twitter" | "email";
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/yourusername",
    iconType: "github",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    iconType: "linkedin",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/yourusername",
    iconType: "twitter",
  },
];

// NAVIGATION LINKS
export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

// FOOTER SECTION
export const footerSection = {
  tagline: "Data Scientist & Developer",
  buildText: "Built with ",
  buildTools: "Goswami Omgiri V",
};

// TIMELINE TYPE CONFIG (for styling)
export const timelineTypeConfig = {
  education: {
    color: "#00d4ff",
    gradient: "from-neon-cyan/20 to-neon-cyan/5",
    borderColor: "border-neon-cyan/30",
  },
  work: {
    color: "#00ff88",
    gradient: "from-success/20 to-success/5",
    borderColor: "border-success/30",
  },
  certification: {
    color: "#a855f7",
    gradient: "from-purple-500/20 to-purple-500/5",
    borderColor: "border-purple-500/30",
  },
};
