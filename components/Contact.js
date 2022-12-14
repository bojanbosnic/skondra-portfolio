import React from "react";
import Image from "next/image";
// import slika from "../assets/img/vector-footer.svg";

const Contact = () => {
  return (
    <div className="footer-contact">
      <div className="container mx-auto">
        <div className="pt-[112px] pb-[215px] flex justify-center flex-col items-center text-black">
          <div className=" max-w-[606px] text-center mb-10">
            <span className="block font-semibold text-5xl leading-normal">
              Interested Working With me? Let's connect!
            </span>
          </div>
          <div className="">
            <button className="upppercase p-4 bg-black text-white">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
