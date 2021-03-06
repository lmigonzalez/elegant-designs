import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import axios from "axios";

const Contact = () => {
  const initialData = {
    name: "",
    email: "",
    type: "",
    idea: "",
  };

  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [userData, setUserData] = useState(initialData);
  const [btnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    checkIfContent();
  }, [handleChange]);

  const checkIfContent = () => {
    if (
      userData.name.length >= 3 &&
      userData.email.length > 5 &&
      userData.type.length
    ) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  };

  const closeSuccessMessage = () => {
    setTimeout(() => {
      setSuccessMsg(false);
    }, 5000);
  };

  const closeErrorMessage = () => {
    setTimeout(() => {
      setErrorMsg(false);
    }, 5000);
  };

  function handleChange(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // const config = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // }

    // const data = JSON.stringify(userData)

    axios
      .post("/api/mail", userData)
      .then((res) => {
        console.log(res.data);
        setSuccessMsg(true);
      })
      .catch((err) => {
        console.log(err);
        setErrorMsg(true);
      });

    closeSuccessMessage();
    closeErrorMessage();
    setUserData(initialData);
  };

  return (
    <section id="contact">
      <h2>Let's Talk</h2>
      <p className="text-center">
        My inbox is always open. So send me a message, and I'll get back to you
        asap.
      </p>
      <motion.form
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        onSubmit={handleSubmit}
        className="flex flex-col w-[600px] max-w-[100%] bg-[#FFDEDE] py-12 px-4 rounded-lg drop-shadow-lg mt-10 relative"
      >
        <label className="text-[#595959] after:content-['*'] after:text-[#EB4747]">
          Name:
        </label>
        <input
          className="p-1 rounded-lg bg-[#FFDEDE] border-solid border-[#fff] border-2 placeholder-[#595959] mb-4"
          type="text"
          placeholder="Enter full name"
          name="name"
          value={userData.name}
          onChange={handleChange}
        />
        <label className="text-[#595959] after:content-['*'] after:text-[#EB4747]">
          Email:
        </label>
        <input
          className="p-1 rounded-lg bg-[#FFDEDE] border-solid border-[#fff] border-2 placeholder-[#595959] mb-4"
          type="email"
          placeholder="Enter email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <label className="text-[#595959] after:content-['*'] after:text-[#EB4747]">
          Website Type:
        </label>
        <select
          className="p-1 rounded-lg bg-[#FFDEDE] border-solid border-[#fff] border-2 text-[#595959] mb-4"
          name="type"
          onChange={handleChange}
          value={userData.type}
          data-testid="select-option"
        >
          <option value="">Please select website type</option>
          <option value="blog">Blog</option>
          <option value="eCommerce">eCommerce</option>
          <option value="portfolio">Portfolio</option>
          <option value="business">Business</option>
          <option value="other">Other</option>
        </select>
        <label className="text-[#595959]">Idea:</label>
        <textarea
          className="p-1 rounded-lg bg-[#FFDEDE] border-solid border-[#fff] border-2 placeholder-[#595959] mb-4"
          placeholder="Tell me more..."
          cols="30"
          name="idea"
          value={userData.idea}
          onChange={handleChange}
        />
        <div className="flex justify-end">
          <motion.button
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
            type="submit"
            disabled={btnDisabled}
            className={
              btnDisabled
                ? "bg-[#e59494] w-full md:w-1/2 h-10"
                : "bg-[#EB4747] w-full md:w-1/2 h-10"
            }
          >
            Submit
          </motion.button>
        </div>
        <div className={successMsg ? "visible" : "hidden"}>
          <p className="text-green-500 text-center">
            Message sent successfully!
          </p>
        </div>
        <div className={errorMsg ? "visible" : "hidden"}>
          <p className=" text-red-500 text-center">
            Your message wasn't sent. Please try again!
          </p>
        </div>

        <div className="absolute -top-9 right-1">
          {" "}
          <Image src="/img/clip.png" alt="clip icon" width={80} height={80} />{" "}
        </div>

        <div className="absolute -top-9 left-1">
          {" "}
          <Image src="/img/clip.png" alt="clip icon" width={80} height={80} />{" "}
        </div>
      </motion.form>
    </section>
  );
};

export default Contact;
