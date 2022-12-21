import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo/logo.svg";
import styles from "../styles/Home.module.scss";
import classNames from "classnames";
import ContactForm from "./ContactForm";

const Interface = () => {
  const [toggle, setToggle] = useState(false);
  const [isContact, setIsContact] = useState(false);
  const [success, setSuccess] = useState(false);

  const toggleFun = () => setToggle(!toggle);
  return (
    <div className="container mx-auto ">
      <nav className="flex bg-transparent justify-between items-center pt-12 mb-8">
        <Link href="/" legacyBehavior>
          <Image src={logo} alt="Bagzi studio logo" />
        </Link>
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
                  <Link href="/">Contact</Link>
                </li>
                <li className="mr-4">
                  <Link href="/about-me" target="_blank">
                    About Me
                  </Link>
                </li>
                <li className="mr-4">
                  <Link href="#perosnal">Projects</Link>
                </li>
                <li className="mr-4">
                  <Link href="/">Home</Link>
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
