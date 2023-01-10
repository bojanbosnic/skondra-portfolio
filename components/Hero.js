import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import personalImg from "../assets/img/personal-picture.png";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Hero = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
  return (
    <div className="container mx-auto">
      <div className="big-text order-1 md:order-2 relative"></div>
      <div className="w-full flex mb-7 flex-wrap md:items-center md:flex-nowrap">
        <div className="w-full pt-0 md:pt-20 order-3 md:order-1 md:w-3/5 ">
          <h1
            className=" text-primary text-center md:text-left uppercase"
            data-aos="fade-up"
            data-aos-delay="51"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            Dejan Skondric
          </h1>
          <span
            className="block text-xl text-center font-normal leading-9  md:text-left md:text-5xl md:leading-[78px]"
            data-aos="fade-up"
            data-aos-delay="52"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            Hi there, I’m a Freelance
          </span>
          <span
            className="block text-4xl leading-9 text-center font-extrabold md:text-left md:text-7xl md:leading-[78px]"
            data-aos="fade-up"
            data-aos-delay="53"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            Product Designer
          </span>
          <h2
            className="my-3 text-center max-width  md:text-left"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            I help companies to design digital products and turn ideas into a
            functional and delightful experiences. I’m focusing on working on
            the interface and digital design - mainly building products,
            branding, and websites.
          </h2>
          <h3
            className="my-5 text-center md:text-left"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <a className="cursor-pointer " href="#projects">
              View Projects
            </a>{" "}
            <span className="font-medium mx-2.5  text-silver md:mx-7">or</span>{" "}
            <Link href="about-me">Read About Me</Link>
          </h3>
        </div>
        <div
          className="w-full flex justify-center pt-4 order-2 md:pt-0  md:order-2 md:w-2/5 "
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Image src={personalImg} alt="Dejan Skondric" />
        </div>
      </div>
      {showButton && (
        <button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          style={{
            position: "fixed",
            // padding: "1rem 2rem",
            fontSize: "20px",
            bottom: "40px",
            right: "40px",
            // backgroundColor: "orange",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <BsFillArrowUpCircleFill
            style={{ color: "orange", fontSize: "2rem" }}
          />
        </button>
      )}
    </div>
  );
};

export default Hero;
