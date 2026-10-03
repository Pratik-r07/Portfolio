import { motion } from "framer-motion";
import { ArrowUp, Download, Mail, Phone } from "lucide-react";
import { contact } from "../portfolioData";
import { SectionHeading } from "./SectionHeading";

export const Contact = () => (
  <footer className="section contact-section" id="contact" data-testid="contact-section">
    <div className="section-inner">
      <SectionHeading
        number="05"
        eyebrow="Contact"
        title={<>Start a <em>conversation</em></>}
        description={contact.availability}
        testId="contact-heading"
      />

      <motion.div
        className="contact-panel"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="contact-eyebrow">Let's build reliable systems</p>
        <h2 data-testid="contact-title">
          <span>DISCUSS</span>
          <span>DEVOPS</span>
          <span>OPPORTUNITIES</span>
        </h2>

        <div className="contact-actions" data-testid="contact-actions">
          <motion.a
            className="pill-button pill-button--light"
            href={`mailto:${contact.email}`}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            data-testid="contact-email-button"
          >
            <Mail size={17} aria-hidden="true" />
            {contact.email}
          </motion.a>
          <motion.a
            className="pill-button"
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            data-testid="contact-phone-button"
          >
            <Phone size={17} aria-hidden="true" />
            {contact.phone}
          </motion.a>
          <motion.a
            className="pill-button"
            href={contact.resumeUrl}
            download
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            data-testid="contact-resume-button"
          >
            <Download size={17} aria-hidden="true" />
            Resume PDF
          </motion.a>
        </div>
      </motion.div>

      <div className="site-footer" data-testid="site-footer">
        <p>© 2026 Pratik Rajvir. Built for uptime.</p>
        <a href="#top" className="footer-top-link" data-testid="footer-back-to-top-link">
          Back to top
          <ArrowUp size={16} aria-hidden="true" />
        </a>
      </div>
    </div>
  </footer>
);
