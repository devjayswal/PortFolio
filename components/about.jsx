"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const MotionSection = motion.section;

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <MotionSection
      ref={ref}
      className="mb-16 max-w-[45rem] text-center leading-7 text-sm sm:text-base sm:mb-24 scroll-mt-16"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="rounded-xl border border-black/10 bg-white/60 p-5 dark:border-white/10 dark:bg-white/5">
        <span className="mb-3 inline-flex items-center gap-2 rounded-md border border-black/10 bg-gray-50 px-2 py-1 font-mono text-[0.7rem] uppercase tracking-wide text-gray-600 dark:border-white/10 dark:bg-gray-900/40 dark:text-white/70">
          $ cat about_dev.txt
        </span>

        <ul className="space-y-2 text-left text-sm sm:text-base">
          <li>• 2+ years building full-stack and AI-focused products.</li>
          <li>• Core stack: .NET, Angular, React, Next.js, Python, MongoDB.</li>
          <li>• Strong in problem-solving, debugging, and system design.</li>
          <li>• B.Tech student at MITS Gwalior with hands-on project experience.</li>
          <li>• Comfortable with Linux, cloud workflows, and developer tooling.</li>
          <li>• Currently open to software development internship/full-time roles.</li>
        </ul>

        <p className="mt-4 text-left text-sm sm:text-base text-gray-700 dark:text-white/75">
          Outside work: gaming, anime, and continuous learning (currently ethical hacking & pentesting).
        </p>
      </div>
    </MotionSection>
  );
}
