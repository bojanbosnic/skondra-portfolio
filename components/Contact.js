import React from "react";
import Image from "next/image";
import email from "../assets/img/email-icon.svg";

const Contact = () => {
  return (
    <div className="footer-contact">
      <div className="container mx-auto">
        <div className="pt-16 pb-6 md:pt-28 md:pb-20 flex justify-center flex-col items-center text-black">
          <div className="mb-5 max-w-[259px] md:max-w-[606px] text-center md:mb-14">
            <span className="block text-base font-semibold leading-normal md:text-5xl">
              Interested Working With me? Let&apos;s connect!
            </span>
          </div>
          <div>
            <button className="flex items-center px-2.5 py-2 upppercase rounded-lg  bg-black text-white md:px-8 md:py-6">
              <Image src={email} alt="email icon" />
              <a className="ml-2.5" href="mailto:skondraart@gmail.com">
                Contact Me
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
