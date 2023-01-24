import React from "react";
import Link from "next/link";
import pic1 from "../assets/img/slika.png";
import pic2 from "../assets/img/slika2.png";
import pic3 from "../assets/img/slika3.png";
import Image from "next/image";

const Projects = () => {
  return (
    <div id="projects" className="container mx-auto mb-14">
      <div
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <span className="uppercase text-sm leading-7 tracking-[9px] font-medium">
          Selected Projects
        </span>
        <h4>Case Studies</h4>
      </div>
      <h5
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        TimeLine -{" "}
        <span className="font-normal">Event attendance Application</span>{" "}
      </h5>
      <div
        className="overlay-container"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <Image src={pic1} alt="time line picture laptop" className="image" />
        <div class="overlay">
          <Link
            href="time-line"
            className="text text-black font-semibold text-xl"
          >
            View
          </Link>
        </div>
      </div>
      <h5
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <span className="uppercase">ANI ACTIVITY - </span>
        <span className="font-normal">Event Social Media App</span>{" "}
      </h5>
      <div
        className="overlay-container"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <Image src={pic2} alt="mobile design" className="image" />
        <div class="overlay">
          <Link
            href="any-activity"
            className="text text-black font-semibold text-xl"
          >
            View
          </Link>
        </div>
      </div>
      <h5
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        Eko Korpa - <span className="font-normal">Farmer Products Store</span>{" "}
      </h5>
      <div
        className="overlay-container"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <Image src={pic3} alt="ekokorpa laptop picture" className="image" />
        <div class="overlay">
          <Link
            href="opg-marketing"
            className="text text-black font-semibold text-xl"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
