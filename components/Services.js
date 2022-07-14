import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <section className="bg-[#FFDEDE]">
      <h2>Services</h2>
      <div className="flex-col md:flex-row max-w-[1200px] flex justify-center items-center my-5">
        <div className="my-5 bg-white md:w-1/3 flex items-center  flex-col p-4 text-center rounded-lg drop-shadow-lg h-[30rem] relative">
          <h3>Design</h3>
          <div className="my-3">
            <Image src="/img/ux.png" width={100} height={100} />
          </div>
          <p>
            What your visitors see plays a key role in converting them from just
            visitors to paying customers. Don’t let design get in the way.
          </p>
          <div className="absolute -top-5 left-1">
            <Image src="/img/clip-edit.png" width={100} height={100} />
          </div>
        </div>
        <div className="flex-col my-5 bg-white md:w-1/3 flex items-center p-4 text-center rounded-lg drop-shadow-lg md:mx-5 h-[30rem] relative">
          <h3>Development</h3>
          <div className="my-3">
            <Image src="/img/ux.png" width={100} height={100} />
          </div>
          <p>
            What your visitors see plays a key role in converting them from just
            visitors to paying customers. Don’t let design get in the way.
          </p>
          <div className="absolute -top-5 left-10">
            <Image src="/img/clip-edit.png" width={100} height={100} />
          </div>
        </div>
        <div className="flex-col my-5 bg-white md:w-1/3 flex items-center flex-col p-4 text-center rounded-lg drop-shadow-lg h-[30rem] relative">
          <h3>SEO</h3>
          <div className="my-3">
            <Image src="/img/ux.png" width={100} height={100} />
          </div>
          <p>
            What your visitors see plays a key role in converting them from just
            visitors to paying customers. Don’t let design get in the way.
          </p>
          <div className="absolute -top-5 right-1">
            <Image src="/img/clip-edit.png" width={100} height={100} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
