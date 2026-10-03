import { motion } from "framer-motion";

const ease = [0.76, 0, 0.24, 1];

export const KineticText = ({ lines, className = "", ...props }) => (
  <motion.h1
    className={`kinetic-heading ${className}`}
    initial="hidden"
    animate="visible"
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
    }}
    {...props}
  >
    {lines.map((line, index) => (
      <span className="kinetic-line" key={`${line.text}-${index}`}>
        <motion.span
          className={`kinetic-line-inner ${line.className || ""}`}
          variants={{
            hidden: { y: "115%" },
            visible: { y: "0%", transition: { duration: 1.15, ease } },
          }}
        >
          {line.text}
        </motion.span>
      </span>
    ))}
  </motion.h1>
);
