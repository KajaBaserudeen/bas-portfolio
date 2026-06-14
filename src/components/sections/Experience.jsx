import { motion } from "framer-motion";
import { experience } from "../../data/experience";
import Container from "../common/Container";
const Experience = () => {
  return (
    <section id="experience" className="section py-20">
      <Container>
        <h2 className="text-4xl font-bold mb-16">Experience</h2>

        <div className="relative border-l border-accent ml-4">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              className="mb-12 ml-10"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="absolute w-4 h-4 bg-accent rounded-full -left-2" />

              <h3 className="text-2xl font-bold">{item.title}</h3>

              <p className="text-accent-light">{item.company}</p>

              <p className="text-sm text-slate-400 mb-3">{item.year}</p>

              <p className="text-slate-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;
