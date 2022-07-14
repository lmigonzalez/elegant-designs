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
        <title>Elegant Designs</title>
        <meta name="description" content="A freelancer web developer and web designer" />
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
