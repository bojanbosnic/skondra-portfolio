import { useState } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import PersonalProjects from "../components/PersonalProjects";
import Projects from "../components/Projects";
import Testimonial from "../components/Testimonial";
const Index = () => {
  const [setMenu, menu] = useState(false);
  return (
    <Layout pageTitle="Personal Portfolio">
      <Hero menu={menu} />
      <Projects />
      <PersonalProjects />
      <Testimonial />
      <Footer menu={menu} setMenu={setMenu} />
    </Layout>
  );
};
export default Index;
