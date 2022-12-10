import React from "react";
import Image from "next/image";
import Link from "next/link";
import personalImg from "../assets/img/personal-picture.png";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="container mx-auto">
      <div className="w-full flex mb-7 flex-wrap md:items-center md:flex-nowrap">
        <div className="w-full order-2 md:order-1 md:w-3/5">
          <h1 className="probica text-primary text-center md:text-left text-uppercase">
            Dejan Skondric
          </h1>
          <span className="block text-xl text-center font-normal leading-9  md:text-left md:text-5xl md:leading-[78px]">
            Hi there, I’m a Freelance
          </span>
          <span className="block text-4xl leading-9 text-center font-extrabold md:text-left md:text-7xl md:leading-[78px]">
            Product Designer
          </span>
          <h2 className="my-3 text-center max-width  md:text-left">
            I help companies to design digital products and turn ideas into a
            functioanl and delightfull experience. I’m focusing on working on
            interface and digital design - mainly building products, branding
            and websites.
          </h2>
          <h3 className="my-5 text-center md:text-left">
            <Link href="#projects">View Projects</Link>{" "}
            <span className="font-medium mx-2.5  text-silver md:mx-7">or</span>{" "}
            <Link href="about-me">Read About Me</Link>
          </h3>
        </div>
        <div className="w-full flex justify-center order-1  md:order-2 md:w-2/5">
          <Image src={personalImg} alt="Dejan Skondric" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
