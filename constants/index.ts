import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "Python",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "C++",
    image: "tauri.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Machine Learning",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Git",
    image: "express.png",
    width: 80,
    height: 80,
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/kinza7124",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/kinza-afzal7-/",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Express.js",
    image: "docker.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "Deep Learning",
    image: "graphql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "AI Tools",
    image: "firebase.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "RAGs",
    image: "reactquery.png",
    width: 70,
    height: 70,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "GitHub",
    image: "figma.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Jira",
    image: "mui.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Docker",
    image: "prisma.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "Worklog App | ACM TechOps Team",
    description:
      "Group project built for ACM TechOps Team: a hierarchical worklog tracking platform with role-based access (Organization Owner → Team Owner → Team Member), 5-state progress flow, credits management, ratings, and file attachments. I primarily worked on the backend and PostgreSQL/Prisma database architecture.",
    image: "/worklg_.jpg",
    link: "https://drive.google.com/file/d/1l9_X4fIEuGKjuc3v6A3IZWFY8PsyEPOR/view?usp=drive_link",
  },
  {
    title: "DSA Mentor Pro | Socratic AI Learning Platform",
    description:
      "Architected a high-fidelity, multimodal DSA tutoring platform powered by Google Gemini AI with agentic reasoning, chain-of-thought prompting, and structured JSON schema output. Provides interactive learning experiences for mastering Data Structures and Algorithms.",
    image: "/dsa.png",
    link: "https://github.com/kinza7124/DSA-Coding-Mentor",
  },
  {
    title: "Network Log Analyzer | ML + Networking",
    description:
      "ML model utilizing Natural Language Processing techniques to monitor network logs and detect anomalies with automated email alerts via ChatOps. Combines machine learning with networking concepts for intelligent system monitoring.",
    image: "/network-soc.png",
    link: "https://network-log-analyzer-7aue37agzfrjiri7tv4hkd.streamlit.app/",
  },
  {
    title: "Predicting Bug Type from Text",
    description:
      "Machine Learning & NLP preprocessing pipeline to predict bug types from text data using advanced classification algorithms. Demonstrates supervised learning, ensemble learning, and text classification techniques.",
    image: "/bug.png",
    link: "https://predicting-bug-type-ml-project.vercel.app/",
  },
  {
    title: "Algorithm Visualiser",
    description:
      "Interactive platform visualizing sorting, searching, and graph algorithms in real-time. Built with JavaScript and deployed on Vercel for seamless learning of complex algorithmic concepts.",
    image: "/sorting-visual.png",
    link: "https://algorithm-visualiser-eight.vercel.app/",
  },
  {
    title: "📚 Book Recommender System",
    description:
      "A machine learning–powered Book Recommendation System that suggests books to users using Popularity-Based Filtering and Collaborative Filtering techniques. The system is deployed as a web application and provides personalized book recommendations based on user behavior.",
    image: "/book-rs.png",
    link: "https://github.com/kinza7124/Book-Recommender-System",
  },
  {
    title: "LMS Studio",
    description:
      "A comprehensive Learning Management System with role-based access, course management, assignment submission, and automated teacher-course eligibility verification. Includes Google Classroom-like announcements, course streams, and activity logs. Tech: Next.js, TypeScript, Tailwind CSS, React Hooks, Axios | Node.js, Express.js, JWT, Bcrypt, Multer, Nodemailer | PostgreSQL with triggers/views. More: https://lnkd.in/dTpuzff8 | Blog: https://lnkd.in/dkRzKj38",
    image: "/lms-studio.png",
    link: "https://lnkd.in/d3d_diT8",
  },
  {
    title: "NetLabPro",
    description:
      "Interactive learning and gamified platform developed for Computer Network Labs. Provides hands-on experience with networking concepts through engaging, interactive modules.",
    image: "/netlabpro.png",
    link: "https://net-lab-pro.vercel.app/",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Connect",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/kinza7124",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/kinza-afzal7-/",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "My Projects",
        icon: null,
        link: "#projects",
      },
      {
        name: "Education",
        icon: null,
        link: "#education",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:kinzaafzal07122004@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About",
    link: "#about-me",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Education",
    link: "#education",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/kinza7124/space-portfolio",
};

