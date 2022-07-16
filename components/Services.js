import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section id="services" className="bg-[#FFDEDE]">
      <h2>Services</h2>
      <p>From design to development to SEO, I've got you covered. So describe your idea, and I will bring it to life.</p>
      <div className="flex-col md:flex-row max-w-[1200px] flex justify-center items-center my-5">
        <motion.div
         initial={{x: -50, opacity: 0 }}
         whileInView={{x:0, opacity: 1 }}
         viewport={{once: true, amount: 0.8, }}
        
        className="my-5 bg-white md:w-1/3 flex items-center  flex-col p-4 text-center rounded-lg drop-shadow-lg min-h-[40rem] relative">
          <h3>Design</h3>
          <div className="my-3">
            <Image src="/img/ux.png" alt="" width={100} height={100} />
          </div>
          <p className="text-base">
          If you are looking for a design for your website, you have come to the right place. I will create a unique and beautiful design that will look amazing on any device, from desktop to mobile.
          </p>
          <p className="text-base font-bold">Design included:</p>
          <ul className=" text-[#595959] list-disc">
            <li>mobile view</li>
            <li>tablet view</li>
            <li>desktop view</li>
          </ul>
          <div className="absolute -top-5 left-1">
            <Image src="/img/clip-edit.png" alt="" width={100} height={100} />
          </div>
        </motion.div>

        <motion.div
        initial={{y: -50, opacity: 0 }}
        whileInView={{y:0, opacity: 1 }}
        viewport={{once: true, amount: 0.8, }}
        
        className="flex-col my-5 bg-white md:w-1/3 flex items-center p-4 text-center rounded-lg drop-shadow-lg md:mx-5 min-h-[40rem] relative">
          <h3 className="z-20">Development</h3>
          <div className="my-3">
            <Image src="/img/develop.png" alt="" width={100} height={100} />
          </div>
          <p className="text-base">
          With more than a year of experience creating websites and skills in technologies such as HTML, CSS, Javascript, React.js, Next.js, Node.js, Express, MongoDB, Shopify, WordPress, and much more, I am more than capable of creating almost any website that you require.
          </p>
          <p className="text-base">
          I provide websites for Businesses, Education, Entertainment, Real estate, Medical, Law, Wedding, Fitness, E-Commerce Stores, and Non-Profit Businesses.
          </p>
      
          <div className="absolute -top-5 left-1 z-10">
            <Image src="/img/clip-edit.png" alt="" width={100} height={100} />
          </div>
        </motion.div>

        <motion.div
         initial={{x: 50, opacity: 0 }}
         whileInView={{x:0, opacity: 1 }}
         viewport={{once: true, amount: 0.8, }}
        className="flex-col my-5 bg-white md:w-1/3 flex items-center  p-4 text-center rounded-lg drop-shadow-lg min-h-[40rem] relative">
          <h3>SEO</h3>
          <div className="my-3">
            <Image src="/img/seo.png" alt="" width={100} height={100} />
          </div>
          <p className="text-base">
          What is the use of having a beautiful website if no one can find it? That's why I take SEO very seriously, and you should too. I will ensure your website meets the fundamental conditions to appear in the first positions of google.
          </p>
          <p className="text-base text-start font-bold">This service includes:</p>
          <ul className=" text-[#595959] list-disc">
            <li>writing a compelling title tag and meta description</li>
            <li>optimize your images</li>
            <li>optimize your page speed</li>
            <li>build an internal linking structure</li>
            <li>improve user experience</li>
            <li>make URLs SEO-Friendly</li>
          </ul>
          <div className="absolute -top-5 right-1">
            <Image src="/img/clip-edit.png" alt="" width={100} height={100} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
