import React from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import aboutMePic from "../assets/img/about-me.png";
import digivox from "../assets/img/digivox.png";
import digivoxSm from "../assets/img/digivox-sm.png";
import njuko from "../assets/img/njuko.png";
import eye from "../assets/img/eye.png";
import itt from "../assets/img/itt.png";
import onetime from "../assets/img/onetime.png";
import run4reef from "../assets/img/run4reef.png";

const About = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="text-center">
          <h6
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            A few words about me
          </h6>
          <h5
            className="mt-2.5"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            I’m a 23 year old designer and artist living in Banja Luka. I pride
            myself on my eagerness and ability to learn. Over the last few
            years, I have allowed myself to delve into a design and art centric
            lifestyle. Due to my attention to detail, I am constantly absorbing
            ideas from everyday life. I am very passionate about my work and
            driven to satisfy my clients.
          </h5>
          <p className="mt-2.5 mb-8">
            Over the past few years I have been working with big companies and
            rising startups around the world as a designer and artist, working
            solo and leading small design teams. In my spare time I enjoy
            travel, photography and tattoos.
          </p>
          <div className="mb-8 md:mb-12">
            <Image src={aboutMePic} alt="Dejan's picture" className="image" />
          </div>
          <h6> Work Experience</h6>
          <h5 className="font-medium mt-1 md:mt-2.5 mb-9">
            I’ve been lucky enough to establish relationships with amazing
            clients from all over the world, ranging from individual clients,
            through up-and-coming startups, to multinational companies. For more
            details, head over to my{" "}
            <a
              href="https://www.linkedin.com/in/dejanskondric/"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              LinkedIn profile.
            </a>
          </h5>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="block text-[9px] leading-3 md:text-2xl font-semibold md:leading-9">
              Bagzi Design Studio
            </span>
            <span className="block text-[9px] leading-3 md:text-2xl font-semibold md:leading-9">
              IT Tesla Solutions
            </span>
            <span className="block text-[9px] leading-3 md:text-2xl font-semibold md:leading-9">
              Orbix 360
            </span>
            <span className="block text-[9px] leading-3 md:text-2xl font-semibold md:leading-9">
              Digivox Digital Agency
            </span>
            <span className="block text-[9px] leading-3 md:text-2xl font-semibold md:leading-9">
              Tattoo ACO
            </span>
          </div>
          <div>
            <span className="block text-[9px] leading-3 md:text-2xl font-semibold md:leading-9">
              Owner
            </span>
            <span className="block text-[9px] leading-3 md:text-2xl font-semibold md:leading-9">
              Product Designer
            </span>
            <span className="block text-[9px] leading-3 md:text-2xl font-semibold md:leading-9">
              UI/UX Designer
            </span>
            <span className="block text-[9px] leading-3 md:text-2xl font-semibold md:leading-9">
              UI/UX & Graphic Designer
            </span>
            <span className="block text-[9px] leading-3 md:text-2xl font-semibold md:leading-9">
              Tattoo Artist
            </span>
          </div>
          <div>
            <span className="block text-[9px] leading-3 md:text-2xl text-silver font-normal md:leading-9">
              October 2022 -
            </span>
            <span className="block text-[9px] leading-3 md:text-2xl text-silver font-normal md:leading-9">
              July 2021 - July 2022
            </span>
            <span className="block text-[9px] leading-3 md:text-2xl text-silver font-normal md:leading-9">
              June 2021 - August 2021
            </span>
            <span className="block text-[9px] leading-3 md:text-2xl text-silver font-normal md:leading-9">
              February 2020 - July 2021
            </span>
            <span className="block text-[9px] leading-3 md:text-2xl text-silver font-normal md:leading-9">
              May 2018 - February 2020
            </span>
          </div>
        </div>
        <div className="text-center my-9">
          <h6 className="leading-3 md:leading-7  tracking-[9px]">Clients</h6>
          <h5 className="font-medium my-1.5 md:my-2.5">
            Some of the brands I have worked with
          </h5>
          <p>
            <small className="font-normal text-sm leading-6 tracking-normal">
              Over the past few years I’ve had the pleasure to work with
              customers from various sectors on many interesting projects.
            </small>
          </p>
        </div>
        <div className="flex items-center flex-wrap justify-around mb-14">
          <div>
            <Image src={digivox} alt="" className="clients-imgs" />
          </div>
          <div>
            <Image src={njuko} alt="" className="clients-imgs" />
          </div>
          <div>
            <Image src={eye} alt="" className="clients-imgs" />
          </div>
          <div>
            <Image src={itt} alt="" className="clients-imgs" />
          </div>
          <div>
            <Image src={onetime} alt="" className="clients-imgs" />
          </div>
          <div>
            <Image src={run4reef} alt="" className="clients-imgs" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
