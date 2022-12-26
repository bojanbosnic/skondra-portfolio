import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Slider from "react-slick";
import { testimonialReviews } from "../datas";
import { AiFillStar } from "react-icons/ai";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import cloud from "../assets/img/slider/cloud.svg";

const Testimonial = () => {
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
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //     initialSlide: 1,
      //   },
      // },
    ],
  };

  return (
    <div id="testemonials" className="container mx-auto">
      <div className="mb-28 relative">
        <span
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Reviews
        </span>
        <h4
          className="mb-9"
          // data-aos="fade-up"
          // data-aos-delay="50"
          // data-aos-duration="1000"
          // data-aos-easing="ease-in-out"
        >
          Testemonials
        </h4>
        <Slider ref={(c) => (slider.current = c)} {...settings}>
          {testimonialReviews.map((item) => (
            <>
              <div className="px-10 pt-11 flex flex-col">
                <div className="flex mb-5">
                  <AiFillStar color="#EEC01C" />
                  <AiFillStar color="#EEC01C" />
                  <AiFillStar color="#EEC01C" />
                  <AiFillStar color="#EEC01C" />
                  <AiFillStar color="#EEC01C" />
                </div>
                <span className="text-xs md:tracking-widest md:text-base">
                  {item.title}
                </span>
              </div>
              <div className="flex justify-between items-center w-full absolute bottom-8">
                <div className="flex items-center pl-10">
                  <Image
                    src={item.picture}
                    width={60}
                    height={60}
                    className="rounded-full"
                    alt="user picture"
                  />
                  <div className="flex flex-col ml-4">
                    <span className="text-sm font-medium md:text-lg">
                      {item.name}
                    </span>
                    <span className="text-xs md:text-base">
                      {item.position}
                    </span>
                  </div>
                </div>
                <div className="pr-12">
                  <Image src={cloud} alt="cloud" />
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
  );
};

export default Testimonial;
