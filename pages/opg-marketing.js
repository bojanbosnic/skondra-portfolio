import React from "react";
import Image from "next/image";
import ekoKorpa from "../assets/img/eko-korpa.png";
import Footer from "../components/Footer";
import image2 from "../assets/img/image 2.png";
import image3 from "../assets/img/image 3.png";
import image4 from "../assets/img/image 4.png";

import cart from "../assets/img/Cart.jpg";
import img4 from "../assets/img/4.png";
import store from "../assets/img/Store.jpg";
import laptopAndMonitor from "../assets/img/Laptop-and-Monitor-Mockup-04.png";

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
          <h6 className="text-silver ">Case Study</h6>
          <h5 className="my-2.5">
            OPG Market-
            <span className="font-normal">
              {" "}
              Homemade farmer products store
            </span>{" "}
          </h5>
          <span className="uppercase text-sm leading-7 text-silver tracking-[9px] font-medium">
            My Role
          </span>
          <p>Creative Direction</p>
          <p>Product Designer</p>
          <span className="uppercase text-sm leading-7 text-silver tracking-[9px] font-medium">
            Client
          </span>
          <p>Freelance Project </p>
          <span className="uppercase text-sm leading-7 text-silver tracking-[9px] font-medium">
            Year
          </span>
          <p>2022</p>
        </div>

        <div
          className="col-2-2 float-right mt-7 md:mt-0"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Image src={ekoKorpa} alt="any acitivity logo" />
          <p className="mt-5">
            A client asked me to design a web based app for farmers and OPGs to
            sell their products in a easier way. The farming industry is
            currently stuck in the past, selling and buying goods in-person,
            over the phone, and through local distributors. So the client saw an
            opportunity to create a digital marketplace that would empower
            farmers to buy/sell goods nation wide.
          </p>
        </div>

        <div className="w-full col-2-2 float-right clear-right">
          <h5
            className="font-semibold mb-2.5 mt-6 md:mt-12"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            My Contribution
          </h5>
          <p
            className="my-5"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            In colaboration with PM’s and PO’s we identified the problem, did
            user research / testing, UI Design, and facilltated the design hand
            off to the developers. Also before the hand off, we were in constant
            communication with the dev team to make sure that everyting can be
            made in a reasonable time frame.
          </p>
          <div
            className="my-2.5 md:my-10"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <p className="font-semibold">Challenge</p>
            <p
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Design an Web app that will help farmers sell their produce
              directly to consumers and help buyers easily locate the products
              they are looking for and purchase directly from farmers at
              affordable rates.a
            </p>
          </div>
          <div
            className="my-2.5 md:my-10"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <p className="font-semibold">User Research</p>
            <p>
              User research was by far the most challenging one, because we are
              building this product for the Balkan area, that type of digital
              products expecially the farmers market did not became mainstream
              yet and since the farmers are still older people who are not in
              “new tech” era and still can’t comprehend the power that
              Information Technology has in now days and how going “online” can
              boost their sales by a lot. So my approach was to do an set of
              Interviews. I interviewed a set of farmers and buyers and here are
              some of their feedbacks.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <p>
              <b>Q.</b> What goes into process of sourcing a market for your
              product?
            </p>
            <p>
              <b>A.</b> “It is a bit difficult sourcing a market for my product
              most of the time and because of that I highly rely on middlemen
              who exploit us and buy at really lower prices.”
            </p>
            <p>
              <b>Q.</b> How does lack of markets influence your product?
            </p>
            <p>
              <b>A.</b> “Produce goes bad due to lack of markets.”
            </p>
            <p>
              <b>Q.</b> Is there a farmer that meets your demands for your
              product?
            </p>
            <p>
              <b>A.</b> “It’s time-consuming to find a farmer with the products
              that I am looking for.”
            </p>
            <p>
              <b>Q.</b> Who do you rely on to get your products?
            </p>
            <p>
              <b>A.</b> “I am forced to rely on brokers to get my products. They
              sell expensively and that affects my business as I am forced to
              sell my products at a higher price.”
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
          <div className="my-10 mt-8">
            <p className="font-semibold">Market Research</p>
            <p>
              {" "}
              With the positive uptake of e-commerce businesses, it is
              undoubtfully important for farmers to consider heading the same
              direction. More than 50% of farmers own a smartphone and it is
              evident that those who have embraced online methods of marketing
              and selling have successfully boosted their businesses. Moreso, to
              counteract consumer hesitation and improve sales, promoting cost
              savings, and providing in-depth product information has shown to
              build trust and convey quality.
            </p>
          </div>
          <div className="my-2.5 md:my-10">
            <p
              className="font-semibold"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Questions for myself to answer
            </p>
            <ul
              className="list-disc text-xl pl-8 li-activity"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <li>
                How might we enable the farmers to directly reach customers?
              </li>
              <li> How might we help buyers locate farmers closest to them?</li>
              <li>How might we help farmers showcase their products?</li>
              <li>How might we build trust between the farmers and buyers?</li>
              <li>
                {" "}
                How might we help farmers quote the right price for their
                produce?
              </li>
            </ul>
          </div>

          <div
            className="my-2.5 md:my-10"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <p className="font-semibold">My Findings</p>
            <p>
              After conducting a user and market research I came to the
              conclusion that this Product is higly needed in this region by the
              OPGs/Farmers as well as the buyers, because for couple reasons:
            </p>
            <ul className="list-disc text-xl pl-8 li-activity">
              <li>Elimantes the middle man</li>
              <li>
                Brings the cost down Farmers products sell faster and they dont
                get spoiled We expand the market by a lot
              </li>
              <li>
                Give the buyers more options and details about the desired
                products they want to buy
              </li>
            </ul>
          </div>
        </div>

        <p className="w-full font-semibold col-1-2 float-left mt-10 mb-10 clear-right">
          Competition Analysis
        </p>
        <div className="w-full flex flex-wrap justify-center mb-10  md:justify-between md:mb-20 md:flex-nowrap">
          <div
            className="col-opg-marketing mb-7 md:mb-0"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <Image src={image2} alt="eMerkato logo" className="w-full" />
            <ul className="list-disc text-xl pl-8 li-activity mt-5">
              <li>
                Confusing CTA’s - The registration Button where does it take me?
              </li>
              <li>Everything is jam packed needs some cleanliness to it</li>
              <li>
                Confusing CTA’s - The registration Button where does it take me?
              </li>
            </ul>
          </div>
          <div
            className="col-opg-marketing mb-7 md:mb-0"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <Image src={image3} alt="Finoteka logo" />
            <ul className="list-disc text-xl pl-8 li-activity mt-5">
              <li>Not enoguh Information</li>
              <li>Only one language</li>
              <li>To many CTA’s on the landing page</li>
              <li>Very confusing list of all OPG sellers and their products</li>
            </ul>
          </div>
          <div
            className="col-opg-marketing mb-7 md:mb-0"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <Image src={image4} alt="Webi.hr logo" />
            <ul className="list-disc text-xl pl-8 li-activity mt-5">
              <li>Old and boring Interface</li>
              <li>
                Confusing UX, It says they selling OPG goods had to scroll quite
                a bit to see the products.
              </li>
              <li>
                Navigation bar confusing had to play with it a little while to
                find how to become a seller. Worried how older people will find
                that.{" "}
              </li>
            </ul>
          </div>
        </div>
        <div
          className="my-2.5"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Image
            src={laptopAndMonitor}
            className="image"
            alt="Laptop and Monitor"
          />
        </div>

        <div
          className="my-2.5"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Image src={img4} className="image" alt="Laptop" />
        </div>

        <div
          className="my-2.5"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Image src={cart} className="image" alt="Home screen" />
        </div>

        <div
          className="my-2.5"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Image src={store} className="image" alt="Store" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TimeLine;
