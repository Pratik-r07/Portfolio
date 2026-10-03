import { motion } from "framer-motion";
import { skillGroups } from "../portfolioData";
import { SectionHeading } from "./SectionHeading";

export const Skills = () => (
  <section className="section skills-section" id="skills" data-testid="skills-section">
    <div className="section-inner">
      <SectionHeading
        number="04"
        eyebrow="Systems stack"
        title={<>Technical <em>capability</em></>}
        description="A practical stack for building, deploying, observing, and operating reliable systems."
        testId="skills-heading"
      />

      <div className="skills-bento">
        {skillGroups.map((group, index) => (
          <motion.div
            className={`skill-card skill-card--${index + 1}`}
            key={group.title}
            initial={{ opacity: 0, y: 42 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            data-testid={`skill-group-${group.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
          >
            <span>0{index + 1}</span>
            <h3>{group.title}</h3>
            <div className="skill-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
