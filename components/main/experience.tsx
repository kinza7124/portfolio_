"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

const EXPERIENCE_DATA = [
  {
    title: "App Testing Program Participant",
    company: "9D Technologies",
    period: "2025",
    description: "Beta tester for 9D Technologies, conducting comprehensive user experience testing and quality assurance for applications. Evaluated app functionality, UI/UX, performance, and overall user experience without coding involvement. Provided detailed feedback through live testing sessions and screen recordings to improve product quality.",
    highlights: ["Beta testing", "User experience testing", "Quality assurance", "Live/screen recording feedback"]
  },
  {
    title: "Teaching Assistant of Data Structures",
    company: "FAST NUCES",
    period: "Aug 2025 - Dec 2025",
    description: "Mentored 40+ students on Data Structures & Algorithms, conducting code reviews and evaluating 20+ complex semester projects involving Trees, Graphs, and Heap implementations.",
    highlights: ["Mentored 40+ students", "Code reviews", "Semester project evaluation"]
  },
  {
    title: "Open Source Contributor",
    company: "GirlScript Summer of Code (GSSoC)",
    period: "2025",
    description: "Contributed to ML/AI open-source projects by implementing features, fixing bugs, and optimizing Python code for high-impact repositories.",
    highlights: ["ML/AI Projects", "Feature implementation", "Code optimization"]
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center py-20"
    >
      <motion.h1
        variants={slideInFromLeft(0.5)}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20"
      >
        Professional Experience
      </motion.h1>

      <div className="w-full px-10 max-w-5xl">
        <div className="space-y-6">
          {EXPERIENCE_DATA.map((item, index) => (
            <motion.div
              key={item.title}
              variants={slideInFromRight(0.5 + index * 0.1)}
              initial="hidden"
              animate="visible"
              className="border border-[#7042f88b] rounded-lg p-6 bg-gradient-to-r from-[rgba(70,30,120,0.2)] to-[rgba(0,180,220,0.2)] hover:from-[rgba(70,30,120,0.4)] hover:to-[rgba(0,180,220,0.4)] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">{item.company}</p>
                </div>
                <span className="text-sm text-gray-500 mt-2 md:mt-0">
                  {item.period}
                </span>
              </div>
              <p className="text-gray-300 text-sm mb-3">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.highlights.map((highlight) => (
                  <span key={highlight} className="text-xs text-purple-300 bg-[rgba(112,66,248,0.2)] px-3 py-1 rounded-full">
                    {highlight}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
