export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: 'Live & Active' | 'Concept & Architecture' | 'Completed' | 'Active Community';
  image?: string;
  detailsAvailable: boolean;
}

export interface SuperpowerSkill {
  name: string;
  category: 'Cloud' | 'AI / ML' | 'Development' | 'Data';
  status: 'Building' | 'Exploring' | 'Learning' | 'Working With';
  description: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  organization: string;
  location?: string;
  category: 'Certification' | 'Leadership' | 'Academic' | 'Experience' | 'Building';
  description: string;
  highlights: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  dateOrPeriod: string;
  type: 'AWS Certification' | 'Community Leadership' | 'Academic Honors' | 'Academic Specialization' | 'Hackathon' | 'Industry Internship';
  description: string;
}

export const PROFILE = {
  name: "Kunal Khapre",
  photoUrl: "/assets/aistudio/Screenshot_2026-11-03_at_18.08.37_818ffaa2.png",
  headlineRole: "AI & Cloud Enthusiast | B.Tech Computer Technology (Artificial Intelligence) Student",
  heroHeadline: "Building My Tech Superpower with AI & Cloud.",
  heroSubheadline: "B.Tech AI student from Indore building practical solutions with AWS, Machine Learning and Generative AI.",
  superpowerStatement: "My superpower is turning ideas into practical AI and cloud solutions.",
  statusBadge: "AWS Student Builder Group Leader",
  education: {
    degree: "B.Tech Computer Technology (Artificial Intelligence)",
    institution: "SAGE University Indore",
    graduation: "Expected 2028",
    cgpa: "7.9 / 10",
    location: "Indore, Madhya Pradesh, India",
  },
  careerFocus: [
    "AI Engineering",
    "Cloud + AI",
    "Machine Learning",
    "AWS",
    "Generative AI"
  ],
  aboutStory: [
    "I’m Kunal Khapre, a B.Tech Computer Technology (Artificial Intelligence) student at SAGE University Indore. My focus is on understanding how AI and cloud technologies can be combined to build useful real-world solutions.",
    "My journey is centered around learning by building — exploring AWS, Machine Learning, Generative AI and modern developer tools while continuously improving my technical skills.",
    "As an AWS Student Builder Group Leader, I also enjoy creating opportunities for other students to learn, build and explore cloud technology."
  ],
  links: {
    github: "https://github.com/kunalkhapre0",
    kaggle: "https://www.kaggle.com/kunalkhapre02",
    leetcode: "https://leetcode.com/u/kunal_khapre/",
    linkedin: "https://linkedin.com",
  }
};

