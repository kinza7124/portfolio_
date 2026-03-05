"use client";

import { useEffect, useState } from "react";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const updateCardsToShow = () => setCardsToShow(mediaQuery.matches ? 3 : 1);

    updateCardsToShow();
    mediaQuery.addEventListener("change", updateCardsToShow);

    return () => mediaQuery.removeEventListener("change", updateCardsToShow);
  }, []);

  const maxIndex = Math.max(0, PROJECTS.length - cardsToShow);
  const effectiveIndex = currentIndex > maxIndex ? 0 : currentIndex;

  const handlePrevious = () => {
    setCurrentIndex((prev) => {
      const safePrev = Math.min(prev, maxIndex);
      return safePrev === 0 ? maxIndex : safePrev - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const safePrev = Math.min(prev, maxIndex);
      return safePrev === maxIndex ? 0 : safePrev + 1;
    });
  };

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-16 sm:py-20"
    >
      <h1 className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text py-10 text-center text-3xl font-semibold text-transparent sm:py-14 sm:text-4xl">
        My Projects
      </h1>
      
      <div className="flex w-full items-center justify-center gap-2 px-3 sm:gap-4 sm:px-4 md:gap-8 md:px-20">
        {/* Left Navigation Button */}
        <button
          onClick={handlePrevious}
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-purple-500/30 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-purple-500/60 hover:from-purple-500/30 hover:to-cyan-500/30 active:scale-95 sm:h-12 sm:w-12"
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
              transform: `translateX(-${effectiveIndex * (100 / cardsToShow)}%)`,
            }}
          >
            {PROJECTS.map((project) => (
              <div
                key={project.title}
                className="w-full flex-shrink-0 px-2 md:w-1/3 md:px-4"
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
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-purple-500/30 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-purple-500/60 hover:from-purple-500/30 hover:to-cyan-500/30 active:scale-95 sm:h-12 sm:w-12"
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
              idx === effectiveIndex
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
