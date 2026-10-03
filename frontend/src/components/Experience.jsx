import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { contact, experience } from "../portfolioData";
import { SectionHeading } from "./SectionHeading";

export const Experience = () => (
  <section className="section experience-section" id="experience" data-testid="experience-section">
    <div className="section-inner">
      <SectionHeading
        number="02"
        eyebrow="Production chapter"
        title={<>Production <em>experience</em></>}
        description="Live client environments, secure services, incident response, and the discipline to keep systems available."
        testId="experience-heading"
      />

      <div className="experience-grid">
        <motion.aside
          className="experience-card"
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          data-testid="experience-role-card"
        >
          <span>Current role</span>
          <h3>{experience.role}</h3>
          <p>{experience.company}</p>
          <time>{experience.period}</time>
          <a
            className="pill-button pill-button--small"
            href={contact.resumeUrl}
            download
            data-testid="experience-resume-button"
          >
            <Download size={15} aria-hidden="true" />
            Full resume
          </a>
        </motion.aside>

        <div className="experience-timeline" data-testid="experience-timeline">
          {experience.highlights.map((highlight, index) => (
            <motion.div
              className="timeline-item"
              key={highlight}
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: index * 0.04 }}
              data-testid={`experience-highlight-${index + 1}`}
            >
              <span className="timeline-node" aria-hidden="true" />
              <span className="timeline-index">0{index + 1}</span>
              <p>{highlight}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
