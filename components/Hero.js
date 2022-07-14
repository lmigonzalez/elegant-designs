import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";


const Hero = () => {

 
  return (
    <section id="hero" className="bg-[#ABC9FF] pt-10 relative">
      <div className="absolute top-3 right-3 cursor-pointer md:hidden"> <Image src='/img/menu.png' width={25} height={25}/> </div>
      <motion.div
        initial={{y:-50 }}
        whileInView= {{y:0}}
        viewport={{once: true, amount: 0.8}}
        className="mb-10"
      >
        <Image src="/img/ed-logo.png" alt="logo" width={150} height={150} />
      </motion.div>
      <motion.div
       initial={{opacity:0, y:50 }}
       whileInView= {{opacity:1, y:0}}
       viewport={{once: true, amount: 0.8}}

      className="flex flex-col justify-center items-center text-center">
        <h1>
          I'm a freelance web developer with <br></br> a taste for perfection
        </h1>
        <p>
          I will build the website your need business to grow <br></br>{" "}
          exponentially
        </p>
        <motion.button
        whileHover={{
          scale:1.1
        }}
        whileTap={{
          scale:0.9
        }}
        className='w-[15rem]'>Let's Talk</motion.button>
      </motion.div>
      <motion.div
        initial={{opacity:0, x:20 }}
        whileInView= {{opacity:1, x:0}}
        viewport={{once: true, amount: 0.8}}
       className="hidden md:inline-flex absolute bottom-0 right-0"> <Image src='/img/mouse.png' alt="mouse" width={150} height={150}/> </motion.div>
      <motion.div 
      initial={{opacity:0, x:-20 }}
      whileInView= {{opacity:1, x:0}}
      viewport={{once: true, amount: 0.8}}
      className="hidden md:inline-flex absolute top-0 left-0"> <Image src='/img/keyboard.png' alt="keyboard" width={150} height={150}/> </motion.div>
    </section>
  );
};

export default Hero;
