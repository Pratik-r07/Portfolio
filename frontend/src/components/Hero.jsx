import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, Download, FolderKanban, Mail } from "lucide-react";
import { useRef } from "react";
import { contact, heroStats } from "../portfolioData";
import { KineticText } from "./KineticText";

const heroLines = [
  { text: "PRATIK" },
  { text: "RAJVIR", className: "hero-line-outline" },
];

const marqueeItems = ["AWS", "KUBERNETES", "TERRAFORM", "CI/CD", "GITOPS", "LINUX", "AUTOMATION"];

export const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const sculptureY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const sculptureRotate = useTransform(scrollYProgress, [0, 1], [0, 12]);
  const sculptureOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.2]);

  return (
    <section className="hero-section" id="top" ref={sectionRef} data-testid="hero-section">
      <motion.div
        className="hero-sculpture-wrap"
        style={{ y: sculptureY, rotate: sculptureRotate, opacity: sculptureOpacity }}
        aria-hidden="true"
        data-testid="hero-3d-sculpture"
      >
        <div className="sculpture-scene">
          <div className="orbital-ring orbital-ring--one" />
          <div className="orbital-ring orbital-ring--two" />
          <div className="orbital-ring orbital-ring--three" />
          <div className="hero-monolith" />
          <div className="glass-sphere glass-sphere--one" />
          <div className="glass-sphere glass-sphere--two" />
          <div className="glass-sphere glass-sphere--three" />
        </div>
      </motion.div>

      <motion.aside
        className="hero-telemetry"
        initial={{ opacity: 0, x: 28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.25, duration: 0.8 }}
        aria-label="Technical system status"
        data-testid="hero-telemetry"
      >
        <div className="telemetry-row">
          <span>SYS.STATUS</span>
          <strong data-testid="hero-status-value"><i aria-hidden="true" /> OPERATIONAL</strong>
        </div>
        <div className="telemetry-row">
          <span>PIPELINE</span>
          <strong data-testid="hero-pipeline-value">GITOPS / GREEN</strong>
        </div>
        <div className="telemetry-row">
          <span>OBSERVABILITY</span>
          <strong data-testid="hero-observability-value">PROM + GRAFANA</strong>
        </div>
        <p className="telemetry-note">Current focus: reliable delivery, automation, and measurable uptime.</p>
      </motion.aside>

      <div className="hero-inner">
        <div className="hero-copy">
          <motion.p
            className="hero-kicker"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            data-testid="hero-kicker"
          >
            DevOps & Cloud Operations / Portfolio 2026
          </motion.p>

          <KineticText lines={heroLines} data-testid="hero-heading" aria-label="Pratik Rajvir DevOps" />

          <motion.p
            className="hero-summary"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.9 }}
            data-testid="hero-summary"
          >
            DevOps engineer building calm, observable infrastructure across AWS, Kubernetes, and CI/CD pipelines.
          </motion.p>


          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.8 }}
            data-testid="hero-actions"
          >
            <motion.a
              className="pill-button pill-button--light"
              href="#projects"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              data-testid="hero-view-projects-button"
            >
              <FolderKanban size={17} aria-hidden="true" />
              View projects
            </motion.a>
            <motion.a
              className="pill-button"
              href={contact.resumeUrl}
              download
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              data-testid="hero-download-resume-button"
            >
              <Download size={17} aria-hidden="true" />
              Download resume
            </motion.a>
            <motion.a
              className="pill-button"
              href={`mailto:${contact.email}`}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              data-testid="hero-contact-button"
            >
              <Mail size={17} aria-hidden="true" />
              Contact me
            </motion.a>
          </motion.div>

          <div className="hero-stats" data-testid="hero-stats">
            {heroStats.map((stat, index) => (
              <motion.div
                className="hero-stat"
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.7 }}
                data-testid={`hero-stat-${index + 1}`}
              >
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        className="scroll-cue"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <ArrowDownRight size={18} />
      </motion.div>

      <div className="editorial-marquee" aria-hidden="true">
        <div className="marquee-track">
          {Array.from({ length: 4 }, (_, index) => (
            <span key={index}>{marqueeItems.join(" — ")} — </span>
          ))}
        </div>
      </div>
    </section>
  );
};
