import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export const CursorGlow = () => {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const springX = useSpring(x, { stiffness: 55, damping: 18, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 55, damping: 18, mass: 0.5 });

  useEffect(() => {
    const handleMove = (event) => {
      x.set(event.clientX - 240);
      y.set(event.clientY - 240);
    };
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [x, y]);

  return <motion.div className="cursor-glow" style={{ x: springX, y: springY }} aria-hidden="true" />;
};
