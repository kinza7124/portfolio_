"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

const EDUCATION_DATA = [
  {
    school: "FAST NUCES",
    degree: "Bachelors in Computer Science",
    duration: "Aug 2023 - Aug 2027",
    grade: "3.5+/4.00",
    honors: [
      "Rector's List of Honours - 3x Gold Medalist",
      "Dean's List of Honours - 2x"
    ],
    societies: [
      {
        name: "Developer's Day",
        role: "Assistant Director of GR - TechFest 2026",
        description: "Leading guest relations and coordinating event operations for TechFest 2026, including speaker management and collaboration across organizing teams"
      },
      {
        name: "ACM (Association for Computing Machinery)",
        role: "Co Head Design Team",
        description: "Led design initiatives, branding, and creative direction for ACM activities and events"
      },
      {
        name: "IEEE NUCES KHI",
        role: "Design Head",
        description: "Led social media visual content and logo designs for national level events"
      },
      {
        name: "PROCOM",
        role: "Participant",
        description: "Engaged in Pakistan's largest IT event and competition platform"
      }
    ]
  },
  {
    school: "Highbrow School & College",
    degree: "A Levels",
    duration: "",
    grade: "3A* 1A",
    activities: "SciTech society, Peer tutoring society, Arts society, Literary society",
    achievements: [
      {
        title: "Academic Excellence",
        description: "Presented for academic excellence in A levels."
      },
      {
        title: "Recipient of Meritorious Award",
        description: "10th Meritorious Award Ceremony conducted by Habib University."
      },
      {
        title: "Peer Tutor of Highbrow Peer Tutoring Society",
        description: "Served as a tutor for A-Level Physics during 2022-2023."
      }
    ]
  },
  {
    school: "Happy Palace Grammar School",
    degree: "O Levels",
    duration: "",
    grade: "8A*",
    activities: "",
    achievements: []
  }
];

export const Education = () => {
  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center py-16 sm:py-20"
    >
      <motion.h1
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        animate="visible"
        className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text px-4 py-10 text-center text-3xl font-semibold text-transparent sm:py-14 sm:text-4xl"
      >
        Education
      </motion.h1>

      <div className="w-full max-w-5xl px-4 sm:px-6 md:px-10">
        <div className="space-y-8">
          {EDUCATION_DATA.map((edu, index) => (
            <motion.div
              key={edu.school}
              variants={slideInFromRight(0.5 + index * 0.1)}
              initial="hidden"
              animate="visible"
              className="rounded-lg border border-[#7042f88b] bg-gradient-to-br from-[rgba(70,30,120,0.2)] to-[rgba(0,180,220,0.1)] p-4 transition-all duration-300 hover:shadow-[0_0_20px_rgba(180,155,255,0.3)] sm:p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    {edu.school}
                  </h3>
                  <p className="text-sm text-gray-300 mt-1">{edu.degree}</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  {edu.grade && (
                    <p className="text-sm text-purple-300">Grade: {edu.grade}</p>
                  )}
                  {edu.duration && (
                    <p className="text-sm text-gray-500">{edu.duration}</p>
                  )}
                              </div>

                              {edu.honors && (
                                <div className="mb-4">
                                  <p className="text-sm text-gray-400 mb-2 font-semibold">Academic Honors:</p>
                                  <div className="space-y-1 pl-3">
                                    {edu.honors.map((honor, idx) => (
                                      <p key={idx} className="text-sm text-purple-300">🏆 {honor}</p>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {edu.societies && (
                                <div className="mb-4">
                                  <p className="text-sm text-gray-400 mb-2 font-semibold">Societies & Leadership:</p>
                                  <div className="space-y-3 pl-3">
                                    {edu.societies.map((society, idx) => (
                                      <div key={idx} className="text-sm">
                                        <p className="text-cyan-300 font-medium">{society.name} - {society.role}</p>
                                        <p className="text-gray-400 text-xs mt-1">{society.description}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                </div>

                {edu.activities && (
                  <p className="text-sm text-gray-300 mb-3">
                    <span className="text-gray-400">Activities: </span>{edu.activities}
                  </p>
                )}

                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="mt-4 space-y-3 pl-3">
                    {edu.achievements?.map((achieve, idx) => (
                      <div key={idx} className="text-sm">
                        <p className="text-purple-300 font-medium">{achieve.title}</p>
                        <p className="text-gray-400 text-xs">{achieve.description}</p>
                      </div>
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
