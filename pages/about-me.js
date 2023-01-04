import React, { useRef } from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import Slider from "react-slick";
import aboutMePic from "../assets/img/about-me.png";
import digivox from "../assets/img/digivox.png";
import njuko from "../assets/img/njuko.png";
import eye from "../assets/img/eye.png";
import itt from "../assets/img/itt.png";
import onetime from "../assets/img/onetime.png";
import { testimonialReviews } from "../datas";
import run4reef from "../assets/img/run4reef.png";
import Testemonial from "../components/Testimonial";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const About = () => {
  const imgs = [
    njuko.src,
    eye.src,
    itt.src,
    onetime.src,
    run4reef.src,
    digivox.src,
  ];
  console.log(
    "Img about me",
    imgs.map((itemi) => <Image src={itemi} />)
  );
  let slider = useRef();
  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="text-center">
          <h6 className="font-medium text-xs md:text-base uppercase">
            A few words about me
          </h6>
          <h5 className="mt-2.5">
            I’m a 23 year old designer and artist living in Banja Luka. I pride
            myself on my eagerness and ability to learn. Over the last few
            years, I have allowed myself to delve into a design and art centric
            lifestyle. Due to my attention to detail, I am constantly absorbing
            ideas from everyday life. I am very passionate about my work and
            driven to satisfy my clients.
          </h5>
          <p className="mt-2.5 mb-8 text-sm md:text-xl">
            Over the past few years I have been working with big companies and
            rising startups around the world as a designer and artist, working
            solo and leading small design teams. In my spare time I enjoy
            travel, photography and tattoos.
          </p>
          <div className="mb-8 md:mb-12">
            <Image src={aboutMePic} alt="Dejan's picture" className="image" />
          </div>
          <h6
            className="font-medium text-xs md:text-base"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            {" "}
            Work Experience
          </h6>
          <h5
            className="font-medium text-sm mt-1 md:mt-2.5 mb-9 md:text-3xl"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
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
        <div
          className="flex items-center justify-between"
          data-aos="fade-up"
          data-aos-delay="55"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
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
        <div
          className="flex flex-col items-center text-center my-9"
          data-aos="fade-up"
          data-aos-delay="60"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h6 className="font-medium text-xs leading-3 md:leading-7 md:text-base  tracking-[9px]">
            Clients
          </h6>

          <h5 className="font-medium my-1.5 md:my-2.5">
            Some of the brands I have worked with
          </h5>
          <p className="font-normal max-w-full  text-sm leading-6 tracking-normal md:max-w-[721px]  md:text-xl">
            Over the past few years I’ve had the pleasure to work with customers
            from various sectors on many interesting projects.
          </p>
        </div>
        <div className="hidden md:flex items-center flex-wrap justify-center mb-14">
          <div className="flex">
            <div className="mr-6">
              <Image src={digivox} alt="" className="clients-imgs" />
            </div>
            <div className="mr-6">
              <Image src={njuko} alt="" className="clients-imgs" />
            </div>
            <div className="mr-6">
              <Image src={eye} alt="" className="clients-imgs" />
            </div>
          </div>

          <div className="flex ml-1 mt-0 md:mt-8 lg:mt-8 xl:mt-0">
            <div className="mr-6">
              <Image src={itt} alt="" className="clients-imgs" />
            </div>
            <div className="mr-6">
              <Image src={onetime} alt="" className="clients-imgs" />
            </div>
            <div className="mr-6">
              <Image src={run4reef} alt="" className="clients-imgs" />
            </div>
          </div>
        </div>
        <div className="block md:hidden mb-28 ">
          <Slider ref={(c) => (slider.current = c)} {...settings}>
            {imgs.map((item) => (
              <>
                <div className="px-5 pt-6 md:px-10 md:pt-11 flex flex-col"></div>
                <div className="flex justify-center items-center w-full absolute inset-y-1/3">
                  <div>
                    <Image
                      src={item}
                      width={50}
                      height={50}
                      className="image"
                      alt="user picture"
                    />
                  </div>
                </div>
              </>
            ))}
          </Slider>
          <div className="absolute right-8 mt-4">
            <button className="mr-2.5" onClick={previous}>
              {" "}
              <BsArrowLeft fontSize="1.5rem" />{" "}
            </button>
            <button onClick={next}>
              {" "}
              <BsArrowRight fontSize="1.5rem" />{" "}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
