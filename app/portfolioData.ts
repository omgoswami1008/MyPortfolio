// ============================================
// PORTFOLIO DATA - Edit this file to update your portfolio!
// ============================================

// BASIC INFO
export const personalInfo = {
  name: "Omgiri V. Goswami",
  initials: "OG",
  title: "Aspiring Data Scientist",
  tagline:
    "Passionate about transforming raw data into meaningful insights using Python, SQL, Machine Learning, and Data Visualization. Continuously learning, building real-world projects, and solving business problems through data.",
  location: "Ahmedabad, Gujarat, India",
  email: "omg60963@gmail.com",
  availability: "Open to Internships & Full-Time Opportunities",
  welcomeText: "Welcome to My Portfolio",
};

// HERO SECTION
// HERO SECTION
export const heroSection = {
  words: [
    "Aspiring Data Scientist",
    
  ],

  highlightWordIndex: 0,

  ctaPrimary: {
    text: "Explore My Projects",
    href: "#projects",
    scrollTo: "projects",
  },

  ctaSecondary: {
    text: "Let's Connect",
    href: "#contact",
  },

  ctaResume: {
    text: "Download Resume",
    resumeUrl: "/resume/Om_Goswami_Resume.pdf",
  },
};

// ABOUT SECTION
export const aboutSection = {
  sectionId: "about",

  subtitle: "About Me",

  title: "Turning Data Into",

  titleHighlight: "Meaningful Insights",

  paragraphs: [
    "I'm Omgiri V. Goswami, an MCA student and aspiring Data Scientist with a strong passion for data analytics, machine learning, and artificial intelligence. I enjoy solving real-world problems by transforming raw data into meaningful insights using Python, SQL, and modern data science tools.",

    "My learning journey focuses on data preprocessing, exploratory data analysis (EDA), predictive modeling, and data visualization. Through hands-on projects, I've strengthened my understanding of machine learning algorithms, statistical concepts, and practical problem-solving.",

    "I believe in continuous learning and building impactful solutions. My goal is to contribute to innovative teams where I can apply my analytical skills, learn from experienced professionals, and grow into a successful Data Scientist."
  ],

  traits: [
    "Analytical Thinking",
    "Problem Solving",
    "Machine Learning",
    "Data Visualization",
    "Continuous Learning",
    "Team Collaboration"
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
  title: "Skills &",
  titleHighlight: "Technologies",
};

export const skills: Skill[] = [
  {
    id: "python",
    name: "Python",
    icon: "Code2",
    level: 85,
    description:
      "Object-Oriented Programming, Data Analysis, Automation, NumPy, Pandas",
    category: "programming",
  },

  {
    id: "sql",
    name: "SQL",
    icon: "Database",
    level: 80,
    description:
      "MySQL, Joins, Queries, Aggregation, Data Retrieval",
    category: "data",
  },

  {
    id: "pandas",
    name: "Pandas",
    icon: "Table",
    level: 85,
    description:
      "Data Cleaning, Transformation, EDA, Data Manipulation",
    category: "data",
  },

  {
    id: "numpy",
    name: "NumPy",
    icon: "Calculator",
    level: 82,
    description:
      "Arrays, Numerical Computing, Mathematical Operations",
    category: "data",
  },

  {
    id: "machine-learning",
    name: "Machine Learning",
    icon: "Brain",
    level: 75,
    description:
      "Regression, Classification, Model Evaluation, Scikit-learn",
    category: "data",
  },

  {
    id: "data-analysis",
    name: "Data Analysis",
    icon: "Search",
    level: 85,
    description:
      "EDA, Data Cleaning, Feature Engineering, Insights",
    category: "data",
  },

  {
    id: "visualization",
    name: "Data Visualization",
    icon: "BarChart3",
    level: 80,
    description:
      "Matplotlib, Seaborn, Charts, Dashboard Design",
    category: "data",
  },

  {
    id: "git",
    name: "Git & GitHub",
    icon: "GitBranch",
    level: 75,
    description:
      "Version Control, Collaboration, Repository Management",
    category: "tools",
  },

  {
    id: "vscode",
    name: "VS Code",
    icon: "Monitor",
    level: 90,
    description:
      "Development Environment, Extensions, Debugging",
    category: "tools",
  },
];

// PROJECTS SECTION
export type ProjectCategory =| "all" | "machine-learning" | "data-analysis" | "generative-ai" | "recommendation";
export type VizType = | "bar"| "line"| "scatter"| "area"| "pie";

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
  { id: "generative-ai", label: "Generative AI" },
  { id: "recommendation", label: "Recommendation" },
];

