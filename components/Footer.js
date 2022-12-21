import React from "react";
import Image from "next/image";
import logo from "../assets/logo/logo-white.svg";
import phone from "../assets/img/1.svg";
import email from "../assets/img/2.svg";
import behance from "../assets/img/3.svg";
import linkedin from "../assets/img/4.svg";
import dribble from "../assets/img/5.svg";
import Contact from "./Contact";

const Footer = () => {
  return (
    <>
      <Contact />
      <div className="bg-black text-white pt-20">
        <div className="container mx-auto">
          <div className="w-full flex items-center flex-wrap justify-between">
            <div className="w-full flex items-center justify-center flex-col md:block   md:w-1/2">
              <div>
                <Image src={logo} alt="" />
              </div>
              <div className="mt-5 text-center max-w-sm leading-4  tracking-wider text-sm font-normal md:leading-8 md:text-left">
                I usually work on several projects but I’ll be happy to discuss
                new opportunities.
                <b className=" block">Let’s get in touch!</b>
              </div>
              <nav className="mt-16 hidden underline md:block">
                <ul className="flex  items-center justify-start flex-wrap">
                  <li className="mr-10">Home</li>
                  <li className="mr-10">About Me</li>
                  <li className="mr-10">Portfolio</li>
                  <li className="mr-10">Testemonials</li>
                  <li className="mr-10">Contact</li>
                </ul>
              </nav>
            </div>
            <div className="w-full flex justify-center mt-24 md:w-1/2 md:justify-end">
              <address>
                <div className="mb-8 block">
                  <a
                    href="mailto:skondraart@gmail.com"
                    className="flex items-center"
                  >
                    {" "}
                    <span className="mr-12">
                      <Image src={email} alt="email icon" />
                    </span>
                    <span>skondraart@gmail.com</span>
                  </a>
                </div>

                <div className="flex items-center justify-center md:block">
                  <div className="my-8">
                    <a href="tel:+38765410632" className="flex items-center">
                      <span className="mr-12">
                        <Image src={phone} alt="email icon" />
                      </span>{" "}
                      <span className="hidden md:inline">+38765410632</span>
                    </a>
                  </div>
                  <div className="my-8">
                    <a
                      href="https://dribbble.com/skondra"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center underline"
                    >
                      <span className="mr-12">
                        <Image src={dribble} alt="email icon" />{" "}
                      </span>
                      <span className="hidden md:inline">
                        dribbble.com/skondra
                      </span>
                    </a>
                  </div>
                  <div className="my-8">
                    <a
                      href="https://linkedin.com/dejanskondric"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center underline"
                    >
                      <span className="mr-12">
                        <Image src={linkedin} alt="email icon" />{" "}
                      </span>
                      <span className="hidden md:inline">
                        Linkedin.com/dejanskondric
                      </span>
                    </a>
                  </div>
                  <div className="my-8">
                    <a
                      href="https://www.behance.net/skondra"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center underline"
                    >
                      <span className="mr-12">
                        <Image src={behance} alt="email icon" />{" "}
                      </span>{" "}
                      <span className="hidden md:inline">
                        behance.net/skondra
                      </span>
                    </a>
                  </div>
                </div>
              </address>
            </div>
          </div>
          <div className="flex justify-center mt-6 pb-16">
            <span className="font-normal text-base tracking-wider text-fade">
              Developed by ©
              <a
                href="https://github.com/bojanbosnic"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Bojan Bosnic
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
