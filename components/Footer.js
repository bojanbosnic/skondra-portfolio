import React, { useContext } from "react";
import Image from "next/image";
import logo from "../assets/logo/logo-white.svg";
import phone from "../assets/img/1.svg";
import email from "../assets/img/2.svg";
import behance from "../assets/img/3.svg";
import linkedin from "../assets/img/4.svg";
import dribble from "../assets/img/5.svg";
import Contact from "./Contact";
import { MenuContext } from "../context/menuContext";

import { Link } from "react-scroll";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineDribbble, AiOutlineBehance } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const { setMenu } = useContext(MenuContext);

  return (
    <>
      <Contact />
      <div className="bg-black text-white py-10 md:py-0">
        <div className="container mx-auto">
          <div className="w-full flex items-center flex-wrap justify-between">
            <div className="w-full flex items-center justify-center flex-col md:block  md:w-1/2">
              <div>
                <Image src={logo} alt="Logo" />
              </div>
              <div className="mt-5 text-center max-w-sm leading-6 md:leading-8  tracking-wider text-base font-normal  md:text-left">
                <span className="">
                  I usually work on several projects but I’ll be happy to
                  discuss new opportunities.
                </span>
                <b className=" block">Let’s get in touch!</b>
              </div>
              <nav className="mt-16 hidden md:block">
                <ul className="flex uppercase text-sm  items-center justify-start flex-wrap">
                  <li className="mr-10">
                    <a href="#home" className="underline hover:no-underline">
                      Home
                    </a>
                  </li>
                  <li className="mr-10">
                    <a href="about-me" className="underline hover:no-underline">
                      About Me
                    </a>
                  </li>
                  <li className="mr-10">
                    <a
                      href="#projects"
                      className="underline hover:no-underline"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="mr-10">
                    <a
                      href="#testemonials"
                      className="underline hover:no-underline"
                    >
                      Testemonials
                    </a>
                  </li>
                  <li>
                    <button
                      className="mr-10 uppercase underline hover:no-underline"
                      onClick={() => setMenu(true)}
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="w-full flex justify-center mt-6 md:mt-24 md:w-1/2 md:justify-end">
              <address>
                <div className="mb-6 md:mb-8 block">
                  <a
                    href="mailto:skondraart@gmail.com"
                    className="flex items-center"
                  >
                    {" "}
                    <span className="mr-2.5 md:mr-12">
                      <Image src={email} alt="email icon" />
                    </span>
                    <span>skondraart@gmail.com</span>
                  </a>
                </div>

                <div className="flex items-center justify-between md:justify-center md:block">
                  <div className="my-4 md:my-8">
                    <a href="tel:+38765410632" className="flex items-center">
                      <span className="mr-0 md:mr-12">
                        <BsTelephone fontSize={22} />
                      </span>{" "}
                      <span className="hidden md:inline">+38765410632</span>
                    </a>
                  </div>
                  <div className="my-4 md:my-8">
                    <a
                      href="https://dribbble.com/skondra"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center underline hover:no-underline"
                    >
                      <span className="mr-0 md:mr-12">
                        <AiOutlineDribbble fontSize={22} />
                      </span>
                      <span className="hidden md:inline">
                        dribbble.com/skondra
                      </span>
                    </a>
                  </div>
                  <div className="my-4 md:my-8">
                    <a
                      href="https://www.linkedin.com/in/dejanskondric/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center underline hover:no-underline"
                    >
                      <span className="mr-0 md:mr-12">
                        <FaLinkedinIn fontSize={22} />
                      </span>
                      <span className="hidden md:inline">
                        Linkedin.com/dejanskondric
                      </span>
                    </a>
                  </div>
                  <div className="my-4 md:my-8">
                    <a
                      href="https://www.behance.net/skondra"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center underline hover:no-underline"
                    >
                      <span className="mr-0 md:mr-12">
                        <AiOutlineBehance fontSize={22} />
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
          <div className="text-center pb-0 mt-6 md:pb-16">
            <span className="font-normal block text-xs tracking-wider leading-3 md:text-base text-fade">
              © All Right Reserved
            </span>

            <span className="font-normal text-xs tracking-wider leading-3 md:text-base text-fade">
              Developed by
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
