import { motion } from "framer-motion";
import Container from "../common/Container";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
  FaDownload,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="section py-20">
      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-slate-700
            bg-slate-900/60
            backdrop-blur-xl
            max-[420px]:p-6
            p-10
            lg:p-16
          "
        >
          {/* Glow Effects */}

          <div className="absolute -top-24 -left-24 w-72 h-72 bg-accent/20 blur-[120px]" />

          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-blue-500/20 blur-[120px]" />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}

            <div>
              <span
                className="
                inline-flex
                items-center
                px-4
                py-2
                rounded-full
                bg-green-500/10
                border
                border-green-500/20
                text-green-400
                text-sm
                font-medium
                mb-6
              "
              >
                ● Available for Opportunities
              </span>

              <h2
                className="
                text-4xl md:text-5xl font-bold
                mb-6
              "
              >
                Let's Build Something
                <span className="block text-accent-light">
                  Amazing Together
                </span>
              </h2>

              <p
                className="
                text-slate-400
                text-lg
                max-w-xl
              "
              >
                I'm always interested in discussing frontend engineering
                opportunities, React.js projects, UI leadership roles, and
                innovative digital experiences.
              </p>
            </div>

            {/* Right */}

            <div className="space-y-5">
              <a
                href="mailto:creativeui360@gmail.com"
                className="
                  flex
                  items-center
                  gap-4
                  p-5
                  rounded-2xl
                  bg-slate-800/60
                  border
                  border-slate-700
                  hover:border-accent
                  transition
                "
              >
                <FaEnvelope size={24} className="text-accent-light" />

                <div>
                  <p className="text-sm text-slate-400">Email</p>

                  <p className="font-medium">creativeui360@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+918122123561"
                className="
                  flex
                  items-center
                  gap-4
                  p-5
                  rounded-2xl
                  bg-slate-800/60
                  border
                  border-slate-700
                  hover:border-accent
                  transition
                "
              >
                <FaPhoneAlt size={22} className="text-accent-light" />

                <div>
                  <p className="text-sm text-slate-400">Phone</p>

                  <p className="font-medium">+91 81221 23561</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/kajabaserudeen/"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-4
                  p-5
                  rounded-2xl
                  bg-slate-800/60
                  border
                  border-slate-700
                  hover:border-accent
                  transition
                "
              >
                <FaLinkedin size={24} className="text-accent-light" />

                <div>
                  <p className="text-sm text-slate-400">LinkedIn</p>

                  <p className="font-medium">Connect with me</p>
                </div>
              </a>

              <a
                href="https://github.com/KajaBaserudeen"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-4
                  p-5
                  rounded-2xl
                  bg-slate-800/60
                  border
                  border-slate-700
                  hover:border-accent
                  transition
                "
              >
                <FaGithub size={24} className="text-accent-light" />

                <div>
                  <p className="text-sm text-slate-400">GitHub</p>

                  <p className="font-medium">View repositories</p>
                </div>
              </a>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="mailto:creativeui360@gmail.com"
                  className="
                    bg-accent
                    hover:bg-accent-dark
                    px-8
                    py-4
                    rounded-xl
                    font-semibold
                    transition
                  "
                >
                  Contact Me
                </a>

                <a
                  href="/Kaja-Baserudeen-Lead-UI-Engineer-Resume.pdf"
                  download
                  className="
                    flex
                    items-center
                    gap-2
                    border
                    border-slate-600
                    hover:border-accent
                    px-8
                    py-4
                    rounded-xl
                    transition
                  "
                >
                  <FaDownload />
                  Resume
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;
