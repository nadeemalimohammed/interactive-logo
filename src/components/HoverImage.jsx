import { motion } from "framer-motion";
import { useState } from "react";

const HoverImage = ({ onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.img
      src="/assets/logo.svg"
      alt="Logo"
      aria-label="Interactive Logo"
      className="hover-image"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      animate={{
        scale: hovered ? 1.05 : 1,
        filter: hovered ? "grayscale(0%)" : "grayscale(100%)",
      }}
      transition={{
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      }}
    />
  );
};

export default HoverImage;