import { motion } from "framer-motion";
import Container from "../common/Container";

const About = () => {
  return (
    <section id="about" className="section py-20">
      <Container>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-4xl font-bold mb-8">About Me</h2>

          <p className="text-slate-300 leading-8">
            Experienced UI Engineer with 10+ years of expertise building
            enterprise web applications using React.js, JavaScript, and modern
            frontend architectures. Passionate about performance optimization,
            accessibility, design systems, and mentoring teams.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="bg-slate-900 p-6 rounded-xl">
              <h3 className="text-3xl font-bold text-accent-light">10+</h3>
              <p>Years Experience</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h3 className="text-3xl font-bold text-accent-light">50+</h3>
              <p>Projects Delivered</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h3 className="text-3xl font-bold text-accent-light">15+</h3>
              <p>Team Members Led</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h3 className="text-3xl font-bold text-accent-light">100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;
