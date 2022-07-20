import React from "react";
import Image from "next/image";

const Process = () => {
  return (
    <section id="process" className="bg-[#FFDEDE]">
      <div className="container">
        <h2>Process</h2>
        <p className="text-center mb-10">
        I follow a step-by-step process to ensure that the final product is precisely what you expect. And I don't continue with the next step until everything is clear on both sides.
        </p>
        <div className="flex items-center justify-center w-full my-5">
          <div className="w-1/2 text-end">
            <h3>Discussion</h3>
            <p>
            We discuss your idea together and decide the features of your website and the technology I will use to build it.
            </p>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <Image src="/img/discuss.png" alt="discuss" width={150} height={150} />{" "}
          </div>
        </div>

		<div className="flex items-center justify-center w-full my-5">
		<div className="w-1/2 flex items-center justify-center">
            <Image src="/img/web-design.png" alt="web design" width={150} height={150} />{" "}
          </div>
          <div className="w-1/2 text-start">
            <h3>Design</h3>
            <p>
            Before I start developing your website, I will create a unique and beautiful design. The final product will look exactly like the design. Then, after you approve it, I will move to the next step.
            </p>
          </div>
          
        </div>

		<div className="flex items-center justify-center w-full my-5">
          <div className="w-1/2 text-end">
            <h3>Develop</h3>
            <p>
            This step is the most important and the one that takes the most time. But, once I'm done, you will have a fully-responsive, fully-functional, and SEO-friendly website that will allow you to get new clients.
            </p>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <Image src="/img/coding.png" alt="coding" width={150} height={150} />{" "}
          </div>
        </div>

		<div className="flex items-center justify-center w-full my-5">
		<div className="w-1/2 flex items-center justify-center">
            <Image src="/img/update.png" alt="update" width={150} height={150} />{" "}
          </div>
          <div className="w-1/2 text-start">
            <h3>Maintain</h3>
            <p>
            Need to add a new feature to your website? Don't worry. I have your back.
            </p>
          </div>
          
        </div>

		
      </div>
    </section>
  );
};

export default Process;
