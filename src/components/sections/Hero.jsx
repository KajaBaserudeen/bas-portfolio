import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import Container from "../common/Container";
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section pt-20">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-accent-light font-semibold">
              Available for Opportunities
            </span>

            <h1 className="text-5xl md:text-7xl font-bold mt-4">
              Lead UI Engineer
            </h1>

            <div className="text-2xl mt-6 text-accent-light">
              <TypeAnimation
                sequence={[
                  "Senior UI Engineer",
                  2000,
                  "React Specialist",
                  2000,
                  "UI Team Lead",
                  2000,
                ]}
                repeat={Infinity}
              />
            </div>

            <p className="mt-6 text-slate-300 leading-8">
              10+ years building scalable enterprise applications, design
              systems, and modern user experiences.
            </p>

            <div className="flex gap-4 mt-8 flex-wrap">
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg bg-accent hover:bg-accent-dark"
              >
                Hire Me
              </a>

              <a
                href="/resume.pdf"
                download="Kaja-Baserudeen-Lead-UI-Engineer-Resume.pdf"
                className="px-6 py-3 rounded-lg border border-accent flex items-center gap-2"
              >
                <FaDownload />
                Resume
              </a>
            </div>

            <div className="flex gap-6 mt-8 text-3xl">
              <a
                href="https://www.linkedin.com/in/kajabaserudeen/"
                target="_blank"
              >
                <FaLinkedin />
              </a>

              <a href="https://github.com/KajaBaserudeen" target="_blank">
                <FaGithub />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <img
              src="/profile.jpeg"
              alt="Profile"
              className="rounded-full w-80 h-80 object-cover border-4 border-accent"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
