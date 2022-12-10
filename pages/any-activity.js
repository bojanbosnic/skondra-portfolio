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
        <div className="w-full flex flex-wrap">
          <div className="order-1 mb-14 md:w-2/5">
            <h6 className="text-silver mb-2.5">Case Study</h6>
            <h5 className="mb-2.5">
              TimeLine -
              <span className="font-normal"> Event attendance Application</span>{" "}
            </h5>
            <h6 className="text-silver mb-2.5">My Role</h6>
            <p className="mb-1.5">Creative Direction</p>
            <p className="mb-2.5">Product Designer</p>
            <h6 className="text-silver">Client</h6>
            <p className="mb-2.5">IT Tesla Solutions</p>
            <h6 className="text-silver mb-2.5">Year</h6>
            <p>2022</p>
          </div>
          <div className="w-3/5 order-2">
            <Image src={asset1} alt="any acitivity logo" />
            <p>
              ANI has redefined how sport and physical activity is consumed;
              having over 10 million unique members and business across the
              globe, who are all creating, connecting and interacting with each
              other through the medium of ANI. ANI is creating happier,
              healthier and more productive societies. ANI brings communities
              together through sport in a time of rapid urbanization that is
              leading to isolationism.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-wrap">
          <div className="order-2 md:order-1 md:w-2/5">
            <h5 className="mb-5">Targeted Audiance</h5>

            <div className="flex items-center my-5">
              <Image src={individuals} alt="Individuals" className="mr-2.5" />
              <div>
                <p className="font-semibold">Individuals</p>
                <small>
                  Looking for exercise but has differing schedules to friends.
                </small>
              </div>
            </div>

            <div className="flex items-center my-5">
              <Image src={retirees} alt="Retirees" className="mr-2.5" />
              <div>
                <p className="font-semibold">Retirees</p>
                <small>
                  Time rich and looking for activities to keep fit and healthy.
                </small>
              </div>
            </div>

            <div className="flex items-center my-5">
              <Image src={corporates} alt="Corporates" className="mr-2.5" />
              <div>
                <p className="font-semibold">Corporates</p>
                <small>
                  Time poor and looking for flexible options, a variety of
                  locations and little commitment.
                </small>
              </div>
            </div>

            <div className="flex items-center my-5">
              <Image src={couples} alt="Couples" className="mr-2.5" />
              <div>
                <p className="font-semibold">Couples</p>
                <small>
                  Looking to branch out, meet new people and be active whilst
                  doing so.
                </small>
              </div>
            </div>

            <div className="flex items-center my-5">
              <Image
                src={newToCommuntities}
                alt="New to Communitie"
                className="mr-2.5"
              />
              <div>
                <p className="font-semibold">
                  Way to connect to our new communities
                </p>
                <small>
                  Looking for exercise but has differing schedules to friends.
                </small>
              </div>
            </div>

            <div className="flex items-center my-5">
              <Image src={families} alt="families" className="mr-2.5" />
              <div>
                <p className="font-semibold">Families</p>
                <small>
                  Families can participate in activities with no age barrier.
                </small>
              </div>
            </div>
          </div>

          <div className="w-full order-1 md:w-3/5 md:order-2">
            <h5>The Next Stage of Evolution</h5>
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
            <div className="my-5">
              <p className="font-bold uppercase"> Create Experiences</p>
              <p>
                At the touch of a button, easily create free or paid activities/
                training sessions for your friends, family, team or broader
                community.
              </p>
            </div>
            <div className="my-5">
              <p className="font-bold uppercase">Seamlessly Connect</p>
              <p>
                Connect with like minded ‘individuals’ for a game of soccer,
                frisbee, a run or surf based on your location, interest and
                ability.
              </p>
            </div>
            <div className="my-5">
              <p className="font-bold uppercase">Participate</p>
              <p>
                Participate at your own convenience in your own format;
                training, leisure or competition.
              </p>
            </div>
          </div>
        </div>

        <div className="my-10">
          <h5>The Next Stage of Evolution</h5>
          <div className="flex">
            <div>
              <div className="my-5">
                <h5>Create</h5>
                <ul className="list-disc">
                  <li>
                    Create Create activities that suit you, your location and
                    your time, and invite others to join.
                  </li>
                  <li>One off, Re occurring or Tournament Options.</li>
                  <li>
                    Make it Public or share it only to your Friends, Groups or
                    associated Organisations.
                  </li>
                </ul>
              </div>
              <div className="my-5">
                <h5>Suggested</h5>
                <ul className="list-disc">
                  <li>
                    Create Create activities that suit you, your location and
                    your time, and invite others to join.
                  </li>
                  <li>One off, Re occurring or Tournament Options.</li>
                  <li>
                    Make it Public or share it only to your Friends, Groups or
                    associated Organisations.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="my-5">
                <h5>Search </h5>
                <ul className="list-disc">
                  <li>
                    Create Create activities that suit you, your location and
                    your time, and invite others to join.
                  </li>
                  <li>One off, Re occurring or Tournament Options.</li>
                  <li>
                    Make it Public or share it only to your Friends, Groups or
                    associated Organisations.
                  </li>
                </ul>
              </div>
              <div className="my-5">
                <h5>Profile</h5>
                <ul className="list-disc">
                  <li>
                    Create Create activities that suit you, your location and
                    your time, and invite others to join.
                  </li>
                  <li>One off, Re occurring or Tournament Options.</li>
                  <li>
                    Make it Public or share it only to your Friends, Groups or
                    associated Organisations.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="my-2.5">
          <Image src={slide3} className="image" alt="slide-3" />
        </div>

        <div className="my-2.5">
          <Image src={threephones} className="image" alt="three phones" />
        </div>

        <div className="my-2.5">
          <Image src={twophones} className="image" alt="two phones" />
        </div>

        <div className="my-2.5">
          <Image src={iphoneIpad} className="image" alt="Iphone and Ipad" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TimeLine;
