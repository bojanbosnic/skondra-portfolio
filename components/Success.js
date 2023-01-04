import React from "react";
import Image from "next/image";
import group from "../assets/img/Group.png";
const Success = () => {
  return (
    <div className="">
      <Image src={group} alt="" />
      <span className="block text-4xl leading-normal">Message Sent</span>
    </div>
  );
};

export default Success;
