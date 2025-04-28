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
    title: "Tech Team at Kisaanpe.com",
    location: "Gwalior, india",
    description:
      "I invited to join the tech team at Kisaanpe.com. I worked on the front-end and back-end of the website. I also worked on the QR onboaring system.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "AI Intern @ FoodNEST(S) technologies",
    location: "Lucknow, India",
    description:
      "I worked as a AI intern at FoodNEST(S) technologies. I worked on Scraping and data analysis. I fine-tuned some of the SLMs and LLMs., i deployed to them in runpod.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
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
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