export const SUPERPOWER_SKILLS: SuperpowerSkill[] = [
  // Cloud
  {
    name: "AWS",
    category: "Cloud",
    status: "Building",
    description: "Core cloud architecture, compute, storage, security, and AI services on Amazon Web Services."
  },
  {
    name: "AWS Amplify",
    category: "Cloud",
    status: "Working With",
    description: "Fullstack Git-connected CI/CD hosting, build orchestration, and serverless web delivery."
  },
  {
    name: "Cloud Fundamentals",
    category: "Cloud",
    status: "Learning",
    description: "High availability, cloud IAM policies, object storage, and globally distributed edge distribution."
  },

  // AI / ML
  {
    name: "Artificial Intelligence",
    category: "AI / ML",
    status: "Building",
    description: "Designing intelligent problem-solving workflows, heuristic models, and algorithmic pipelines."
  },
  {
    name: "Machine Learning",
    category: "AI / ML",
    status: "Working With",
    description: "Supervised and unsupervised models, feature engineering, predictive inference, and evaluation."
  },
  {
    name: "Generative AI",
    category: "AI / ML",
    status: "Exploring",
    description: "Large Language Models, prompt engineering, multimodal architectures, and generative application patterns."
  },

  // Development
  {
    name: "Python",
    category: "Development",
    status: "Building",
    description: "Primary language for data manipulation, machine learning scripting, API orchestration, and automation."
  },
  {
    name: "Java",
    category: "Development",
    status: "Working With",
    description: "Object-oriented programming, data structures, algorithm problem-solving, and robust software patterns."
  },
  {
    name: "Scala",
    category: "Development",
    status: "Learning",
    description: "Functional programming paradigms, scalable concurrent data computation, and typed engineering."
  },
  {
    name: "Git / GitHub",
    category: "Development",
    status: "Working With",
    description: "Version control workflows, repository management, CI/CD pipeline triggers, and open collaboration."
  },

  // Data
  {
    name: "Data Science",
    category: "Data",
    status: "Learning",
    description: "Statistical modeling, exploratory data synthesis, hypothesis testing, and quantitative research."
  },
  {
    name: "Data Analysis",
    category: "Data",
    status: "Working With",
    description: "Data wrangling, metric extraction, KPI visualization, and dataset cleaning for model training."
  },
  {
    name: "Image Processing",
    category: "Data",
    status: "Exploring",
    description: "Computer vision fundamentals, pixel matrix transformations, feature extraction, and image analysis."
  }
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: "2025–26",
    title: "SAGE Academic Excellence Award",
    organization: "SAGE University Indore",
    location: "Indore, MP, India",
    category: "Academic",
    description: "Honored with the university's academic excellence award for outstanding academic merit and dedication to computer technology and AI studies.",
    highlights: ["Recognized for academic dedication", "Maintained strong academic record in AI curriculum"]
  },
  {
    year: "2026",
    title: "AWS Certified AI Practitioner",
    organization: "Amazon Web Services (AWS)",
    category: "Certification",
    description: "Earned industry certification validating comprehensive knowledge of artificial intelligence, machine learning concepts, and AWS AI services.",
    highlights: ["AWS AI & ML core concepts", "Responsible AI and cloud security fundamentals", "AWS AI Practitioner credential"]
  },
  {
    year: "2026",
    title: "AWS Student Builder Group Leader",
    organization: "SAGE University Indore",
    location: "Indore, MP, India",
    category: "Leadership",
    description: "Selected to lead the AWS Student Builder Group, driving peer learning, hands-on cloud workshops, and builder challenges across campus.",
    highlights: ["Spearheading campus cloud community", "Organizing hands-on builder study jams", "Mentoring student peers on AWS foundations"]
  },
  {
    year: "2026",
    title: "AWS Future Builders Connect",
    organization: "Amazon Web Services",
    location: "Ahmedabad, India",
    category: "Experience",
    description: "Participated in the premier AWS Future Builders Connect event in Ahmedabad, networking with cloud architects and fellow student innovators.",
    highlights: ["Direct interaction with AWS leaders", "Insight into real-world enterprise cloud architecture", "Collaborative ecosystem exchange"]
  },
  {
    year: "2026",
    title: "Building AI + Cloud Projects",
    organization: "Independent Builder & Campus Labs",
    category: "Building",
    description: "Translating theoretical AI/ML concepts into deployable cloud prototypes, integrating generative AI, and participating in the AWS Student Builder Challenge.",
    highlights: ["Developing SkillForge AI roadmap prototype", "Authoring cloud-deployed responsive applications", "Continuous builder experimentation"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "skillforge-ai",
    title: "SkillForge AI",
    category: "AI & Career Architecture",
    description: "AI-powered career roadmap concept focused on helping users understand skills, learning paths and career direction.",
    fullDescription: "SkillForge AI explores how machine learning and intelligent recommendations can deconstruct modern tech roles into actionable, step-by-step skill graphs. Designed to guide students from foundational programming to specialized domains like AI Engineering and Cloud Architecture.",
    technologies: ["Python", "Machine Learning", "Generative AI", "AWS Cloud Concepts", "Data Science"],
    githubUrl: "https://github.com/kunalkhapre0",
    status: "Concept & Architecture",
    image: "/src/assets/images/skillforge_roadmap_concept_1793709173631.jpg",
    detailsAvailable: true
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    category: "Cloud & Web Engineering",
    description: "My AI + Cloud developer portfolio, engineered specifically for the AWS Student Builder Challenge: “Build Your Tech Superpower”.",
    fullDescription: "A dark-first, highly responsive web application featuring the signature interactive Tech Superpower Scanner, AWS Amplify Hosting deployment architecture, and a complete showcase of academic, leadership, and cloud milestones.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "AWS Amplify Hosting", "Amazon CloudFront"],
    githubUrl: "https://github.com/kunalkhapre0",
    status: "Live & Active",
    image: "/src/assets/images/hero_cloud_ai_core_1793709172924.jpg",
    detailsAvailable: true
  },
  {
    id: "auspify-ml-internship",
    title: "Machine Learning Internship Projects",
    category: "Machine Learning & Industry",
    description: "Projects developed during my Machine Learning internship at Auspify Technologies.",
    fullDescription: "Hands-on machine learning projects focusing on model experimentation, data preprocessing pipelines, and practical algorithm evaluation conducted during my internship tenure at Auspify Technologies. Additional technical briefs and project details coming soon as production documentation is published.",
    technologies: ["Python", "Machine Learning", "Data Analysis", "Predictive Modeling", "Git"],
    status: "Completed",
    detailsAvailable: false
  },
  {
    id: "sage-aws-builder-projects",
    title: "SAGE / AWS Student Builder Projects",
    category: "Cloud Community & Workshops",
    description: "Projects and activities related to learning, building and AWS community initiatives at SAGE University Indore.",
    fullDescription: "Collaborative builder sessions, cloud architecture demos, and hands-on laboratory exercises created as part of the AWS Student Builder Group at SAGE University Indore. Demonstrations cover foundational cloud deployments, IAM governance, and peer learning challenges.",
    technologies: ["AWS", "AWS Amplify", "Cloud Architecture", "Student Leadership", "Community"],
    status: "Active Community",
    detailsAvailable: false
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "aws-cert-ai",
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services (AWS)",
    dateOrPeriod: "2026",
    type: "AWS Certification",
    description: "Official AWS industry credential demonstrating foundational competence in artificial intelligence, machine learning, and associated AWS services and responsible AI practices."
  },
  {
    id: "aws-group-leader",
    title: "AWS Student Builder Group Leader",
    issuer: "SAGE University Indore",
    dateOrPeriod: "2026 – Present",
    type: "Community Leadership",
    description: "Elected student leader fostering a culture of cloud innovation, hosting hands-on AWS sessions, and coordinating builder challenge initiatives for university peers."
  },
  {
    id: "academic-excellence",
    title: "SAGE Academic Excellence Award",
    issuer: "SAGE University Indore",
    dateOrPeriod: "2025–26",
    type: "Academic Honors",
    description: "Prestigious academic award presented in recognition of high scholastic achievement and dedication in the Computer Technology (Artificial Intelligence) discipline."
  },
  {
    id: "computing-specialization",
    title: "Advanced Computing Specialization (AI)",
    issuer: "SAGE University Indore",
    dateOrPeriod: "Academic Curriculum",
    type: "Academic Specialization",
    description: "Specialized academic track focused on modern artificial intelligence paradigms, algorithmic problem solving, computational complexity, and systems design."
  },
  {
    id: "sage-hackathon",
    title: "SAGE Hackathon Experience",
    issuer: "SAGE University Indore",
    dateOrPeriod: "Competitive Event",
    type: "Hackathon",
    description: "Intensive collegiate hackathon solving real-world challenges under rapid prototyping timeframes, leveraging collaborative software engineering and rapid problem analysis."
  },
  {
    id: "auspify-internship",
    title: "Machine Learning Internship",
    issuer: "Auspify Technologies",
    dateOrPeriod: "Industry Internship",
    type: "Industry Internship",
    description: "Professional industry internship experience applying machine learning algorithms to practical datasets, refining data cleaning workflows, and benchmarking model inference."
  }
];

