import React from "react";
import Image from "next/image";
import logo from "../assets/img/Logo-Mockup.jpg";
import poster1 from "../assets/img/posters-1.jpg";
import poster2 from "../assets/img/posters-2.jpg";
import Footer from "../components/Footer";
const GraphicsArt = () => {
  return (
    <>
      <div className="container mx-auto">
        <h6 className="text-silver mb-2.5">Posters and Graphic Art</h6>
        <h5 className="mt-0">Showcasing some of my personal projects</h5>
        {/* <div class="grid grid-rows-3 grid-flow-col gap-4">
          <div class="row-span-1 md:row-span-3">
            <Image src={poster2} alt="Bagzi Studio on building" />
          </div>
          <div class="col-span-1 md:col-span-2">
            <Image src={logo} alt="Bagzi Studio Logo mockup" />
          </div>
          <div class="row-span-1 col-span-1 md:row-span-2 md:col-span-2">
            <Image src={poster1} alt="Bagzi Studio commercial" />
          </div>
        </div> */}
        <div className="flex items-center flex-wrap md:flex-nowrap">
          <div>
            <Image src={poster2} alt="Bagzi Studio on building" />
          </div>
          <div className="ml-0 mb-5 md:ml-5 md:mb-0">
            <div className="mb-5 mt-5 md:mt-0">
              <Image src={logo} alt="Bagzi Studio Logo mockup" />
            </div>
            <div className="self-end">
              <Image src={poster1} alt="Bagzi Studio commercial" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GraphicsArt;
