import { useEffect } from "react";
import "tailwindcss/tailwind.css";
import AOS from "aos";
import "../styles/globals.scss";
import "../styles/style.scss";
import "../styles/_mixins.scss";
import "aos/dist/aos.css";

import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 500,
    });
  });
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
