import React, {useState} from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import axios from "axios";

const Contact = () => {

  const initialData = {
    name: '',
    email: '',
    type: '',
    idea: '',
  }

  const [userData, setUserData] = useState(initialData)

  
  const handleChange = (e) =>{
    setUserData({
      ...userData, [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault()

    axios.post('http://localhost:3000/api/mail', userData)
    .then(res=>{
      console.log(res.data)

    }).catch(err=>{
      console.log(err)
    })

    setUserData(initialData)
    // console.log(userData)
  }

  return (
    <section id="contact">
      <h2>Let's Talk</h2>
      <p className="text-center md:text-start">From design to development to SEO, I've got you covered.</p>
      <motion.form
      initial={{scale:0.5, opacity: 0 }}
      whileInView={{scale: 1, opacity: 1 }}
      viewport={{once: true, amount: 0.8, }}
      onSubmit={handleSubmit} className="flex flex-col w-[600px] max-w-[100%] bg-[#FFDEDE] py-12 px-4 rounded-lg drop-shadow-lg mt-10 relative">
        <label className="text-[#595959]">Name:</label>
        <input
          className="p-1 rounded-lg bg-[#FFDEDE] border-solid border-[#fff] border-2 placeholder-[#595959] mb-4"
          type="text"
          placeholder="Enter full name"
          name="name"
          value={userData.name}
          onChange={handleChange}
        />
        <label className="text-[#595959]">Email:</label>
        <input
          className="p-1 rounded-lg bg-[#FFDEDE] border-solid border-[#fff] border-2 placeholder-[#595959] mb-4"
          type="email"
          placeholder="Enter full name"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <label className="text-[#595959]">Website Type:</label>
        <select className="p-1 rounded-lg bg-[#FFDEDE] border-solid border-[#fff] border-2 text-[#595959] mb-4"  name="type"
          onChange={handleChange} value={userData.type}>
          <option value="">Please select</option>
          <option value="blog">Blog</option>
          <option value="eCommerce">eCommerce</option>
          <option value="portfolio">Portfolio</option>
        </select>
        <label className="text-[#595959]">Idea:</label>
        <textarea
          className="p-1 rounded-lg bg-[#FFDEDE] border-solid border-[#fff] border-2 placeholder-[#595959] mb-4"
          placeholder="Enter full name"
          cols="30"
          name="idea"
          value={userData.idea}
          onChange={handleChange}
        />
        <div className="flex justify-end">
          <motion.button
           whileHover={{
            scale:1.1
          }}
          whileTap={{
            scale:0.9
          }}
          type="submit" className="bg-[#EB4747] w-full md:w-1/2 h-10">Submit</motion.button>
        </div>

		<div className="absolute -top-9 right-1"> <Image src='/img/clip.png' width={80} height={80}/> </div>

		<div className="absolute -top-9 left-1"> <Image src='/img/clip.png' width={80} height={80}/> </div>
        
      </motion.form>
    </section>
  );
};

export default Contact;
