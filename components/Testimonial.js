import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Slider from "react-slick";
import { testimonialReviews } from "../datas";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import cloud from "../assets/img/slider/cloud.svg";

const Testimonial = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "transparent",
          color: "black",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "transparent",
          color: "black",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto">
      <div className="mb-28">
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
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Testimonials
        </h4>
        <Slider {...settings}>
          {testimonialReviews.map((item) => (
            <div
              key={item.id}
              className="card"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="flex mb-5">
                <AiFillStar color="#EEC01C" />
                <AiFillStar color="#EEC01C" />
                <AiFillStar color="#EEC01C" />
                <AiFillStar color="#EEC01C" />
                <AiFillStar color="#EEC01C" />
              </div>
              <small className="leading-6 tracking-widest">{item.title}</small>
              <div className="flex justify-between items-center w-full mt-12">
                <div className="flex items-center ">
                  <Image
                    src={item.picture}
                    width={60}
                    height={60}
                    className="rounded-full"
                    alt="user picture"
                  />
                  <div className="flex flex-col ml-4">
                    <span>{item.name}</span>
                    <span>{item.position}</span>
                  </div>
                </div>
                <div>
                  <Image src={cloud} alt="cloud" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
