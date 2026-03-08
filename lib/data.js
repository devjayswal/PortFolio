import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const experiencesData = [
  {
    title: "Software Developer Intern (.NET/Full Stack) @ Eastencher.com",
    location: "Remote",
    description: "Enterprise product engineering across .NET and Angular.",
    highlights: [
      "Built modular .NET Core + Angular enterprise modules for scalability.",
      "Developed identity services: OTP verification and account recovery workflows.",
      "Optimized MongoDB access for complex datasets and faster retrieval.",
      "Converted business requirements into production-ready full-stack features.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "02/2026 - Present",
    certificateUrl: "",
  },
  {
      title: "Freelance Software Developer",
      location: "Remote",
      description: "Delivered business-focused software for multiple clients.",
      highlights: [
        "Built custom CRM workflows to streamline client operations.",
        "Developed scheduling platforms for tutors, classrooms, and branches.",
        "Handled multi-branch scheduling at 100+ branch scale.",
        "Solved NP-hard scheduling with ~2 second response time.",
      ],
      icon: React.createElement(CgWorkAlt),
      date: "2024 - Present",
      certificateUrl: "",
  },
  {
    title: "AI Intern @ FoodNEST(S) technologies",
    location: "Lucknow, India",
    description: "Built production AI and automation workflows for food operations.",
    highlights: [
      "Deployed multilingual AI chatbot for 500+ users; reduced manual order work by 40%.",
      "Fine-tuned 10+ models (including LLaMA and GPT-based variants).",
      "Added text, image, and voice input; improved engagement by 30%.",
      "Built data scraping pipelines; improved processing efficiency by 20%.",
      "Built PWA for real-time order tracking; improved operations by 25%.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2024 - 2025",
    certificateUrl: "",
  },
  {
    title: "Tech Team at Kisaanpe.com",
    location: "Gwalior, India",
    description: "Contributed to full-stack product development.",
    highlights: [
      "Worked on frontend and backend features.",
      "Implemented QR-based user onboarding flows.",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "2023",
    certificateUrl: "",
  },
  {
    title: "Tech Team at Google Developer Student Club",
    location: "MITS, Gwalior",
    description: "Supported community-led technical initiatives.",
    highlights: [
      "Contributed to technical events and workshops.",
      "Collaborated with peers on developer community programs.",
    ],
    icon: React.createElement(FaReact),
    date: "2021 - present",
    certificateUrl: "",
  },
];

export const projectsData = [
  {
    title: "MITS SATS",
    description:
      "Student operations platform for scheduling and academic workflows at MITS Gwalior.",
    tags: ["Next.js", "React", "Tailwind", "Framer Motion"],
    imageUrl: rmtdevImg,
    link: "https://github.com/devjayswal/mits-sats.git",
  },
  {
    title: "SocialEnv",
    description:
      "Full-stack social platform with auth, posting, comments, likes, and media uploads.",
    tags: ["React", "Vue.js", "Appwrite", "Tailwind", "TypeScript"],
    imageUrl: corpcommentImg,
    link: "https://github.com/devjayswal/SocialEnv",
  },
  {
    title: "OrderFlow Optimizer",
    description:
      "Real-time CLI scheduler for multi-vendor, multi-rider delivery optimization with OTD-safe routing.",
    tags: ["Python", "OSRM", "MongoDB", "TSP", "Algorithm"],
    imageUrl: wordanalyticsImg,
    link: "https://github.com/devjayswal/OrderFlow-Optimizer",
  },
  {
      title: "SchedulAI",
      description: "Automated timetable scheduler powered by PPO-based reinforcement learning.",
      tags: ["Python", "Reinforcement Learning", "PPO"],
      imageUrl: wordanalyticsImg, // Placeholder
      link: "https://github.com/devjayswal/SchedulAI",
  },
];

export const skillsData = [
  {
    title: "High Demand & Core",
    skills: [
      { name: "Python", icon: "https://skillicons.dev/icons?i=python" },
      { name: "Django", icon: "https://skillicons.dev/icons?i=django" },
      { name: "FastAPI", icon: "https://skillicons.dev/icons?i=fastapi" },
      { name: "React", icon: "https://skillicons.dev/icons?i=react" },
      { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
      { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
      { name: "TypeScript", icon: "https://skillicons.dev/icons?i=typescript" },
      { name: "JavaScript", icon: "https://skillicons.dev/icons?i=javascript" },
      { name: "Docker", icon: "https://skillicons.dev/icons?i=docker" },
      { name: "Kubernetes", icon: "https://skillicons.dev/icons?i=kubernetes" },
      { name: "AWS", icon: "https://skillicons.dev/icons?i=aws" }
    ]
  },
  {
    title: "Backend & Systems",
    skills: [
      { name: "C#", icon: "https://skillicons.dev/icons?i=cs" },
      { name: ".NET", icon: "https://skillicons.dev/icons?i=dotnet" },
      { name: "ASP.NET", icon: "https://skillicons.dev/icons?i=dotnet" },
      { name: "Flask", icon: "https://skillicons.dev/icons?i=flask" },
      { name: "Kafka", icon: "https://skillicons.dev/icons?i=kafka" },
      { name: "Go", icon: "https://skillicons.dev/icons?i=go" },
      { name: "Java", icon: "https://skillicons.dev/icons?i=java" },
      { name: "C++", icon: "https://skillicons.dev/icons?i=cpp" },
      { name: "SQL", icon: "https://skillicons.dev/icons?i=mysql" },
      { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgresql" },
      { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
      { name: "Express", icon: "https://skillicons.dev/icons?i=express" },
      { name: "GraphQL", icon: "https://skillicons.dev/icons?i=graphql" }
    ]
  },
  {
    title: "Frontend & UI",
    skills: [
      { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwind" },
      { name: "Framer Motion", icon: "https://skillicons.dev/icons?i=react" },
      { name: "Shadcn UI", icon: "https://skillicons.dev/icons?i=react" },
      { name: "Vue.js", icon: "https://skillicons.dev/icons?i=vue" },
      { name: "Svelte", icon: "https://skillicons.dev/icons?i=svelte" },
      { name: "Redux", icon: "https://skillicons.dev/icons?i=redux" },
      { name: "AppWrite", icon: "https://skillicons.dev/icons?i=appwrite" },
      { name: "Vite.js", icon: "https://skillicons.dev/icons?i=vite" }
    ]
  },
  {
    title: "AI / ML & Data Science",
    skills: [
      { name: "TensorFlow", icon: "https://skillicons.dev/icons?i=tensorflow" },
      { name: "PyTorch", icon: "https://skillicons.dev/icons?i=pytorch" },
      { name: "Keras", icon: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" },
      { name: "OpenCV", icon: "https://skillicons.dev/icons?i=opencv" },
      { name: "Scikit-learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
      { name: "YOLO", icon: "https://skillicons.dev/icons?i=python" },
      { name: "LangChain", icon: "https://cdn.worldvectorlogo.com/logos/langchain-1.svg" },
      { name: "Transformers", icon: "https://skillicons.dev/icons?i=python" }
    ]
  },
  {
    title: "Security & Tools",
    skills: [
      { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
      { name: "Linux", icon: "https://skillicons.dev/icons?i=linux" },
      { name: "WireShark", icon: "https://upload.wikimedia.org/wikipedia/commons/d/df/Wireshark_icon.svg" },
      { name: "Kali Linux", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Kali_Linux_2.0_wordmark.svg" },
      { name: "Snort", icon: "https://skillicons.dev/icons?i=python" },
      { name: "OWASP", icon: "https://skillicons.dev/icons?i=python" },
      { name: "Vault", icon: "https://skillicons.dev/icons?i=linux" },
      { name: "Prisma", icon: "https://skillicons.dev/icons?i=prisma" }
    ]
  }
];
