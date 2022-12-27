import React from "react";
import Image from "next/image";
import timeline from "../assets/img/timeline.png";
import Footer from "../components/Footer";
import timeLine1 from "../assets/img/time-line1.png";
import eventsTableView from "../assets/img/time-line2.png";
import timelineDiagram from "../assets/img/timeline-diagram.png";
import addTags from "../assets/img/Add-Tags.png";
import laptop1 from "../assets/img/laptop-screen1.png";
import laptop2 from "../assets/img/laptop-screen2.png";
const TimeLine = () => {
  return (
    <>
      <div className="container mx-auto">
        <div
          className="col-1 float-left"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h6 className="text-silver mb-2.5">Case Study</h6>
          <h5 className="text-2xl md:text-3xl my-2.5">
            TimeLine -
            <span className="font-normal"> Event attendance Application</span>{" "}
          </h5>
          <span className="mb-2.5 text-base leading-7 text-silver tracking-[9px] font-medium">
            My Role
          </span>
          <p className="mb-1.5 text-xl">Creative Direction</p>
          <p className="my-0 text-xl">Product Designer</p>
          <span className="text-base leading-7 text-silver tracking-[9px] font-medium">
            Client
          </span>
          <span className="text-xl md:text-3xl block font-normal tracking-wide">
            IT Tesla Solutions
          </span>
          <span className="text-base leading-7 text-silver tracking-[9px] font-medium">
            Year
          </span>
          <span className="block mb-7 text-xl tracking-wide">2021</span>
        </div>

        <div className="col-2 float-right">
          <Image src={timeline} alt="timeline logo" />
          <p
            className="mt-5"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            Event attendance tracking is an important source of data for
            organizations, no matter your industry. Attendance tracking data can
            be turned into actionable insights that improve your approach to
            event planning. Tracking the attendance of potentially thousands of
            attendees can seem like a daunting task. However, the right tools
            and the right techniques can make it surprisingly simple.
          </p>
        </div>

        <div
          className="w-full col-2 float-right clear-right"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h5 className="leading-snug mt-7 mb-2.5 md:mt-5 text-3xl">
            Project Goal
          </h5>
          <div className="my-2.5">
            <p className="font-semibold">Gaining a Clear Picture of Your ROI</p>
            <p>
              Calculating an event’s return on investment (ROI) is vital to
              understanding if an event has hit its goals–but can be difficult
              without the correct data or tools. These goals might not be purely
              financial in nature For example, tracking event attendance gives
              organizations insight into whether they hit their participant
              engagement goals
            </p>
          </div>
          <div
            className="my-2.5"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <p className="font-semibold">
              Understanding The Effectiveness of Your Marketing
            </p>
            <p>
              Excellent marketing is key to putting on a successful event.
              However, without a good understanding of event attendance, it can
              be difficult to judge the effectiveness of your marketing efforts.
              Tracking the number of attendees against the number of invitations
              you’ve sent out is an effective yardstick for measuring how well
              your marketing efforts worked and allows you to refine
              communication tactics and strategies.
            </p>
          </div>
          <div
            className="my-2.5"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <p className="font-semibold">
              Meeting (or Exceeding) Attendance Requirements
            </p>
            <p>
              If your event requires attendance, such as an educational event
              that counts towards continuing education credits, then you need a
              way to track attendance and export that tracking information as
              proof.
            </p>
          </div>
          <div
            className="my-2.5"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <p className="font-semibold">
              Ensuring Safety and Security Strategies are Successful
            </p>
            <p>
              Obviously, the safety and security of your event and its attendees
              is paramount. Being able to accurately track attendance is a
              foundational step towards ensuring that safety and security.
            </p>
          </div>
        </div>

        <div
          className="col-1 float-left mb-11"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h5 className="leading-snug mb-2.5 mt-7 text-3xl">Market</h5>
          <div className="my-1.5 md:my-2.5">
            <p className="font-semibold">Event Organizers </p>
            <p>Business value add to get events</p>
          </div>
          <div className="my-1.5 md:my-2.5">
            <p className="font-semibold">Event Venues</p>
            <p> Provide analysis of the event venue</p>
          </div>
          <div className="my-1.5 md:my-2.5">
            <p className="font-semibold">Trade Shows</p>
            <p> Monitor visitors who entered the trade show</p>
          </div>
          <div className="my-1.5 md:my-2.5">
            <p className="font-semibold">Market Stores</p>
            <p>
              Monitor customer timeline. Where the customer spent the most time
              (e.g. which aisle). Attach tag to shopping trolly and movement
              within the shop or its last seen locaiton
            </p>
          </div>
          <div className="my-1.5 md:my-2.5">
            <p className="font-semibold">Music Concerts</p>
            <p>Monitor crowed movement (e.g. Exit)</p>
            <p>Monitor drink/food stands</p>
          </div>
          <h5 className="leading-snug mb-2.5 mt-7 text-3xl">Design</h5>
          <p>
            We updated the screens based on the feedback from our clients and
            continued with the final UI design. We had another round of testing
            with them before we moved on to development. This helped us to gain
            confidence that we are building the right thing.
          </p>
        </div>

        <div
          className="my-2.5"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Image
            src={timelineDiagram}
            className="image"
            alt="Time line CMS Home Page"
          />
        </div>
        <div
          className="my-2.5"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Image src={addTags} className="image" alt="Add Tags" />
        </div>
        <div
          className="my-2.5"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Image
            src={eventsTableView}
            className="image"
            alt="TimeLineCMS Events Tabel View"
          />
        </div>

        <div
          className="my-2.5"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Image
            src={timeLine1}
            className="image"
            alt="TimeLineCMS Events Dashboard Contact Section EDIT"
          />
        </div>
        <div
          className="my-2.5"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Image
            src={laptop1}
            className="image"
            alt="Laptop screen display 1"
          />
        </div>
        <div
          className="my-2.5"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Image
            src={laptop2}
            className="image"
            alt="Laptop screen display 2"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TimeLine;
