import React from "react";
import Image from "next/image";
import loginScreen from "../assets/img/ui-shoots/Login Screen.jpg";
import italySite from "../assets/img/ui-shoots/Group 21720.jpg";
import employerDashboard from "../assets/img/ui-shoots/02.00 Employer Dashboard.jpg";
import openRace from "../assets/img/ui-shoots/04.00-Open Event-Race-Timing Location.jpg";
import events from "../assets/img/ui-shoots/Events.jpg";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
const UiShoots = () => {
  return (
    <>
      <div className="container mx-auto">
        <h6
          className="text-silver mb-2.5"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          {" "}
          UI Shoots
        </h6>
        <h5
          className="my-2.5 font-normal"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Examples so you have a better understanding of my style
        </h5>
        <div
          className="my-10"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Image src={events} className="image" alt="events image" />
        </div>
        <div
          className="my-10"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Image src={loginScreen} className="image" alt="login screeen" />
        </div>
        <div
          className="my-10"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Image
            src={employerDashboard}
            className="image"
            alt="employerDashboard"
          />
        </div>
        <div
          className="my-10"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Image src={openRace} className="image" alt="open race" />
        </div>
        <div
          className="my-10"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Image src={italySite} className="image" alt="Italy site" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UiShoots;
