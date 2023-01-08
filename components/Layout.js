import React from "react";
import Head from "next/head";
import favicon from "../assets/logo/favicon.ico";
import icon from "../assets/logo/favicon.png";
const Layout = ({ children, pageTitle }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
        <link rel="apple-touch-icon" href={icon.src} />
        <meta name="author" content="Bojan Bosnic" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default Layout;
