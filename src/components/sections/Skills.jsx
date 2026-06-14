import { skillCategories } from "../../data/skills";
import Container from "../common/Container";
const Skills = () => {
  return (
    <section id="skills" className="section py-20">
      <Container>
        <h2 className="text-4xl font-bold mb-12">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((group) => (
            <div key={group.category} className="bg-slate-900 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-accent-light mb-4">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                    px-4
                    py-2
                    rounded-full
                    bg-accent/10
                    text-accent-light
                    border
                    border-accent/20
                  "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
