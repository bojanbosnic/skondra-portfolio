import React from "react";
import Image from "next/image";
import group from "../assets/img/Group.png";
const Success = () => {
  return (
    <div className="">
      <Image src={group} alt="" className="" />
      <span className="block text-lg md:text-4xl text-center mt-4 leading-normal">
        Message Sent
      </span>
    </div>
  );
};

export default Success;
