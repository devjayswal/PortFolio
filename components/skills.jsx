"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const MotionDiv = motion.div;

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-16 max-w-[70rem] scroll-mt-16 text-center sm:mb-24"
    >
      <SectionHeading>My skills</SectionHeading>
      <div className="w-full flex flex-col gap-6">
        {skillsData.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-xl border border-black/10 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5"
          >
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-gray-700 dark:text-white/70">
              {category.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-5">
              {category.skills.map((skill, i) => (
                <MotionDiv
                  key={i}
                  className="group relative"
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={i}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-md border border-black/10 bg-white p-2 transition-all duration-300 hover:scale-110 dark:border-white/10 dark:bg-white/10">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="max-w-[84px] text-center font-mono text-[0.65rem] uppercase tracking-wide text-gray-600 dark:text-white/70">
                      {skill.name}
                    </span>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
