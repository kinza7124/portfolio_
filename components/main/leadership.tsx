"use client";

import { motion } from "framer-motion";
import { LEADERSHIP_DATA } from "@/constants";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const Leadership = () => {
  return (
    <section
      id="leadership"
      className="flex flex-col items-center justify-center py-20"
    >
      <motion.h1
        variants={slideInFromLeft(0.5)}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20"
      >
        Leadership & Volunteering
      </motion.h1>

      <div className="w-full px-10 max-w-5xl">
        <div className="space-y-6">
          {LEADERSHIP_DATA.map((item, index) => (
            <motion.div
              key={`${item.title}-${item.organization}-${index}`}
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
              {item.links && item.links.length > 0 && (
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
