import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import Container from "../common/Container";
const Projects = () => {
  return (
    <section id="projects" className="section py-20">
      <Container>
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
              }}
              className="
              bg-slate-900
              rounded-2xl
              overflow-hidden
              border
              border-slate-800
            "
            >
              <img
                src={project.image}
                alt={project.title}
                className="
                w-full
                h-56
                object-cover
              "
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                <p className="text-slate-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                      bg-accent/20
                      text-accent-light
                      px-3
                      py-1
                      rounded-full
                      text-sm
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
