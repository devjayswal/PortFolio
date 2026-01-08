"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";

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
          <div key={index} className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white/80 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              {category.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
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
                    <div className="relative h-14 w-14 bg-white dark:bg-white/10 rounded-lg p-2 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="text-xs font-medium text-gray-700 dark:text-white/70 text-center max-w-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
