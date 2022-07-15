import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";

import { BsGearFill, BsFolderFill, BsFillChatTextFill, BsFillCartFill } from "react-icons/bs";

import '../styles/Navbar.module.css'





const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.asPath;
  //   console.log(currentRoute);


  return (
    <React.Fragment>
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 1, opacity: 1 }}
        transition={{ delay: 1 }}
        className="hidden w-[700px] bg-black md:flex justify-between items-center rounded-[5rem] fixed left-0 right-0 m-auto bottom-10 z-50 py-3 px-5"
      >
        <ul className="text-white flex items-center justify-center   text-xl font-bold w-full">
          <li className="mr-10 cursor-pointer">
            <Link href="/">
              <a>
                <Image
                  src="/img/white-logo.png"
                  alt=""
                  width={50}
                  height={50}
                />
              </a>
            </Link>
          </li>
          <li
            className={
              currentRoute === "/#process"
                ? "mx-5 bg-white p-1 text-black rounded-3xl"
                : "mx-5 p-1"
            }
          >
            <Link href="#process">
              <a>Process</a>
            </Link>
          </li>
          <li
            className={
              currentRoute === "/#work"
                ? "mx-5 bg-white p-1 text-black rounded-3xl"
                : "mx-5 p-1"
            }
          >
            <Link href="#work">
              <a>Recent Work</a>
            </Link>
          </li>
          <li
            className={
              currentRoute === "/#services"
                ? "mx-5 bg-white p-1 text-black rounded-3xl"
                : "mx-5 p-1"
            }
          >
            <Link href="#services">
              <a>Services</a>
            </Link>
          </li>
          <li
            className={
              currentRoute === "/#contact"
                ? "mx-5 bg-white p-1 text-black rounded-3xl"
                : "mx-5 p-1"
            }
          >
            <Link href="#contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </motion.nav>
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 1, opacity: 1 }}
        transition={{ delay: 1 }}
        className="md:hidden w-full bg-black justify-between items-center fixed left-0 right-0 m-auto bottom-0 z-50 py-3 px-5"
      >
        <ul className="text-white flex items-center justify-between   text-xl font-bold w-full">

        <motion.li
          initial={{ scale: 1.1, opacity: 0 }}
          whileTap={{ scale: 2}}
          animate={{opacity: 1 }}
          transition={{ delay: 1.5 }}
        className=" cursor-pointer">
            <Link href="#process">
              <a>
                <BsGearFill fill={currentRoute ==='/#process' ? '#EB4747' : 'white'} className="text-[1.5rem] cursor-none"/>
              </a>
            </Link>
        </motion.li>
        
        <motion.li
        initial={{ scale: 1.1, opacity: 0 }}
        whileTap={{ scale: 2}}
        animate={{opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="cursor-pointer ">
            <Link href="#work">
              <a>
                <BsFolderFill fill={currentRoute ==='/#work' ? '#EB4747' : 'white'}  className="text-[1.5rem] cursor-none"/>
              </a>
            </Link>
        </motion.li>

       
        

        <li className=" cursor-pointer">
            <Link href="/">
              <a>
                <Image
                  src="/img/white-logo.png"
                  alt=""
                  width={50}
                  height={50}
                  className='cursor-none'
                />
              </a>
            </Link>
          </li>

        <motion.li
          initial={{ scale: 1.1, opacity: 0 }}
          whileTap={{ scale: 2}}
          animate={{opacity: 1 }}
          transition={{ delay: 1.5 }}
        className="cursor-pointer">
            <Link href="#services">
              <a>
                <BsFillCartFill fill={currentRoute ==='/#services' ? '#EB4747' : 'white'} className="text-[1.5rem] cursor-none"/>
              </a>
            </Link>
        </motion.li>


          <motion.li
            initial={{ scale: 1.1, opacity: 0 }}
            whileTap={{ scale: 2}}
            animate={{opacity: 1 }}
            transition={{ delay: 1.5 }}
          className="cursor-pointer">
            <Link href="#contact">
              <a>
                <BsFillChatTextFill fill={currentRoute ==='/#contact' ? '#EB4747' : 'white'} className="text-[1.5rem] cursor-none"/>
              </a>
            </Link>
        </motion.li>
          
        </ul>
      </motion.nav>
    </React.Fragment>
  );
};

export default Navbar;