export const SCANNER_SKILL_SIGNALS = [
  { name: "AWS Cloud", icon: "cloud", level: "Certified AI Practitioner & Builder Leader" },
  { name: "Artificial Intelligence", icon: "brain", level: "Advanced Specialization Curriculum" },
  { name: "Machine Learning", icon: "bot", level: "Auspify Tech Internship & Modeling" },
  { name: "Generative AI", icon: "zap", level: "Prompt Engineering & Architecture" },
  { name: "Cloud Architecture", icon: "layers", level: "Amplify CI/CD & Infrastructure" },
  { name: "Building & Execution", icon: "hammer", level: "Turning Ideas into Working Software" }
];

export const SUPERPOWER_EXPLANATION_CARDS = [
  {
    title: "AWS Cloud",
    icon: "cloud",
    tagline: "Scalable Foundation",
    description: "As an AWS Certified AI Practitioner and Student Builder Group Leader, I leverage cloud primitives to transform standalone scripts into resilient, globally accessible systems."
  },
  {
    title: "Artificial Intelligence",
    icon: "brain",
    tagline: "Computational Reasoning",
    description: "Deep academic focus in B.Tech Computer Technology (AI) exploring intelligent algorithms, heuristic problem solving, and modern decision systems."
  },
  {
    title: "Machine Learning",
    icon: "bot",
    tagline: "Pattern Discovery",
    description: "Hands-on experience from my Auspify Technologies internship developing predictive pipelines, feature engineering, and model evaluation."
  },
  {
    title: "Generative AI",
    icon: "zap",
    tagline: "Augmented Creation",
    description: "Actively experimenting with modern foundational models, multimodal pipelines, and intelligent assistant paradigms for real-world tasks."
  },
  {
    title: "Building Projects",
    icon: "wrench",
    tagline: "Action Over Theory",
    description: "Belief in 'learning by building'. Rather than just reading textbooks, I write code, construct prototypes, and deploy working applications."
  },
  {
    title: "Continuous Learning",
    icon: "graduation-cap",
    tagline: "Community & Growth",
    description: "Expected graduation 2028 with 7.9 CGPA; sharing knowledge with peers through the AWS Student Builder Group and AWS Future Builders Connect."
  }
];

export const AMPLIFY_CONFIG_EXAMPLE = `version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
`;
