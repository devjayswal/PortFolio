import React from "react";

export default function SectionHeading({ children }) {
  return (
    <h2 className="mb-8 text-center text-3xl font-semibold capitalize tracking-tight sm:text-4xl">
      <span className="font-mono text-base text-emerald-600 dark:text-emerald-400">&lt;</span>{" "}
      {children}{" "}
      <span className="font-mono text-base text-emerald-600 dark:text-emerald-400">/&gt;</span>
    </h2>
  );
}
