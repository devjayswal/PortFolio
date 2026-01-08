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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const experiencesData = [
  {
      title: "Freelance Software Developer",
      location: "Remote",
      description: "Working as a freelance developer, building robust solutions for various clients. Developed a custom CRM system to streamline business processes and 'Eazy-Tutors', built Mits-Sats, for automating the scheduling and management of classes, tutors, classrooms and multiple branches, handled more than 100 branches, able to solve an NP-hard scheduling problem with 2 second response time.",
      icon: React.createElement(CgWorkAlt),
      date: "2024 - Present",
      certificateUrl: "",
  },
  {
    title: "AI Intern @ FoodNEST(S) technologies",
    location: "Lucknow, India",
    description:
      `Developed and deployed a multilingual, multi-model AI chatbot, automating order processing for over 500+ users (including Riders and Vendors), reducing manual order management by 40%. Fine-tuned 10+ large and small models via collected data including Meta LLaMA, ChatGPT, Spicy, and other models. Integrated image, text, and voice input capabilities for seamless interaction, improving user engagement by 30%. Built a comprehensive web scraper, map scraper, and video scraper, enabling data collection from leading e-commerce platforms, contributing to a 20% increase in data processing efficiency. Engineered a Progressive Web App using Svelte, ExpressJS, and MongoDB, facilitating real-time order tracking and improving operational efficiency by 25%. Built and led multiple end-to-end projects on AI/ML and web development.`,
    icon: React.createElement(CgWorkAlt),
    date: "2024 - 2025",
    certificateUrl: "",
  },
  {
    title: "Tech Team at Kisaanpe.com",
    location: "Gwalior, India",
    description:
      "I was invited to join the tech team at Kisaanpe.com. I worked on the front-end and back-end of the website. I also worked on the QR onboarding system.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
    certificateUrl: "",
  },
  {
    title: "Tech Team at Google Developer Student Club",
    location: "MITS, Gwalior",
    description:
      "I worked as a tech team member at the Google Developer Student Club. I contributed to organizing events and workshops. Working in the tech team helped me to improve my skills and knowledge.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
    certificateUrl: "",
  },
];

export const projectsData = [
  {
    title: "MITS SATS",
    description:
      "A comprehensive platform for MITS Gwalior students. Visit the live site to explore features.",
    tags: ["Next.js", "React", "Tailwind", "Framer Motion"],
    imageUrl: rmtdevImg,
    link: "https://github.com/devjayswal/mits-sats.git",
  },
  {
    title: "SocialEnv",
    description:
      "It is a social media platform. I built it entirely from scratch. It has features like user authentication, post creation, commenting, liking, drag and drop uploading, and more.",
    tags: ["React", "Vue.js", "Appwrite", "Tailwind", "TypeScript"],
    imageUrl: corpcommentImg,
    link: "https://github.com/devjayswal/SocialEnv",
  },
  {
    title: "OrderFlow Optimizer",
    description:
      "It's a CLI program which can handle real-time order scheduling utilizing the functionality of instant scheduling and buffer scheduling. It can handle real-time orders, batch them and assign to the nearest rider. It supports multi-vendor and multi-rider without breaking the OTD, maximizes the profit and supports bulk scheduling.",
    tags: ["Python", "OSRM", "MongoDB", "TSP", "Algorithm"],
    imageUrl: wordanalyticsImg,
    link: "https://github.com/devjayswal/OrderFlow-Optimizer",
  },
  {
      title: "SchedulAI",
      description: "Source code of a scheduler which is created to automate the process of timetable creation. This utilizes PPO RL technique for scheduling.",
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
