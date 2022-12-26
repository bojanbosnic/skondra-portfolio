import React, { useRef } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import personalImg from "../assets/img/personal-picture.png";
import Navbar from "./Navbar";

const Hero = () => {
  const projects = useRef(null);

  const scrollToSection = (element) => {
    window.scrollTo({ top: element.current.offsetTop, behavior: "smooth" });
  };

  return (
    <div className="container mx-auto">
      <div className="w-full flex mb-7 flex-wrap md:items-center md:flex-nowrap">
        <div className="w-full order-2 md:order-1 md:w-3/5">
          <h1
            className="probica text-primary text-center md:text-left text-uppercase"
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
            functioanl and delightfull experience. I’m focusing on working on
            interface and digital design - mainly building products, branding
            and websites.
          </h2>
          <h3
            className="my-5 text-center md:text-left"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <Link
              className="cursor-pointer"
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              View Projects
            </Link>{" "}
            <span className="font-medium mx-2.5  text-silver md:mx-7">or</span>{" "}
            <a href="about-me">Read About Me</a>
          </h3>
        </div>
        <div
          className="w-full flex justify-center order-1  md:order-2 md:w-2/5"
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Image src={personalImg} alt="Dejan Skondric" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
