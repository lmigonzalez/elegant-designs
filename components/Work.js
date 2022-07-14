import React from "react";
import Image from "next/image";

const Work = () => {
  return (
    <section className="relative">
      <h2>Recent Work</h2>

	  <div className="flex-col text-center  md:flex-row md:text-start bg-[#ABC9FF] w-full flex justify-center items-center my-5 md:p-5 rounded-lg drop-shadow-lg max-w-[1200px] relative z-10">
        <div className="p-3 md:w-2/5 flex justify-center items-center">
          {" "}
          <Image src="/img/web-design.png" width={250} height={250} />{" "}
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
              <Image src="/img/html.png" width={25} height={25}/> <p className="font-bold mx-2"> HTML</p>
            </div>
			      <div className="flex justify-start items-center text-start mr-3">
              <Image src="/img/css.png" width={25} height={25}/> <p className="font-bold mx-2"> CSS</p>
            </div>
			      <div className="flex justify-start items-center text-start mr-3">
              <Image src="/img/js.png" width={25} height={25}/> <p className="font-bold mx-2"> JAVASCRIPT</p>
            </div>
          </div>
          <button>VIEW WEBSITE</button>
        </div>
	
      </div>

      <div className="flex-col text-center  md:flex-row md:text-start bg-[#ABC9FF] w-full flex justify-center items-center my-5 md:p-5 rounded-lg drop-shadow-lg max-w-[1200px] relative z-10">
        <div className="p-3 md:w-2/5 flex justify-center items-center">
          {" "}
          <Image src="/img/web-design.png" width={250} height={250} />{" "}
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
              <Image src="/img/html.png" width={25} height={25}/> <p className="font-bold mx-2"> HTML</p>
            </div>
			      <div className="flex justify-start items-center text-start mr-3">
              <Image src="/img/css.png" width={25} height={25}/> <p className="font-bold mx-2"> CSS</p>
            </div>
			      <div className="flex justify-start items-center text-start mr-3">
              <Image src="/img/js.png" width={25} height={25}/> <p className="font-bold mx-2"> JAVASCRIPT</p>
            </div>
          </div>
          <button>VIEW WEBSITE</button>
        </div>
	
      </div>


      <div className="flex-col text-center  md:flex-row md:text-start bg-[#ABC9FF] w-full flex justify-center items-center my-5 md:p-5 rounded-lg drop-shadow-lg max-w-[1200px] relative z-10">
        <div className="p-3 md:w-2/5 flex justify-center items-center">
          {" "}
          <Image src="/img/web-design.png" width={250} height={250} />{" "}
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
              <Image src="/img/html.png" width={25} height={25}/> <p className="font-bold mx-2"> HTML</p>
            </div>
			      <div className="flex justify-start items-center text-start mr-3">
              <Image src="/img/css.png" width={25} height={25}/> <p className="font-bold mx-2"> CSS</p>
            </div>
			      <div className="flex justify-start items-center text-start mr-3">
              <Image src="/img/js.png" width={25} height={25}/> <p className="font-bold mx-2"> JAVASCRIPT</p>
            </div>
          </div>
          <button>VIEW WEBSITE</button>
        </div>
	
      </div>
    </section>
  );
};

export default Work;
