import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import PersonalProjects from "../components/PersonalProjects";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

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
