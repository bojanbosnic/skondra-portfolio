import React, { useState } from "react";
import Image from "next/image";
import logo from "../assets/logo/logo.svg";
import styles from "../styles/Home.module.scss";
import classNames from "classnames";
import ContactForm from "./ContactForm";
import { Link } from "react-scroll";
// import Link from "next/link";

const Interface = () => {
  const [toggle, setToggle] = useState(false);
  const [isContact, setIsContact] = useState(false);
  const [success, setSuccess] = useState(false);

  const toggleFun = () => setToggle(!toggle);
  return (
    <div id="home" className="container mx-auto ">
      <nav className="flex bg-transparent justify-between items-center pt-12 mb-8">
        <a href="/" legacyBehavior>
          <Image src={logo} alt="Bagzi studio logo" />
        </a>
        <div className={`${styles.siteNavbar} md:w-full md:min-wi-min`}>
          <ul
            className={classNames(
              `${
                toggle && styles.open
              }  flex p-0 items-center list-none text-white md:my-0`
            )}
          >
            {isContact ? (
              <>
                {success ? (
                  <h2>Success</h2>
                ) : (
                  <div className="container mx-auto">
                    <ContactForm setSuccess={setSuccess} />
                  </div>
                )}
              </>
            ) : (
              <>
                <li onClick={(e) => setIsContact(true)} className="mr-4">
                  <a href="#contact">Contact</a>
                </li>
                <li className="mr-4">
                  <a href="/about-me">About Me</a>
                </li>
                <li className="mr-4">
                  <Link
                    className="cursor-pointer"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={toggleFun}
                  >
                    Projects
                  </Link>
                </li>
                <li className="mr-4">
                  <a href="/" onClick={toggleFun} className="cursor-pointer">
                    Home
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
        <button
          className={classNames(
            `${
              toggle && styles.togglerOpen
            } border-3 border-white m-3 flex items-center bg-transparent cursor-pointer h-6  z-30`
          )}
          onClick={(e) => {
            setIsContact(false), setSuccess(false), toggleFun();
          }}
        >
          {toggle ? (
            <span className="font-semibold uppercase z-30 text-white mr-2.5">
              Close
            </span>
          ) : (
            <span className="font-semibold uppercase mr-2.5">Menu</span>
          )}
          <span
            className={`${styles.spanAnimation} togglerOpen w-7 h-1 rounded-2xl bg-black block ease-in-out duration-300`}
          ></span>
        </button>
      </nav>
    </div>
  );
};

export default Interface;
