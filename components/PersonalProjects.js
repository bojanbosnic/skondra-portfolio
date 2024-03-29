import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import artist from "../assets/img/artist-photographer.png";
import uxDesigner from "../assets/img/ux-designer.png";

const PersonalProjects = () => {
  return (
    <div className="container mx-auto" id="perosnal">
      <span
        className="text-sm tracking-[9px] md:leading-7 font-medium"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        Graphics <span className="hidden md:inline">and Personal Projects</span>
      </span>
      <h4
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        UI Shoots and Graphic Design
      </h4>
      <div
        className="w-full flex flex-wrap items-center justify-between mt-10 mb-14 md:flex-nowrap"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div class="w-full overflow-hidden rounded-2xl mr-0 bg-white border-transparent mb-5 md:mb-0 md:mr-10 md:w-1/2">
          <div className="overlay-container">
            <Image
              src={uxDesigner}
              alt="ux-designer"
              className="w-full image"
            />

            <div class="overlay">
              <Link
                href="ui-shoots"
                className="text text-black font-semibold text-xl"
              >
                View
              </Link>
            </div>
          </div>
          <div class="px-5 pb-2">
            <h5 class="text-base mt-4 leading-4 mb-2 md:text-2xl font-bold tracking-tight text-black ">
              UI Shoots
            </h5>
            <p class="mb-3 text-xs font-normal text-black md:text-base ">
              Examples so you have a better understanding of my style
            </p>
          </div>
        </div>
        <div class="w-full rounded-2xl overflow-hidden bg-white border-transparent md:w-1/2">
          <div className="overlay-container">
            <Image
              src={artist}
              alt="artist photographer"
              className="w-full  image"
            />
            <div class="overlay">
              <Link
                href="graphics-art"
                className="text text-black font-semibold text-xl"
              >
                View
              </Link>
            </div>
          </div>
          <div class="px-5 pb-2">
            <h5 class="mb-2 mt-4 text-base leading-4  md:text-2xl font-bold tracking-tight text-black ">
              Graphic Design
            </h5>
            <p class="mb-3 text-xs font-normal text-black md:text-base ">
              Showcasing some graphic desgin as well as my personal projects
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalProjects;
