import React from "react";
import Image from "next/image";
// import slika from "../assets/img/vector-footer.svg";

const Contact = () => {
  return (
    <div className="heading">
      <div className="container mx-auto">
        <span className="block max-w-[606px] font-semibold text-5xl leading-normal">
          Interested Working With me? Let's connect!
        </span>
        <button className="upppercase p-4 bg-black text-white">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Contact;
