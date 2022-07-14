import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";



const Work = () => {
  return (
    <section id="work" className="relative">
      <h2>Recent Work</h2>

	  <motion.div
    initial={{y: 100, opacity: 0 }}
    whileInView={{y:0, opacity: 1 }}
    viewport={{once: true, amount: 0.8, }}

    className="flex-col text-center  md:flex-row md:text-start bg-[#ABC9FF] w-full flex justify-center items-center my-5 md:p-5 rounded-lg drop-shadow-lg max-w-[1200px] relative z-10">
        <div className="p-3 md:w-2/5 flex justify-center items-center">
          {" "}
          <Image src="/img/web-design.png" alt="" width={250} height={250} />{" "}
        </div>
        <div className="p-3 md:w-3/5">
          <h3>Personal Portfolio</h3>
          <p className="w-[100%]">
            Intervid is a mobile and web video interview platform. Save time on
            your hiring process, interview everyone at the same time. Users can
            create a interview with a title and and list of questions that will
            be answered by short video responses.
          </p>
          <div className="flex justify-center md:justify-start items-center">
            <div className="flex justify-start items-center text-start mr-3">
              <Image src="/img/html.png" alt="html icon" width={25} height={25}/> <p className="font-bold mx-2"> HTML</p>
            </div>
			      <div className="flex justify-start items-center text-start mr-3">
              <Image src="/img/css.png" alt="" width={25} height={25}/> <p className="font-bold mx-2"> CSS</p>
            </div>
			      <div className="flex justify-start items-center text-start mr-3">
              <Image src="/img/js.png" alt="" width={25} height={25}/> <p className="font-bold mx-2"> JAVASCRIPT</p>
            </div>
          </div>
          <motion.button
          whileHover={{
            scale:1.1
          }}
          whileTap={{
            scale:0.9
          }}
          >VIEW WEBSITE</motion.button>
        </div>
	
      </motion.div>

      <motion.div
    initial={{y: 100, opacity: 0 }}
    whileInView={{y:0, opacity: 1 }}
    viewport={{once: true, amount: 0.8, }}

    className="flex-col text-center  md:flex-row md:text-start bg-[#ABC9FF] w-full flex justify-center items-center my-5 md:p-5 rounded-lg drop-shadow-lg max-w-[1200px] relative z-10">
        <div className="p-3 md:w-2/5 flex justify-center items-center">
          {" "}
          <Image src="/img/web-design.png" alt="" width={250} height={250} />{" "}
        </div>
        <div className="p-3 md:w-3/5">
          <h3>Personal Portfolio</h3>
          <p className="w-[100%]">
            Intervid is a mobile and web video interview platform. Save time on
            your hiring process, interview everyone at the same time. Users can
            create a interview with a title and and list of questions that will
            be answered by short video responses.
          </p>
          <div className="flex justify-center md:justify-start items-center">
            <div className="flex justify-start items-center text-start mr-3">
              <Image src="/img/html.png" alt="" width={25} height={25}/> <p className="font-bold mx-2"> HTML</p>
            </div>
			      <div className="flex justify-start items-center text-start mr-3">
              <Image src="/img/css.png" alt="" width={25} height={25}/> <p className="font-bold mx-2"> CSS</p>
            </div>
			      <div className="flex justify-start items-center text-start mr-3">
              <Image src="/img/js.png" alt="" width={25} height={25}/> <p className="font-bold mx-2"> JAVASCRIPT</p>
            </div>
          </div>
          <motion.button
          whileHover={{
            scale:1.1
          }}
          whileTap={{
            scale:0.9
          }}
          >VIEW WEBSITE</motion.button>
        </div>
	
      </motion.div>

      <motion.div
    initial={{y: 100, opacity: 0 }}
    whileInView={{y:0, opacity: 1 }}
    viewport={{once: true, amount: 0.8, }}

    className="flex-col text-center  md:flex-row md:text-start bg-[#ABC9FF] w-full flex justify-center items-center my-5 md:p-5 rounded-lg drop-shadow-lg max-w-[1200px] relative z-10">
        <div className="p-3 md:w-2/5 flex justify-center items-center">
          {" "}
          <Image src="/img/web-design.png" alt="" width={250} height={250} />{" "}
        </div>
        <div className="p-3 md:w-3/5">
          <h3>Personal Portfolio</h3>
          <p className="w-[100%]">
            Intervid is a mobile and web video interview platform. Save time on
            your hiring process, interview everyone at the same time. Users can
            create a interview with a title and and list of questions that will
            be answered by short video responses.
          </p>
          <div className="flex justify-center md:justify-start items-center">
            <div className="flex justify-start items-center text-start mr-3">
              <Image src="/img/html.png" alt="" width={25} height={25}/> <p className="font-bold mx-2"> HTML</p>
            </div>
			      <div className="flex justify-start items-center text-start mr-3">
              <Image src="/img/css.png" alt="" width={25} height={25}/> <p className="font-bold mx-2"> CSS</p>
            </div>
			      <div className="flex justify-start items-center text-start mr-3">
              <Image src="/img/js.png" alt="" width={25} height={25}/> <p className="font-bold mx-2"> JAVASCRIPT</p>
            </div>
          </div>
          <motion.button
          whileHover={{
            scale:1.1
          }}
          whileTap={{
            scale:0.9
          }}
          >VIEW WEBSITE</motion.button>
        </div>
	
      </motion.div>

      

      

    </section>
  );
};

export default Work;