export const LEADERSHIP_DATA = [
  {
    title: "Assistant Director",
    organization: "Developers' Day - ACM NUCES",
    duration: "Feb 2026 - Present",
    description: "Assistant Director of GR Tech Fest at DevDay'26",
    achievement: "Leading organizational efforts for the flagship event.",
    links: [
      {
        title: "Developers' Day",
        url: "https://www.linkedin.com/company/developersday/posts/?feedView=all"
      }
    ]
  },
  {
    title: "Co Head",
    organization: "ACM NUCES KHI",
    duration: "Aug 2025 - Present",
    description: "Design Co-Head at ACM NUCES KHI Student Chapter",
    achievement: "Leading the visual identity and design strategy for the ACM student chapter."
  },
  {
    title: "Member",
    organization: "TechOperations Team - ACM NUCES KHI",
    duration: "Aug 2025 - Present",
    description: "Backend Development - Worklog Project",
    achievement: "Developed backend for a performance identification platform that links GitHub profiles, allowing admins to rate and analyze commits, PRs, and contributions to identify star performers.",
    links: [
      {
        title: "View Showcase",
        url: "https://tech-operations-showcase.raahim-irfan.workers.dev/"
      }
    ]
  },
  {
    title: "Member",
    organization: "Automation Team - Developers' Day - ACM NUCES",
    duration: "Feb 2025 - Jun 2025",
    description: "Automation Showcase - DevDay'25",
    achievement: "Developed email automation, custom templates, and the results portal frontend.",
    links: [
      {
        title: "View Automation Showcase",
        url: "https://automation-showcase-devday25.vercel.app/"
      }
    ]
  },
  {
    title: "Head",
    organization: "IEEE NUCES KHI",
    duration: "2024 - 2025",
    description: "Design Head",
    achievement: "Directed social media visual content and logo designs for national level events.",
    links: []
  },
] as const;

export const AWARDS_DATA = [
  {
    title: "Rector's List of Honours",
    issuer: "FAST NUCES",
    date: "Fall 2024, Spring 2025",
    description: "Excellence in academic performance and integrity (3x recipient)."
  },
  {
    title: "Dean's List of Honours",
    issuer: "FAST NUCES",
    date: "Fall 2023, Spring 2024",
    description: "Recognized for outstanding academic achievement (2x recipient)."
  },
] as const;

export const CERTIFICATIONS_DATA = [
  {
    title: "Software Engineer Certificate",
    issuer: "HackerRank",
    date: "Jan 2026",
    description: "Certified by HackerRank for software engineering skills.",
    credentialUrl: "https://www.hackerrank.com/certificates/iframe/9592306b93a7",
    certificateFile: "software_engineer certificate.pdf",
    skills: undefined
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "Simplilearn",
    date: "Sep 2025",
    description: "Completed comprehensive introduction to AI concepts and applications.",
    credentialUrl: undefined,
    certificateFile: "Introduction to AI.pdf",
    skills: undefined
  },
  {
    title: "Supervised Learning with scikit learn",
    issuer: "DataCamp",
    date: "Sep 2025",
    description: "Mastered supervised learning techniques using scikit-learn.",
    credentialUrl: undefined,
    certificateFile: "certificate-datacamp.pdf",
    skills: undefined
  },
  {
    title: "Deloitte Job Simulation",
    issuer: "Deloitte",
    date: "Aug 2025",
    description: "Completed technology job simulation program.",
    credentialUrl: undefined,
    certificateFile: undefined,
    skills: "Job simulation"
  },
] as const;
