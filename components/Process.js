import React from "react";
import Image from "next/image";

const Process = () => {
  return (
    <section id="process" className="bg-[#FFDEDE]">
      <div className="container">
        <h2>Process</h2>
        <p className="text-center mb-10">
          I follow a step-by-step process to ensure that the final product is
          precisely what the client expects. And I don't continue with the other
          until everything is clear on both sides. I call this process the 3Ds.
        </p>
        <div className="flex items-center justify-center w-full my-5">
          <div className="w-1/2 text-end">
            <h3>Discussion</h3>
            <p>
              We discuss your idea together and decide which features are
              required in the inital release of your app.
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
              We discuss your idea together and decide which features are
              required in the inital release of your app.
            </p>
          </div>
          
        </div>

		<div className="flex items-center justify-center w-full my-5">
          <div className="w-1/2 text-end">
            <h3>Develop</h3>
            <p>
              We discuss your idea together and decide which features are
              required in the inital release of your app.
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
              We discuss your idea together and decide which features are
              required in the inital release of your app.
            </p>
          </div>
          
        </div>

		
      </div>
    </section>
  );
};

export default Process;
