import { useEffect } from "react";
import "tailwindcss/tailwind.css";
import AOS from "aos";
import "../styles/globals.scss";
import "../styles/style.scss";
import "../styles/_mixins.scss";
import "aos/dist/aos.css";
import MenuProvider from "../context/menuContext";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 500,
    });
  });
  return (
    <MenuProvider>
      <Navbar />
      <Component {...pageProps} />
    </MenuProvider>
  );
}

export default MyApp;
