export const contact = {
  name: "Pratik Rajvir",
  role: "DevOps & Cloud Operations",
  email: "pratikrajvir20@gmail.com",
  phone: "+91 75069 67703",
  resumeUrl: "/pratik-rajvir-resume.pdf",
  availability: "Open to DevOps, Cloud, and SRE opportunities",
};

export const navItems = [
  { label: "Profile", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#skills" },
];

export const heroStats = [
  { value: "1+", label: "year supporting production systems" },
  { value: "04", label: "cloud-native flagship builds" },
  { value: "20+", label: "DevOps, cloud, and operations tools" },
];

export const experience = {
  role: "Support Analyst",
  company: "Vector Consulting Group",
  period: "June 2025 — Present",
  highlights: [
    "Manage production Windows and Linux servers, troubleshooting application, infrastructure, and deployment issues to protect availability.",
    "Renew SSL certificates, update bindings, and keep secure client communication running without interruption.",
    "Automate health checks, log monitoring, and daily maintenance with PowerShell and Bash.",
    "Trace failures across logs, Windows services, Linux processes, ports, APIs, and frontend or backend services.",
    "Configure and troubleshoot SMTP services for reliable production notifications and alerts.",
    "Use Microsoft SQL Server and PostgreSQL for data validation, incident investigation, and application troubleshooting.",
    "Build Power BI dashboards that make client configurations, operational metrics, and environment health visible.",
    "Collaborate with clients, development teams, and infrastructure teams to resolve root causes and restore service.",
  ],
};

export const projects = [
  {
    id: "task-manager",
    index: "01",
    label: "Full-stack DevOps project",
    title: "Task Manager Application",
    description:
      "A three-tier React, Flask, and PostgreSQL platform deployed with Docker and Kubernetes, complete with Nginx Ingress, ConfigMaps, Secrets, Persistent Volumes, and horizontal autoscaling.",
    result:
      "Jenkins and Argo CD turn every GitHub change into a tested image and a GitOps-driven Kubernetes deployment, with Prometheus and Grafana watching the cluster in real time.",
    stack: ["React", "Flask", "PostgreSQL", "Docker", "Kubernetes", "Jenkins", "Argo CD", "Grafana"],
  },
  {
    id: "aws-vpc",
    index: "02",
    label: "Cloud architecture project",
    title: "Secure Multi-AZ AWS VPC",
    description:
      "A highly available network foundation with public and private subnets, Internet Gateway, NAT Gateway, route tables, Security Groups, and Network ACLs.",
    result:
      "Terraform modules provision the architecture repeatedly, while Bastion Host access and least-privilege controls keep private application tiers isolated.",
    stack: ["AWS", "VPC", "EC2", "NAT Gateway", "Terraform", "Bastion Host", "IAM"],
  },
  {
    id: "placement-connect",
    index: "03",
    label: "Published platform build",
    title: "Placement Connect",
    description:
      "A Flask and MongoDB placement management platform with ML-based resume analysis, Power BI dashboards, and workflows for students, recruiters, and administrators.",
    result:
      "Published in Springer LNEE for PEIS Conference, SCRS 2025, and protected with software copyright registration.",
    stack: ["Flask", "MongoDB", "Machine Learning", "Power BI", "Docker", "REST APIs"],
  },
  {
    id: "terraform-ansible",
    index: "04",
    label: "Infrastructure automation",
    title: "Terraform + Ansible on AWS",
    description:
      "Reusable Terraform modules provision EC2, networking, Security Groups, and key pairs; Ansible playbooks configure Nginx consistently across Linux environments.",
    result:
      "Provisioning and configuration management operate as one automated workflow, with networking, SSH, IAM, and deployment failures systematically resolved.",
    stack: ["AWS", "Terraform", "Ansible", "Linux", "Nginx", "EC2"],
  },
];

export const skillGroups = [
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Kubernetes", "Docker", "Terraform", "Ansible", "Argo CD", "Jenkins", "GitHub Actions"],
  },
  {
    title: "Infrastructure",
    skills: ["Linux", "Windows Server", "Networking", "SSL/TLS", "SMTP", "CI/CD", "Production Support"],
  },
  {
    title: "Monitoring & Automation",
    skills: ["Prometheus", "Grafana", "Power BI", "Bash", "PowerShell", "Python"],
  },
  {
    title: "Data & Tools",
    skills: ["Microsoft SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Git", "GitHub", "Flask"],
  },
];

export const credentials = [
  { value: "8.3/10", label: "B.E. Information Technology CGPA" },
  { value: "2025", label: "Mumbai University graduate" },
  { value: "Springer", label: "LNEE publication, PEIS Conference" },
];
