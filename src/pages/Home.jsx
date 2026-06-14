import SEO from "../components/SEO";
import ScrollProgress from "../components/ScrollProgress";
import BackToTop from "../components/BackToTop";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";

const Home = () => {
  return (
    <>
      <SEO />
      <ScrollProgress />
      <BackToTop />

      <main className="bg-slate-950 text-white min-h-screen pt-20">
        <Header />

        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        {/* <Testimonials /> */}
        <Contact />

        <Footer />
      </main>
    </>
  );
};

export default Home;
