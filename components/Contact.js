import React, { useContext } from "react";
import Image from "next/image";
import email from "../assets/img/email-icon.svg";
import Link from "next/link";
import { MenuContext } from "../context/menuContext";

const Contact = () => {
  const { setMenu } = useContext(MenuContext);
  return (
    <div className="footer-contact">
      <div className="container mx-auto">
        <div className="pt-16 pb-6 md:pt-28 md:pb-20 flex justify-center flex-col items-center text-black">
          <div className="mb-5 max-w-[259px] md:max-w-[606px] text-center md:mb-14">
            <span className="block text-base leading-5 font-semibold md:leading-normal md:text-5xl">
              Interested Working With me? Let&apos;s connect!
            </span>
          </div>
          <div>
            <button
              onClick={() => setMenu(true)}
              className="flex items-center px-3.5 py-2 upppercase rounded-lg  bg-black text-white md:px-8 md:py-6"
            >
              <Image src={email} alt="email icon" />
              <span className="ml-2.5 text-xs md:text-base uppercase">
                Contact Me
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
