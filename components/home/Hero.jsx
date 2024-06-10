"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

import "../../styles/hero.css";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row sectionn items-center justify-center px- md:px-8 mt-40 w-full z-[20]"
      dir="rtl" // Added to support right-to-left text direction
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-end">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] ml-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            أهلاً بكم في موقع قراءة القرآن
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-right text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            استمتع
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              بتجربة قراءة{" "}
            </span>
            القرآن الكريم
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-right text-gray-400 my-5 max-w-[600px]"
        >
          نحن هنا لنقدم لكم تجربة فريدة وسلسة لقراءة القرآن الكريم وتدبر معانيه. 
          تصفحوا موقعنا لتجدوا المزيد من الموارد والأدوات المفيدة.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          href="#learn-more"
        >
          اعرف المزيد
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full img flex justify-center items-center"
      >
        <Image
          src="/herrrro.jpg"
          alt="قراءة القرآن"
          className="rounded-full opacity-30"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
