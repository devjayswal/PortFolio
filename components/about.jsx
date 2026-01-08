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
      className="mb-16 max-w-[45rem] text-center leading-8 sm:mb-24 scroll-mt-16"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After helping for 7 years in my father's business, I decided to pursue my
        passion for programming. I enrolled in B. Tech. at MITs Gwalior and learned{" "}
        <span className="font-medium">
          about Computer Science & built a strong foundation
        </span>
        . <span className="italic">My favorite part of programming</span> is the
        problem-solving & debugging aspect. I <span>love</span> the feeling of
        finally figuring out a solution to a problem. My core stack is{" "}
        <span className="font-medium">
          PyTorch, Langchain, React, Next.js, Express.js, MongoDB
        </span>
        . I love Linux OS [Ubuntu, Kali], cloud [AWS, DigitalOcean]. I am always
        looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time internship position</span> as a
        software developer.
      </p>

      <p>
        <span className="italic">When I’m not coding</span>, I enjoy playing
        video games [Valorant, Minecraft], watching anime, and self-care routines.
        I also enjoy{" "}
        <span className="font-medium">learning new technologies</span>. I am
        currently learning about{" "}
        <span className="font-medium">ethical hacking & pentesting</span>.
      </p>
    </MotionSection>
  );
}
