"use client";

import { motion } from "framer-motion";
import { AWARDS_DATA } from "@/constants";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const Awards = () => {
  return (
    <section
      id="awards"
      className="flex flex-col items-center justify-center py-20"
    >
      <motion.h1
        variants={slideInFromLeft(0.5)}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20"
      >
        Honors & Awards
      </motion.h1>

      <div className="w-full px-10 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {AWARDS_DATA.map((award, index) => (
            <motion.div
              key={award.title}
              variants={slideInFromRight(0.5 + index * 0.1)}
              initial="hidden"
              animate="visible"
              className="border border-[#7042f88b] rounded-lg p-6 bg-gradient-to-br from-[rgba(70,30,120,0.2)] to-[rgba(0,180,220,0.1)] hover:shadow-[0_0_20px_rgba(180,155,255,0.3)] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    {award.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">{award.issuer}</p>
                </div>
                <span className="text-xs text-purple-400 bg-[rgba(112,66,248,0.2)] px-3 py-1 rounded-full">
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
