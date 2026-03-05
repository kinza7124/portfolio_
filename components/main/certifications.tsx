"use client";

import { motion } from "framer-motion";
import { CERTIFICATIONS_DATA } from "@/constants";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const Certifications = () => {
  return (
    <section
      id="certifications"
      className="flex flex-col items-center justify-center py-16 sm:py-20"
    >
      <motion.h1
        variants={slideInFromLeft(0.5)}
        className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text px-4 py-10 text-center text-3xl font-semibold text-transparent sm:py-14 sm:text-4xl"
      >
        Licenses & Certifications
      </motion.h1>

      <motion.div
        variants={slideInFromLeft(0.6)}
        initial="hidden"
        animate="visible"
        className="mb-8"
      >
        <a
          href="https://www.linkedin.com/in/kinza-afzal7-/details/certifications"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 flex items-center gap-2"
        >
          <span>View all certifications on LinkedIn</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </motion.div>

      <div className="w-full max-w-5xl px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS_DATA.map((cert, index) => (
            <motion.div
              key={cert.title}
              variants={slideInFromRight(0.5 + index * 0.1)}
              initial="hidden"
              animate="visible"
              className="rounded-lg border border-[#7042f88b] bg-gradient-to-br from-[rgba(70,30,120,0.2)] to-[rgba(0,180,220,0.1)] p-4 transition-all duration-300 hover:shadow-[0_0_20px_rgba(180,155,255,0.3)] sm:p-6"
            >
              <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">{cert.issuer}</p>
                </div>
                <span className="w-fit whitespace-nowrap rounded-full bg-[rgba(112,66,248,0.2)] px-3 py-1 text-xs text-purple-400 sm:ml-2">
                  {cert.date}
                </span>
              </div>
              <p className="text-gray-300 text-sm mb-3">{cert.description}</p>
              
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-cyan-400 hover:text-cyan-300 underline"
                >
                  Show credential
                </a>
              )}
              
              {cert.certificateFile && (
                <div className="mt-2 text-xs text-gray-400">
                  📄 {cert.certificateFile}
                </div>
              )}
              
              {cert.skills && (
                <div className="mt-2">
                  <span className="text-xs bg-[rgba(112,66,248,0.15)] text-purple-300 px-2 py-1 rounded">
                    {cert.skills}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
