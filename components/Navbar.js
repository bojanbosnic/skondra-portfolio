import React, { useState, useContext } from "react";
import Image from "next/image";
import Svg from "../assets/logo/logo.svg";
import styles from "../styles/Home.module.scss";
import classNames from "classnames";
import ContactForm from "./ContactForm";
// import { Link } from "react-scroll";
import { MenuContext } from "../context/menuContext";
import Link from "next/link";

const Interface = () => {
  const [toggle, setToggle] = useState(false);
  const [isContact, setIsContact] = useState(false);
  const { menu, setMenu } = useContext(MenuContext);
  console.log("nabbar context", menu);
  const toggleFun = () => setToggle(!toggle);
  return (
    <div id="home" className="container mx-auto ">
      <nav className="flex bg-transparent justify-between items-center pt-12 mb-8">
        <a href="/">
          <Image
            src={Svg}
            color="#fff"
            // height={100}
            // width={100}
            className="w-20 h-12   md:w-full md:h-full "
            alt="Bagzi studio logo"
          />
        </a>
        <div className={`${styles.siteNavbar} md:w-full md:min-wi-min`}>
          <ul
            className={classNames(
              `${
                (toggle || menu) && styles.open
              }  flex p-0 items-center list-none text-white md:my-0`
            )}
          >
            {isContact || menu ? (
              <>
                <div className="container mx-auto">
                  <ContactForm />
                </div>
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
                    href="/#projects"
                    className="cursor-pointer"
                    legacyBehavior
                  >
                    <a onClick={toggleFun}>Projects</a>
                  </Link>
                </li>
                <li className="mr-4">
                  <Link href="/" onClick={toggleFun} className="cursor-pointer">
                    Home
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <button
          className={classNames(
            `${(toggle || menu) && styles.togglerOpen}  ${
              (isContact || menu) && "close-btn"
            } border-3 border-white m-3 flex items-center bg-transparent cursor-pointer h-6  z-30`
          )}
          onClick={(e) => {
            setIsContact(false), setMenu(false), toggleFun();
          }}
        >
          {toggle || menu ? (
            <span className="font-semibold uppercase z-30 text-white mr-2.5">
              Close
            </span>
          ) : (
            <span className="font-semibold uppercase mr-2.5 text-black">
              Menu
            </span>
          )}
          <span
            className={`${styles.spanAnimation}  togglerOpen w-7 h-1 rounded-2xl bg-black block ease-in-out duration-300`}
          ></span>
        </button>
      </nav>
    </div>
  );
};

export default Interface;
