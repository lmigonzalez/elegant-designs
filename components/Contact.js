import React from "react";
import Image from "next/image";

const Contact = () => {

  return (
    <section>
      <h2>Let's Talk</h2>
      <p className="text-center md:text-start">From design to development to SEO, I've got you covered.</p>
      <form className="flex flex-col w-[600px] max-w-[100%] bg-[#FFDEDE] py-12 px-4 rounded-lg drop-shadow-lg mt-10 relative">
        <label className="text-[#595959]">Name:</label>
        <input
          className="p-1 rounded-lg bg-[#FFDEDE] border-solid border-[#fff] border-2 placeholder-[#595959] mb-4"
          type="text"
          placeholder="Enter full name"
        />
        <label className="text-[#595959]">Email:</label>
        <input
          className="p-1 rounded-lg bg-[#FFDEDE] border-solid border-[#fff] border-2 placeholder-[#595959] mb-4"
          type="email"
          placeholder="Enter full name"
        />
        <label className="text-[#595959]">Website Type:</label>
        <select className="p-1 rounded-lg bg-[#FFDEDE] border-solid border-[#fff] border-2 text-[#595959] mb-4">
          <option value="">Please select</option>
          <option value="">Blog</option>
          <option value="">Commerce</option>
          <option value="">Portfolio</option>
        </select>
        <label className="text-[#595959]">Idea:</label>
        <textarea
          className="p-1 rounded-lg bg-[#FFDEDE] border-solid border-[#fff] border-2 placeholder-[#595959] mb-4"
          placeholder="Enter full name"
          cols="30"
        />
        <div className="flex justify-end">
          <button type="submit" className="bg-[#EB4747] w-full md:w-1/2 h-10">Submit</button>
        </div>

		<div className="absolute -top-9 right-1"> <Image src='/img/clip.png' width={80} height={80}/> </div>

		<div className="absolute -top-9 left-1"> <Image src='/img/clip.png' width={80} height={80}/> </div>
        
      </form>
    </section>
  );
};

export default Contact;
