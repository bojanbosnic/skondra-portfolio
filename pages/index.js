import { useState } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import PersonalProjects from "../components/PersonalProjects";
import Projects from "../components/Projects";
import Testimonial from "../components/Testimonial";

const Index = () => {
  return (
    <Layout pageTitle="Personal Portfolio">
      <Hero />
      <Projects />
      <PersonalProjects />
      <Testimonial />
      <Footer />
    </Layout>
  );
};
export default Index;
