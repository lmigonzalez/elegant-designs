import Head from 'next/head'

import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Process from '../components/Process'
import Work from '../components/Work'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className= 'w-full bg-red-50'>
      <Head>
        <title>Elegant Designs | Web Developer Freelance
        </title>
        <meta name="description" content="As a freelance web developer and designer, I will deliver a unique, beautiful, responsive, fast, and SEO-friendly website. Let me focus on growing your business while you focus on running it." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='w-full flex justify-center flex-col items-center relative'>
        <Navbar/>
        <Hero/>
        <Process/>
        <Work/>
        <Services/>
        <Contact/>
        <Footer/>
      </main>

      
    </div>
  )
}
