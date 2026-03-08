"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

const MotionDiv = motion.div;
const MotionH1 = motion.h1;

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-16 max-w-[50rem] text-center sm:mb-0 scroll-mt-24"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <MotionDiv
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/profile_photo.jpeg"
              alt="Dev Jayswal portrait"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </MotionDiv>
        </div>
      </div>

      <MotionH1
        className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.65] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-md border border-black/10 bg-white/70 px-3 py-1 font-mono text-xs text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-white/70">
          <span className="text-emerald-600 dark:text-emerald-400">$</span>
          <span>whoami</span>
          <span className="text-gray-500 dark:text-white/40">dev-jayswal</span>
        </span>
        <span className="font-bold">Software Developer | Full Stack + AI/ML</span>
        <br />
        <span className="text-base sm:text-2xl">
          2+ years experience • .NET • Angular • React • Next.js • Python
        </span>
        <br />
        <span className="text-base sm:text-2xl">
          Built enterprise modules, AI automation systems, and high-scale scheduling tools.
        </span>
      </MotionH1>

      <MotionDiv
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-base sm:text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        
        <Link
          href="/resumes"
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
        >
          Open Resumes Folder{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </Link>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/dev-jayswal-mits/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/devjayswal"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </MotionDiv>
    </section>
  );
}
