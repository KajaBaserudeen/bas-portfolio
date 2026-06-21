import { motion } from "framer-motion";
import { experience } from "../../data/experience";
import Container from "../common/Container";

const Experience = () => {
  return (
    <section id="experience" className="section py-20 overflow-hidden">
      <Container>
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            Professional Journey
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            A decade of experience building modern web applications, leading
            teams, and delivering scalable frontend solutions.
          </p>
        </div>

        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-accent to-transparent -translate-x-1/2" />

          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative mb-12 flex items-center
                ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
            >
              {/* Timeline Dot */}
              <div
                className="
                  hidden md:flex
                  absolute
                  left-1/2
                  -translate-x-1/2
                  w-5
                  h-5
                  rounded-full
                  bg-accent
                  border-4
                  border-slate-950
                  shadow-[0_0_25px_rgba(16,185,129,0.6)]
                  z-10
                "
              />

              {/* Card */}
              <div
                className="
                  w-full
                  md:w-[46%]
                  p-8
                  rounded-3xl
                  bg-slate-900/60
                  backdrop-blur-xl
                  border
                  border-slate-800
                  hover:border-accent
                  transition-all
                  duration-300
                  hover:-translate-y-2
                "
              >
                <span
                  className="
                    inline-block
                    px-4
                    py-1
                    rounded-full
                    bg-accent/10
                    text-accent-light
                    text-sm
                    mb-4
                  "
                >
                  {item.year}
                </span>

                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>

                <p className="text-accent-light font-medium mb-4">
                  {item.company}
                </p>

                <p className="text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;
