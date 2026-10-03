import { motion } from "framer-motion";

export const SectionHeading = ({ number, eyebrow, title, description, testId }) => (
  <motion.div
    className="chapter-heading"
    initial={{ opacity: 0, y: 42 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-120px" }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    data-testid={testId}
  >
    <div className="chapter-kicker">
      <span>{number}</span>
      <i aria-hidden="true" />
      <p>{eyebrow}</p>
    </div>
    <h2>{title}</h2>
    {description && <p className="chapter-description">{description}</p>}
  </motion.div>
);
