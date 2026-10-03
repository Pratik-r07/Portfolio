import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { contact, credentials } from "../portfolioData";
import { SectionHeading } from "./SectionHeading";

export const About = () => (
  <section className="section about-section" id="about" data-testid="about-section">
    <div className="section-inner">
      <SectionHeading
        number="01"
        eyebrow="Operator profile"
        title={<>Profile &amp; <em>operating principles</em></>}
        description="A practical DevOps profile shaped by live systems, incident pressure, and a bias for automation."
        testId="about-heading"
      />

      <div className="about-grid">
        <motion.div
          className="about-copy"
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="about-lede" data-testid="about-summary">
            DevOps-focused IT professional with 1 year of experience managing production Windows and Linux
            environments, automating operational tasks, and troubleshooting enterprise applications.
          </p>
          <p>
            Hands-on experience building cloud-native DevOps solutions using AWS, Docker, Kubernetes,
            Terraform, Jenkins, Argo CD, and Ansible, with a strong focus on CI/CD, Infrastructure as Code,
            and cloud automation.
          </p>

          <div className="terminal-card" data-testid="about-terminal-card">
            <div className="terminal-header">
              <div aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <p>OPERATIONS SNAPSHOT</p>
            </div>
            <p className="terminal-line">Focus: CI/CD · Infrastructure as Code · Observability</p>
            <p className="terminal-line">Workflow: Plan → Provision → Deploy → Monitor</p>
            <p className="terminal-line">Outcome: Reliable, repeatable operations</p>
          </div>

          <div className="about-proof-grid">
            {credentials.map((item, index) => (
              <div className="proof-card" key={item.label} data-testid={`about-proof-${index + 1}`}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <a
            className="text-link"
            href={`mailto:${contact.email}?subject=${encodeURIComponent("DevOps opportunity for Pratik Rajvir")}`}
            data-testid="about-email-link"
          >
            Start a conversation
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </motion.div>

        <motion.div
          className="about-visual-frame"
          initial={{ opacity: 0, y: 60, rotate: 2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
          data-testid="about-abstract-visual"
        >
          <div className="about-visual-grid" />
          <div className="about-visual-core" />
          <div className="about-visual-orbit" />
          <span>SYS / OPS</span>
        </motion.div>
      </div>
    </div>
  </section>
);
