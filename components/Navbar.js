import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
	<nav className='hidden w-[700px] bg-black md:flex justify-between items-center rounded-[5rem] fixed left-0 right-0 m-auto bottom-10 z-50 py-3 px-5'>
		<ul className='text-white flex items-center justify-center   text-xl font-bold w-full'>

			<li className='mr-10 cursor-pointer'><Link href='/'><Image src='/img/white-logo.png' width={50} height={50}/></Link></li>
			<li className='mx-5'><Link href='/'>Process</Link></li>
			<li className='mx-5'><Link href='/'>Recent Work</Link></li>
			<li className='mx-5'><Link href='/'>Services</Link></li>
			<li className='mx-5'><Link href='/'>Contact</Link></li>
		</ul>
	</nav>
  )
}

export default Navbar