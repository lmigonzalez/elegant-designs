import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
const router = useRouter()

  const handleClick = () =>{
    router.push('/#contact')
  }
  return (
    <section id="hero" className="bg-[#ABC9FF] pt-10 relative">

      <motion.div
        initial={{ y: -50 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        className="mb-10"
      >
        <Image src="/img/ed-logo.png" alt="logo" width={150} height={150} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        className="flex flex-col justify-center items-center text-center"
      >
        <h1>
        I'm a freelance Full-Stack Web Developer with <br></br> a taste for perfection
        </h1>
        <p>
        I will design and build the website your business needs to grow <br></br>{" "}
          exponentially
        </p>
        <motion.button
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="w-[15rem]"
          onClick={handleClick}
        >
          Let's Talk
        </motion.button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        className="hidden md:inline-flex absolute bottom-0 right-0"
      >
        {" "}
        <Image src="/img/mouse.png" alt="mouse" width={150} height={150} />{" "}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        className="hidden md:inline-flex absolute top-0 left-0"
      >
        {" "}
        <Image
          src="/img/keyboard.png"
          alt="keyboard"
          width={150}
          height={150}
        />{" "}
      </motion.div>
    </section>
  );
};

export default Hero;
