import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Slider from "react-slick";
import { testimonialReviews } from "../datas";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
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
      <Slider {...settings}>
        {testimonialReviews.map((item) => (
          <div key={item.id} className="card">
            <div className="flex">
              <AiFillStar color="#EEC01C" />
              <AiFillStar color="#EEC01C" />
              <AiFillStar color="#EEC01C" />
              <AiFillStar color="#EEC01C" />
              <AiFillStar color="#EEC01C" />
            </div>
            <div className="card-top">{item.title}</div>
            <div className="card-bottom">
              <Image
                src={item.picture}
                width={50}
                height={50}
                alt="user picture"
              />
              <span>{item.name}</span>
              <span>{item.position}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
