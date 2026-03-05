"use client";

import { motion } from "framer-motion";
import { AWARDS_DATA } from "@/constants";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const Awards = () => {
  return (
    <section
      id="awards"
      className="flex flex-col items-center justify-center py-16 sm:py-20"
    >
      <motion.h1
        variants={slideInFromLeft(0.5)}
        className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text px-4 py-10 text-center text-3xl font-semibold text-transparent sm:py-14 sm:text-4xl"
      >
        Honors & Awards
      </motion.h1>

      <div className="w-full max-w-5xl px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {AWARDS_DATA.map((award, index) => (
            <motion.div
              key={award.title}
              variants={slideInFromRight(0.5 + index * 0.1)}
              initial="hidden"
              animate="visible"
              className="rounded-lg border border-[#7042f88b] bg-gradient-to-br from-[rgba(70,30,120,0.2)] to-[rgba(0,180,220,0.1)] p-4 transition-all duration-300 hover:shadow-[0_0_20px_rgba(180,155,255,0.3)] sm:p-6"
            >
              <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    {award.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">{award.issuer}</p>
                </div>
                <span className="w-fit whitespace-nowrap rounded-full bg-[rgba(112,66,248,0.2)] px-3 py-1 text-xs text-purple-400">
                  {award.date}
                </span>
              </div>
              <p className="text-gray-300 text-sm">{award.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
