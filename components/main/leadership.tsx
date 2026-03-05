"use client";

import { motion } from "framer-motion";
import { LEADERSHIP_DATA } from "@/constants";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const Leadership = () => {
  return (
    <section
      id="leadership"
      className="flex flex-col items-center justify-center py-16 sm:py-20"
    >
      <motion.h1
        variants={slideInFromLeft(0.5)}
        className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text px-4 py-10 text-center text-3xl font-semibold text-transparent sm:py-14 sm:text-4xl"
      >
        Leadership & Volunteering
      </motion.h1>

      <div className="w-full max-w-5xl px-4 sm:px-6 md:px-10">
        <div className="space-y-6">
          {LEADERSHIP_DATA.map((item, index) => (
            <motion.div
              key={`${item.title}-${item.organization}-${index}`}
              variants={slideInFromRight(0.5 + index * 0.1)}
              initial="hidden"
              animate="visible"
              className="rounded-lg border border-[#7042f88b] bg-gradient-to-r from-[rgba(70,30,120,0.2)] to-[rgba(0,180,220,0.2)] p-4 transition-all duration-300 hover:from-[rgba(70,30,120,0.4)] hover:to-[rgba(0,180,220,0.4)] sm:p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">{item.organization}</p>
                </div>
                <span className="text-sm text-gray-500 mt-2 md:mt-0">
                  {item.duration}
                </span>
              </div>
              <p className="text-gray-300 text-sm mb-2">{item.description}</p>
              <p className="text-gray-400 text-sm italic border-l-2 border-purple-500 pl-4 mb-3">
                {item.achievement}
              </p>
              {("links" in item) && item.links.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {item.links.map((link) => (
                    <a
                      key={link.title}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-cyan-400 hover:text-cyan-300 text-sm underline transition"
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
