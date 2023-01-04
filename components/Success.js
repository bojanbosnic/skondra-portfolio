import React from "react";
import Image from "next/image";
import group from "../assets/img/Group.png";
const Success = () => {
  return (
    <div className="">
      <div></div>
      <Image src={group} alt="" />
      <span className="block text-lg md:text-4xl text-center mt-4 leading-normal">
        Message Sent
      </span>
    </div>
  );
};

export default Success;
