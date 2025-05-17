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
] as const;

export const experiencesData = [
    {
    title: "AI Intern @ FoodNEST(S) technologies",
    location: "Lucknow, India",
    description:
      `Developed and deployed a multilingual, multi-model AI chatbot, automating order processing for over 500+ users (including Riders and Vendors), reducing manual order management by 40%. Fine-tuned 10+ large and small models via collected data including Meta LLaMA, ChatGPT, Spicy, and other models. Integrated image, text, and voice input capabilities for seamless interaction, improving user engagement by 30%. Built a comprehensive web scraper, map scraper, and video scraper, enabling data collection from leading e-commerce platforms, contributing to a 20% increase in data processing efficiency. Engineered a Progressive Web App using Svelte, ExpressJS, and MongoDB, facilitating real-time order tracking and improving operational efficiency by 25%.`,
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Tech Team at Kisaanpe.com",
    location: "Gwalior, india",
    description:
      "I invited to join the tech team at Kisaanpe.com. I worked on the front-end and back-end of the website. I also worked on the QR onboaring system.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Tech team at google developer student club",
    location: "MITs, gwalior",
    description:
      " I work as a tech team member at the google developer student club. I contributed to organizing events and workshops. Working in the tech team helped me to improve my skills and knowledge.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "SocialEnv",
    description:
      "It is a social media platform.I build entire it from scratch. It has features like user authentication, post creation, commenting, liking, drag and drop uploading, and more.",
    tags: ["React", "Vue.js", "Appwrite", "Tailwind", ""],
    imageUrl: corpcommentImg,
  },
  {
    title: "Consirage AI",
    description:
      "It is LLM based Consirage  which can take order from the user  by showing them templates and options, it can order just by asking question i implementated  fucntion calling to  archive that functionlity ",
    tags: ["venila js", "mongoDB", "express.js", "LLM", "OPENAI","GCP" ],
    imageUrl: rmtdevImg,
  },
  {
    title: "OrderFlow Optimizer",
    description:
      "Its a cli program which can handle realtime order scheduling utlizing the functionality of instant scheduling and buffer scheduling. It can handle real time  order , it can batch them and assign to nearest rider.it support multi vendor and multirider without breaking the OTD, maximise the profit and support bulk scheduling ",
    tags: ["Python", "OSRM", "MongoDB", "TSP", "Algorithm"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Next.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Git",
  "Docker",
  "Tailwind",
  "Redux",
  "GraphQL",
  "Svelte",
  "AppWrite",
  "Framer Motion",
  "TensorFlow",
  "PyTorch",
  "Hugging Face",
  "C++",
  "Java",
  "Go",
  "R",
  "SQL",
  "Jupyter",
  "Google Colab",
  "Nmap",
  "BurpSuite",
  "WireShark",
  "OSINT",
  "Kali Linux",
  "Metasploit Framework",
  "Kubernetes",
  "AWS",
  "GCP",
  "Prisma",
  "Vue.js",
  "Vite.js",
  "Shadcn UI",
  "SpaCy",
  "Matplotlib",
  "NumPy",
  "Pandas",
  "Scikit-learn",
  "Rstudio",
] as const;
