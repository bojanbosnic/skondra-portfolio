import React from "react";
import Image from "next/image";
import loginScreen from "../assets/img/ui-shoots/Login Screen.jpg";
import italySite from "../assets/img/ui-shoots/Group 21720.jpg";
import employerDashboard from "../assets/img/ui-shoots/02.00 Employer Dashboard.jpg";
import openRace from "../assets/img/ui-shoots/04.00-Open Event-Race-Timing Location.jpg";
import events from "../assets/img/ui-shoots/Events.jpg";
const UiShoots = () => {
  return (
    <div className="container mx-auto">
      <h6 className="text-silver mb-2.5"> UI Shoots</h6>
      <h5 className="my-2.5 font-normal">
        Examples so you have a better understanding of my style
      </h5>
      <div className="my-10">
        <Image src={events} className="image" />
      </div>
      <div
        className="my-10"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <Image src={loginScreen} className="image" />
      </div>
      <div
        className="my-10"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <Image src={employerDashboard} className="image" />
      </div>
      <div
        className="my-10"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <Image src={openRace} className="image" />
      </div>
      <div
        className="my-10"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <Image src={italySite} className="image" />
      </div>
    </div>
  );
};

export default UiShoots;
