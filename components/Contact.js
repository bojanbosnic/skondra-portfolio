import React from "react";
import Image from "next/image";
import email from "../assets/img/email-icon.svg";

const Contact = () => {
  return (
    <div
      className="footer-contact"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <div className="container mx-auto">
        <div className="pt-0 pb-0 md:pt-28 md:pb-48 flex justify-center flex-col items-center text-black">
          <div className=" max-w-[606px] text-center mb-10">
            <span className="block text-base font-semibold leading-normal md:text-5xl">
              Interested Working With me? Let's connect!
            </span>
          </div>
          <div className="">
            <button className="flex items-center upppercase rounded-lg p-4 bg-black text-white">
              <Image src={email} alt="email icon" />
              <span className="ml-2.5">Contact Me</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
