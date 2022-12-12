import React from "react";
import Image from "next/image";
import Link from "next/link";
import artist from "../assets/img/artist-photographer.png";
import uxDesigner from "../assets/img/ux-designer.png";

const PersonalProjects = () => {
  return (
    <div className="container mx-auto">
      <span
        className="text-sm tracking-[9px] leading-7 font-medium"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        Graphics and Personal Projects
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
        className="w-full flex items-center justify-between mt-10 mb-14"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div class="w-1/2 truncate rounded-2xl mr-10 bg-white border-transparent">
          <div className="overlay-container">
            <Image
              src={uxDesigner}
              alt="ux-designer"
              className="w-full image"
            />

            <div class="overlay">
              <Link
                href="ui-shoots"
                target="_blank"
                className="text text-black font-semibold text-xl"
              >
                View
              </Link>
            </div>
          </div>
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              UI Shoots
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Examples so you have a better understanding of my style
            </p>
          </div>
        </div>

        <div class="w-1/2 rounded-2xl truncate bg-white border-transparent">
          <div className="overlay-container">
            <Image
              src={artist}
              alt="artist photographer"
              className="w-full  image"
            />
            <div class="overlay">
              <Link
                href="graphics-art"
                target="_blank"
                className="text text-black font-semibold text-xl"
              >
                View
              </Link>
            </div>
          </div>
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Graphic Design
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Showcasing some graphic desgin as well as my personal projects
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalProjects;
