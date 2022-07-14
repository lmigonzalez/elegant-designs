import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-[#ABC9FF] relative">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 1, opacity: 1 }}
        className="mb-10"
      >
        <Image src="/img/ed-logo.png" width={150} height={150} />
      </motion.div>
      <div className="flex flex-col justify-center items-center text-center">
        <h1>
          I'm a freelance web developer with <br></br> a taste for perfection
        </h1>
        <p>
          I will build the website your need business to grow <br></br>{" "}
          exponentially
        </p>
        <button className='w-[15rem]'>Let's Talk</button>
      </div>
      <div className="hidden md:inline-flex absolute bottom-0 right-0"> <Image src='/img/mouse.png' width={150} height={150}/> </div>
      <div className="hidden md:inline-flex absolute top-0 left-0"> <Image src='/img/keyboard.png' width={150} height={150}/> </div>
    </section>
  );
};

export default Hero;
