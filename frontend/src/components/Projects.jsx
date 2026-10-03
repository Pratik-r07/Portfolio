import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { contact, projects } from "../portfolioData";
import { SectionHeading } from "./SectionHeading";

export const Projects = () => (
  <section className="section projects-section" id="projects" data-testid="projects-section">
    <div className="section-inner">
      <SectionHeading
        number="03"
        eyebrow="Selected builds"
        title={<>Selected <em>technical work</em></>}
        description="Cloud-native applications and infrastructure built end to end: code, containers, pipelines, observability, and operations."
        testId="projects-heading"
      />

      <div className="project-stack">
        {projects.map((project, index) => (
          <motion.article
            className={`project-card ${index % 2 ? "project-card--reverse" : ""}`}
            key={project.id}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-140px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8 }}
            data-testid={`project-card-${project.id}`}
          >
            <div className={`project-visual project-visual--${project.id}`} aria-hidden="true">
              <div className="project-visual-grid" />
              <div className="project-visual-ring project-visual-ring--one" />
              <div className="project-visual-ring project-visual-ring--two" />
              <div className="project-visual-core" />
              <span>{project.index}</span>
            </div>

            <div className="project-content">
              <p className="project-label">{project.label}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="project-result">{project.result}</p>
              <div className="project-tags" data-testid={`project-tags-${project.id}`}>
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <a
                className="text-link"
                href={`mailto:${contact.email}?subject=${encodeURIComponent(`Case study: ${project.title}`)}`}
                data-testid={`project-contact-link-${project.id}`}
              >
                Discuss this build
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
