import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { motion } from "framer-motion";

const Navbar = () => {
	const router = useRouter()
	const currentRoute = router.asPath
	


  return (
	<motion.nav
		initial={{y: 100, opacity: 0}}
		animate={{y: 1, opacity: 1}}
		transition={{delay:1}}
		className='hidden w-[700px] bg-black md:flex justify-between items-center rounded-[5rem] fixed left-0 right-0 m-auto bottom-10 z-50 py-3 px-5'>
		<ul className='text-white flex items-center justify-center   text-xl font-bold w-full'>

			<li className='mr-10 cursor-pointer'><Link href='?#hero'><Image src='/img/white-logo.png' width={50} height={50}/></Link></li>
			<li className= {currentRoute === '/?#process' ? 'mx-5 bg-white p-1 text-black rounded-3xl' : 'mx-5 p-1'} ><Link href='#process'>Process</Link></li>
			<li className={currentRoute === '/?#work' ? 'mx-5 bg-white p-1 text-black rounded-3xl' : 'mx-5 p-1'}><Link href='#work'>Recent Work</Link></li>
			<li className={currentRoute === '/?#services' ? 'mx-5 bg-white p-1 text-black rounded-3xl' : 'mx-5 p-1'}><Link href='#services'>Services</Link></li>
			<li className={currentRoute === '/?#contact' ? 'mx-5 bg-white p-1 text-black rounded-3xl' : 'mx-5 p-1'}><Link href='#contact'>Contact</Link></li>
		</ul>
	</motion.nav>
  )
}

export default Navbar