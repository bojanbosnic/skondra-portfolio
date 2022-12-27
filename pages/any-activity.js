import React from "react";
import Image from "next/image";
import asset1 from "../assets/img/Asset 1.png";
import Footer from "../components/Footer";

import iphoneIpad from "../assets/img/iphone&ipad.png";
import slide3 from "../assets/img/slide-3.jpg";
import twophones from "../assets/img/twophones.png";
import threephones from "../assets/img/threephones.png";

import families from "../assets/img/FAMILIES.png";
import couples from "../assets/img/Couples.png";
import corporates from "../assets/img/CORPORATES.png";
import individuals from "../assets/img/Individuals.png";
import newToCommuntities from "../assets/img/New to COMMUNITIES.png";
import retirees from "../assets/img/RETIREES.png";

const TimeLine = () => {
  return (
    <>
      <div className="container mx-auto">
        <div
          className="col-1-2 float-left"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h6 className="text-silver mb-2.5">Case Study</h6>
          <h5 className="text-2xl md:text-3xl my-2.5">
            ANI ACTIVITY -
            <span className="font-normal"> Event Social Media App</span>{" "}
          </h5>
          <h6 className="text-silver mb-2.5">My Role</h6>
          <p className="mb-1.5 text-xl">Creative Direction</p>
          <p className="mb-2.5 text-xl">Product Designer</p>
          <h6 className="text-silver">Client</h6>
          <p className="mb-2.5 text-xl">IT Tesla Solutions</p>
          <h6 className="text-silver mb-2.5">Year</h6>
          <p>2022</p>
        </div>

        <div
          className="col-2-2 float-right mt-7 md:mt-0"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Image src={asset1} alt="any acitivity logo" />
          <p className="mt-5">
            ANI has redefined how sport and physical activity is consumed;
            having over 10 million unique members and business across the globe,
            who are all creating, connecting and interacting with each other
            through the medium of ANI. ANI is creating happier, healthier and
            more productive societies. ANI brings communities together through
            sport in a time of rapid urbanization that is leading to
            isolationism.
          </p>
        </div>

        <div
          className="w-full col-2-2 float-right clear-right"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h5 className="font-semibold text-2xl mb-2.5 mt-6 md:mt-12 md:text-3xl">
            The Next Stage of Evolution
          </h5>
          <span className="uppercase text-sm font-medium mb-2.5">
            Ani where | Ani tyme | Ani one
          </span>
          <p>
            ANI is an aggregated and intuitive technology platform that
            seamlessly allows consumers to interact and engage with other
            likeminded individuals through the median of sport…A free service
            that unlocks thousands of sports games and recreational activities
            to individuals around the globe.
          </p>
          <div
            className="my-5"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <p className="font-bold uppercase"> Create Experiences</p>
            <p>
              At the touch of a button, easily create free or paid activities/
              training sessions for your friends, family, team or broader
              community.
            </p>
          </div>
          <div
            className="my-5"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <p className="font-bold uppercase">Seamlessly Connect</p>
            <p>
              Connect with like minded ‘individuals’ for a game of soccer,
              frisbee, a run or surf based on your location, interest and
              ability.
            </p>
          </div>
          <div
            className="my-5"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <p className="font-bold uppercase">Participate</p>
            <p>
              Participate at your own convenience in your own format; training,
              leisure or competition.
            </p>
          </div>
        </div>

        <div
          className="col-1-2 float-left"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h5 className="font-semibold mb-2.5 mt-6 md:mt-12 text-xl">
            Targeted Audiance
          </h5>
          <div className="flex items-center my-5">
            <Image src={individuals} alt="Individuals" className="mr-2.5" />
            <div className="ml-2.5 flex flex-1 flex-col">
              <p className="font-semibold">Individuals</p>
              <small>
                Looking for exercise but has differing schedules to friends.
              </small>
            </div>
          </div>

          <div
            className="flex items-center my-5"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <Image src={retirees} alt="Retirees" className="mr-2.5" />
            <div className="ml-2.5 flex flex-1 flex-col">
              <p className="font-semibold">Retirees</p>
              <small>
                Time rich and looking for activities to keep fit and healthy.
              </small>
            </div>
          </div>

          <div
            className="flex items-center my-5"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <Image src={corporates} alt="Corporates" className="mr-2.5" />
            <div className="ml-2.5 flex flex-1 flex-col">
              <p className="font-semibold">Corporates</p>
              <small>
                Time poor and looking for flexible options, a variety of
                locations and little commitment.
              </small>
            </div>
          </div>

          <div
            className="flex items-center my-5"
            // data-aos="fade-up"
            // data-aos-delay="50"
            // data-aos-duration="1000"
            // data-aos-easing="ease-in-out"
          >
            <div>
              <Image src={couples} alt="Couples" className="block" />
            </div>
            <div className="ml-2.5 flex flex-1 flex-col">
              <p className="font-semibold">Couples</p>
              <small>
                Looking to branch out, meet new people and be active whilst
                doing so.
              </small>
            </div>
          </div>

          <div
            className="flex items-center my-5"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <Image
              src={newToCommuntities}
              alt="New to Communitie"
              className="mr-2.5"
            />
            <div className="ml-2.5 flex flex-1 flex-col">
              <p className="font-semibold">
                Way to connect to our new communities
              </p>
              <small>
                Looking for exercise but has differing schedules to friends.
              </small>
            </div>
          </div>

          <div
            className="flex items-center my-5"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <Image src={families} alt="families" className="mr-2.5" />
            <div className="ml-2.5 flex flex-1 flex-col">
              <p className="font-semibold">Families</p>
              <small>
                Families can participate in activities with no age barrier.
              </small>
            </div>
          </div>
        </div>

        <h5
          className="w-full col-1-2 float-left mt-10 mb-5 clear-left"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          The Next Stage of Evolution
        </h5>

        <div className="w-full md:grid-cols-1 mb-10  md:mb-20 ">
          <div className="w-full flex flex-wrap justify-between md:flex-nowrap md:col-1-3">
            <div
              className="mb-1.5 w-full  max-w mr-16"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <p className="font-bold">Create</p>
              <ul className="list-disc pl-8">
                <li className="li-activity">
                  Create Create activities that suit you, your location and your
                  time, and invite others to join.
                </li>
                <li className="li-activity">
                  One off, Re occurring or Tournament Options.
                </li>
                <li className="li-activity">
                  Make it Public or share it only to your Friends, Groups or
                  associated Organisations.
                </li>
              </ul>
            </div>

            <div
              className="mb-1.5 w-full max-w"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <p className="font-bold">Search </p>
              <ul className="list-disc pl-8">
                <li className="li-activity">
                  Search Find Activities in your local or chosen area that suit
                  your needs.
                </li>
                <li className="li-activity">
                  {" "}
                  Discover activities based on Time, Location, Ability, Age,
                  Gender through the Search Tab.
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-between md:flex-nowrap md:col-1-3">
            <div
              className="w-full mb-1.5 max-w mr-16"
              // data-aos="fade-up"
              // data-aos-delay="50"
              // data-aos-duration="1000"
              // data-aos-easing="ease-in-out"
            >
              <p className="font-bold">Suggested</p>
              <ul className="list-disc pl-8">
                <li className="li-activity">
                  Scroll through the Suggested Tab (shows options based on
                  location, prior activities & friends.
                </li>
                <li className="li-activity">
                  {" "}
                  Two simple Click’s and you’re ready to hit the Join Button.
                </li>
              </ul>
            </div>
            <div
              className="w-full max-w"
              // data-aos="fade-up"
              // data-aos-delay="50"
              // data-aos-duration="1000"
              // data-aos-easing="ease-in-out"
            >
              <p className="font-bold">Profile</p>
              <ul className="list-disc pl-8">
                <li className="li-activity">
                  Rate your experience with Participants and Spotters.
                </li>
                <li className="li-activity">
                  {" "}
                  Keep your Public Profile up to date with interests, rating,
                  best experiences and photos.
                </li>
                <li className="li-activity">
                  Link your Profile to your Organisation for Private Activities.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="my-2.5"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Image src={slide3} className="image" alt="slide-3" />
        </div>

        <div
          className="my-2.5"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Image src={threephones} className="image" alt="three phones" />
        </div>

        <div
          className="my-2.5"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Image src={twophones} className="image" alt="two phones" />
        </div>

        <div
          className="my-2.5"
          data-aos-
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Image src={iphoneIpad} className="image" alt="Iphone and Ipad" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TimeLine;
