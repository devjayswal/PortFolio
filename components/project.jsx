"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Motiondiv = motion.div;

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleValue = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityValue = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const CardContent = () => (
    <section className="bg-gray-100 max-w-[28rem] border border-black/10 rounded-xl overflow-hidden relative hover:bg-gray-200/80 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-white/10 h-full flex flex-col">
      <div className="flex items-center gap-2 border-b border-black/10 px-4 py-2 dark:border-white/10">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        <p className="ml-2 truncate font-mono text-[0.65rem] uppercase tracking-wider text-gray-500 dark:text-white/40">
          ~/projects/{title}
        </p>
      </div>
      <div className="relative h-48 w-full overflow-hidden">
         <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className="object-cover w-full h-full transition group-hover:scale-110"
        />
      </div>
      
      <div className="flex flex-col flex-grow p-5">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="mt-auto leading-relaxed text-gray-700 dark:text-white/70 mb-4 text-sm">
          {description}
        </p>
        <ul className="flex flex-wrap mt-auto gap-2">
          {tags.map((tag, i) => (
            <li
              className="bg-black/[0.8] px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-white rounded-md dark:text-white/80"
              key={i}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );

  return (
    <Motiondiv
      ref={ref}
      style={{
        scale: scaleValue,
        opacity: opacityValue,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 w-full h-full"
    >
        {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
                <CardContent />
            </a>
        ) : (
            <CardContent />
        )}
    </Motiondiv>
  );
}
