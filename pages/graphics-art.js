import React from "react";
import Image from "next/image";
import logo from "../assets/img/Logo-Mockup.jpg";
import poster1 from "../assets/img/posters-1.jpg";
import poster2 from "../assets/img/posters-2.jpg";
import Footer from "../components/Footer";

const GraphicsArt = () => {
  return (
    <>
      <div className="container mx-auto">
        <h6
          className="text-silver mb-2.5"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Posters and Graphic Art
        </h6>
        <h5
          className="mt-0"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Showcasing some of my personal projects
        </h5>
        <div className="flex items-center flex-wrap mb-10 md:flex-nowrap">
          <div
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <Image src={poster2} alt="Bagzi Studio on building" />
          </div>
          <div className="ml-0 mb-5 md:ml-5 md:mb-0">
            <div
              className="mb-5 mt-5 md:mt-0"
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <Image src={logo} alt="Bagzi Studio Logo mockup" />
            </div>
            <div
              className="self-end"
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <Image src={poster1} alt="Bagzi Studio commercial" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GraphicsArt;
