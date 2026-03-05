"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="z-[20] mt-28 flex w-full flex-col items-center justify-center gap-10 px-4 sm:mt-32 sm:px-8 md:mt-40 lg:flex-row lg:px-20"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
           AI/ML Enthusiast
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="mt-6 flex h-auto w-auto max-w-[600px] flex-col gap-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl"
        >
          <span>
            Kinza{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Afzal
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="my-5 max-w-[600px] break-words text-sm text-gray-400 sm:text-base md:text-lg"
        >
          Karachi • +92 3242217127 • kinzaafzal07122004@gmail.com
        </motion.p>

        <motion.p
          variants={slideInFromLeft(0.9)}
          className="text-base text-gray-300 my-3 max-w-[600px] leading-relaxed"
        >
          AI/ML enthusiast with hands-on experience in Machine Learning, Deep Learning, and AI systems. Passionate about contributing to innovative projects through data-driven modeling and problem-solving.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="button-primary max-w-[200px] rounded-lg py-2 text-center text-white"
        >
          Learn more
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="flex h-full w-full items-center justify-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="h-auto w-full max-w-[260px] select-none sm:max-w-[360px] md:max-w-[460px] lg:max-w-[620px]"
        />
      </motion.div>
    </motion.div>
  );
};
