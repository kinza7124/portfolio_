"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Show 3 cards on desktop, 1 on mobile
  const cardsToShow = typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3;
  const maxIndex = Math.max(0, PROJECTS.length - cardsToShow);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      
      <div className="w-full px-4 md:px-20 flex items-center justify-center gap-4 md:gap-8">
        {/* Left Navigation Button */}
        <button
          onClick={handlePrevious}
          className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 hover:border-purple-500/60 hover:from-purple-500/30 hover:to-cyan-500/30 transition-all duration-300 backdrop-blur-md hover:scale-110 active:scale-95"
          aria-label="Previous projects"
        >
          <svg
            className="w-5 h-5 text-purple-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Carousel Container */}
        <div className="w-full overflow-hidden rounded-lg">
          <div className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
            }}
          >
            {PROJECTS.map((project) => (
              <div
                key={project.title}
                className="w-full md:w-1/3 flex-shrink-0 px-2 md:px-4"
              >
                <ProjectCard
                  src={project.image}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Navigation Button */}
        <button
          onClick={handleNext}
          className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 hover:border-purple-500/60 hover:from-purple-500/30 hover:to-cyan-500/30 transition-all duration-300 backdrop-blur-md hover:scale-110 active:scale-95"
          aria-label="Next projects"
        >
          <svg
            className="w-5 h-5 text-purple-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Carousel Indicators */}
      <div className="flex gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "w-8 bg-gradient-to-r from-purple-500 to-cyan-500"
                : "w-2 bg-purple-500/30 hover:bg-purple-500/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
