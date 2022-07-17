import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";


const Work = () => {
  return (
    <section id="work" className="relative">
      <h2>Recent Work</h2>

      

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        className="flex-col text-center  md:flex-row md:text-start bg-[#ABC9FF] w-full flex justify-center items-center my-5 md:p-5 rounded-lg drop-shadow-lg max-w-[1200px] relative z-10"
      >
        <div className="p-3 md:w-2/5 flex justify-center items-center">
          {" "}
          <Image src="/img/basspool.png" alt="" width={250} height={210} />{" "}
        </div>
        <div className="p-3 md:w-3/5">
          <h3>Construction Business Website</h3>
          <p className="w-[100%]">
          Bass Pool Group is a local construction company. This website has some exciting features: an admin login where the owner can access the dashboard once it enters the valid credentials. From there, the admin can upload new images or delete existing ones. Also, every message the user enters is directly sent to the owner's email.

          </p>
          <div className="flex flex-wrap justify-center md:justify-start">
            <div className="flex justify-start items-center text-start mr-3">
              <Image src="/img/react.png" alt="" width={20} height={20} />{" "}
              <p className="font-bold mx-2 text-base">REACT.JS</p>
            </div>
            
            <div className="flex justify-start items-center text-start mr-3">
              <Image src="/img/nodejs.png" alt="" width={20} height={20} />{" "}
              <p className="font-bold mx-2 text-base">NODE.JS</p>
            </div>
            <div className="flex justify-start items-center text-start mr-3">
              <Image src="/img/express.png" alt="" width={20} height={20} />{" "}
              <p className="font-bold mx-2 text-base">EXPRESS.JS</p>
            </div>
            <div className="flex justify-start items-center text-start mr-3">
              <Image src="/img/bootstrap.png" alt="" width={20} height={20} />{" "}
              <p className="font-bold mx-2 text-base">BOOTSTRAP</p>
            </div>
          </div>
          <motion.button
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
             <Link href='https://www.basspoolgroup.miami/'>
            <a target='_blank'>VIEW WEBSITE</a>
            </Link>
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        className="flex-col text-center  md:flex-row md:text-start bg-[#ABC9FF] w-full flex justify-center items-center my-5 md:p-5 rounded-lg drop-shadow-lg max-w-[1200px] relative z-10"
      >
        <div className="p-3 md:w-2/5 flex justify-center items-center">
          {" "}
          <Image src="/img/quotes.png" alt="" width={250} height={210} />{" "}
        </div>
        <div className="p-3 md:w-3/5">
          <h3>Social Media Website</h3>
          <p className="w-[100%]">
          Quotes Collector is a social media app where users can copy and share quotes. If the user follows to sign up will gain extra benefits, will have the option to add new quotes, like them, or delete any quote that belongs to them.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start">
            <div className="flex justify-start items-center text-start mr-3">
              <Image src="/img/react.png" alt="" width={20} height={20} />{" "}
              <p className="font-bold mx-2 text-base">REACT.JS</p>
            </div>
           
            <div className="flex justify-start items-center text-start mr-3">
              <Image src="/img/nodejs.png" alt="" width={20} height={20} />{" "}
              <p className="font-bold mx-2 text-base">NODE.JS</p>
            </div>
            <div className="flex justify-start items-center text-start mr-3">
              <Image src="/img/express.png" alt="" width={20} height={20} />{" "}
              <p className="font-bold mx-2 text-base">EXPRESS.JS</p>
            </div>
            <div className="flex justify-start items-center text-start mr-3">
              <Image src="/img/mongodb.png" alt="" width={20} height={20} />{" "}
              <p className="font-bold mx-2 text-base">MONGODB</p>
            </div>
            <div className="flex justify-start items-center text-start mr-3">
              <Image src="/img/bootstrap.png" alt="" width={20} height={20} />{" "}
              <p className="font-bold mx-2 text-base">BOOTSTRAP</p>
            </div>
          </div>
          <motion.button
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
             <Link href='https://quotes-collector.vercel.app/'>
            <a target='_blank'>VIEW WEBSITE</a>
            </Link>
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        className="flex-col text-center  md:flex-row md:text-start bg-[#ABC9FF] w-full flex justify-center items-center my-5 md:p-5 rounded-lg drop-shadow-lg max-w-[1200px] relative z-10"
      >
        <div className="p-3 md:w-2/5 flex justify-center items-center">
          {" "}
          <Image
            src="/img/portfolio.png"
            alt=""
            width={250}
            height={210}
          />{" "}
        </div>
        <div className="p-3 md:w-3/5">
          <h3>Personal Portfolio Website</h3>
          <p className="w-[100%]">
          This is my portfolio. I use it to share information about myself, like personal projects and some of my skills. I build it using  HTML, CSS, and vanilla Javascript.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start">
            <div className="flex justify-start items-center text-start mr-3">
              <Image
                src="/img/html.png"
                alt="html icon"
                width={20}
                height={20}
              />{" "}
              <p className="font-bold mx-2 text-base"> HTML</p>
            </div>
            <div className="flex justify-start items-center text-start mr-3">
              <Image src="/img/css.png" alt="" width={20} height={20} />{" "}
              <p className="font-bold mx-2 text-base"> CSS</p>
            </div>
            <div className="flex justify-start items-center text-start mr-3">
              <Image src="/img/js.png" alt="" width={20} height={20} />{" "}
              <p className="font-bold mx-2 text-base"> JAVASCRIPT</p>
            </div>
          </div>
          <motion.button
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
            
          >
            <Link href='https://luisgonzalezdev.org/'>
            <a target='_blank'>VIEW WEBSITE</a>
            </Link>

            
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Work;