export const projects: Project[] = [
  {
    id: "rag-ai-assistant",
    title: "RAG-Based AI Teaching Assistant",
    description:
      "An AI-powered teaching assistant that answers course-related questions using Retrieval-Augmented Generation (RAG).",
    problem:
      "Students spend significant time searching through lecture notes and study materials for answers. A faster, context-aware solution was needed.",
    solution:
      "Developed a RAG application using LangChain, FAISS, and Gemini/OpenAI to retrieve relevant content from uploaded documents and generate accurate responses through a Streamlit interface.",
    category: "generative-ai",
    dataTags: [
      "RAG",
      "Generative AI",
      "LangChain",
      "LLM",
      "Vector Database",
    ],
    tools: [
      { name: "Python", icon: "Code2" },
      { name: "LangChain", icon: "Brain" },
      { name: "FAISS", icon: "Database" },
      { name: "Streamlit", icon: "Monitor" },
    ],
    metric: "RAG",
    metricLabel: "In Progress",
    vizType: "scatter",
    githubUrl: "YOUR_GITHUB_LINK",
    color: "#8B5CF6",
  },

  {
    id: "customer-churn",
    title: "Customer Churn Prediction",
    description:
      "Machine learning model for predicting customer churn using classification algorithms.",
    problem:
      "Businesses need to identify customers who are likely to leave so they can improve customer retention strategies.",
    solution:
      "Performed data cleaning, exploratory data analysis, feature engineering, model training, and evaluation using Scikit-learn classification algorithms.",
    category: "machine-learning",
    dataTags: [
      "Classification",
      "EDA",
      "Feature Engineering",
      "Machine Learning",
    ],
    tools: [
      { name: "Python", icon: "Code2" },
      { name: "Pandas", icon: "Table" },
      { name: "Scikit-learn", icon: "Brain" },
      { name: "Matplotlib", icon: "BarChart3" },
    ],
    metric: "89%",
    metricLabel: "Accuracy",
    vizType: "bar",
    githubUrl: "https://github.com/omgoswami1008/Customer-Churn-Prediction-Retention-System",
    color: "#00D4FF",
  },

  {
    id: "housing-price",
    title: "California Housing Price Prediction",
    description:
      "Regression model for predicting California housing prices using demographic and geographical features.",
    problem:
      "Estimating housing prices accurately helps buyers, sellers, and analysts make informed decisions.",
    solution:
      "Built a complete machine learning pipeline including preprocessing, feature engineering, and Random Forest Regression using Scikit-learn.",
    category: "machine-learning",
    dataTags: [
      "Regression",
      "Random Forest",
      "EDA",
      "Pipeline",
    ],
    tools: [
      { name: "Python", icon: "Code2" },
      { name: "Pandas", icon: "Table" },
      { name: "NumPy", icon: "Calculator" },
      { name: "Scikit-learn", icon: "Brain" },
    ],
    metric: "0.91",
    metricLabel: "R² Score",
    vizType: "scatter",
    githubUrl: "YOUR_GITHUB_LINK",
    color: "#0EA5E9",
  },

  {
    id: "train-route-analysis",
    title: "Train Route Analysis & Journey Time Prediction",
    description:
      "Data analysis and machine learning project for predicting train journey duration.",
    problem:
      "Railway datasets contain valuable operational information that can improve journey time estimation.",
    solution:
      "Performed data cleaning, feature engineering, visualization, and regression modeling to analyze railway operations and predict journey duration.",
    category: "data-analysis",
    dataTags: [
      "EDA",
      "Regression",
      "Visualization",
      "Feature Engineering",
    ],
    tools: [
      { name: "Python", icon: "Code2" },
      { name: "Pandas", icon: "Table" },
      { name: "Matplotlib", icon: "BarChart3" },
      { name: "Scikit-learn", icon: "Brain" },
    ],
    metric: "EDA",
    metricLabel: "Insights",
    vizType: "line",
    githubUrl: "https://github.com/omgoswami1008/Train-Route-Analysis-and-Journey-Time-Prediction",
    color: "#10B981",
  },

  {
    id: "sales-dashboard",
    title: "Retail Sales Analytics Dashboard",
    description:
      "Interactive dashboard providing business insights through sales and revenue analysis.",
    problem:
      "Business managers require visual dashboards to monitor revenue trends and product performance.",
    solution:
      "Created an analytics dashboard using Python, SQL, and visualization tools to explore sales KPIs and monthly trends.",
    category: "data-analysis",
    dataTags: [
      "Dashboard",
      "Business Analytics",
      "SQL",
      "Visualization",
    ],
    tools: [
      { name: "Python", icon: "Code2" },
      { name: "SQL", icon: "Database" },
      { name: "Power BI", icon: "BarChart3" },
      { name: "Pandas", icon: "Table" },
    ],
    metric: "12",
    metricLabel: "KPIs",
    vizType: "line",
    githubUrl: "YOUR_GITHUB_LINK",
    color: "#22C55E",
  },

  {
    id: "movie-recommendation",
    title: "Movie Recommendation System",
    description:
      "Recommendation engine that suggests movies based on content similarity.",
    problem:
      "Users often find it difficult to discover movies that match their interests.",
    solution:
      "Developed a content-based recommendation system using cosine similarity and feature extraction techniques.",
    category: "recommendation",
    dataTags: [
      "Recommendation",
      "Cosine Similarity",
      "Content-Based",
    ],
    tools: [
      { name: "Python", icon: "Code2" },
      { name: "Scikit-learn", icon: "Brain" },
      { name: "Pandas", icon: "Table" },
      { name: "Streamlit", icon: "Monitor" },
    ],
    metric: "Top 10",
    metricLabel: "Recommendations",
    vizType: "scatter",
    githubUrl: "YOUR_GITHUB_LINK",
    color: "#EC4899",
  },

  {
    id: "credit-card-fraud",
    title: "Credit Card Fraud Detection",
    description:
      "Machine learning model for detecting fraudulent credit card transactions.",
    problem:
      "Financial institutions need automated fraud detection systems to minimize financial losses.",
    solution:
      "Built a classification model using Scikit-learn with preprocessing, feature scaling, and evaluation metrics for fraud detection.",
    category: "machine-learning",
    dataTags: [
      "Classification",
      "Fraud Detection",
      "Machine Learning",
    ],
    tools: [
      { name: "Python", icon: "Code2" },
      { name: "Scikit-learn", icon: "Brain" },
      { name: "Pandas", icon: "Table" },
      { name: "Matplotlib", icon: "BarChart3" },
    ],
    metric: "96%",
    metricLabel: "Accuracy",
    vizType: "pie",
    githubUrl: "YOUR_GITHUB_LINK",
    color: "#F97316",
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
  subtitle: "Get In Touch",
  title: "Let's",
  titleHighlight: "Connect",
  description:
    "I'm currently seeking Data Science, Machine Learning, AI, and Data Analytics internship or full-time opportunities. If you'd like to discuss a project, collaboration, or career opportunity, feel free to reach out. I'd be happy to connect.",

  successTitle: "Message Sent Successfully!",
  successMessage:
    "Thank you for reaching out. I've received your message and will get back to you as soon as possible.",

  copyEmailSuccess: "Email copied successfully!",
  messageSuccess: "Your message has been sent successfully!",
};

export const contactInfo = {
  email: "omg60963@gmail.com",
  location: "Ahmedabad, Gujarat, India",
  availability: "Open to Internships & Full-Time Opportunities",
};

// SOCIAL LINKS

export interface SocialLink {
  name: string;
  href: string;
  iconType: "github" | "linkedin" | "email";
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/omgoswami1008",
    iconType: "github",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/om-goswami-79244a288",
    iconType: "linkedin",
  },
  {
    name: "Email",
    href: "mailto:omg60963@gmail.com",
    iconType: "email",
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
  buildTools: "Goswami Omgiri v",
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
