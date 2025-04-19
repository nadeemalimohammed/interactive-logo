import { motion } from "framer-motion";
import Bio from "./Bio";
import SocialLinks from "./SocialLinks";
import CloseButton from "./CloseButton";
import "./ExpandedView.css";

const ExpandedView = ({ onClose }) => {
  return (
    <motion.div
      className="expanded-view"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.img
        src="logo.svg"
        alt="Expanded Logo"
        className="expanded-logo"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.h1
        className="name"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, textDecorationStyle: "solid" }}
        transition={{ delay: 0.5, duration: 0.6 }}
        whileHover={{ scale: 1.1, color: "#0d6efd"}}
      >
        Nadeem Ali Mohammed
      </motion.h1>
      <motion.h2
        className="title"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        Front-End Developer
      </motion.h2>
      <Bio />
      <SocialLinks />
      <motion.a
        className="portfolio-link"
        href="https://nadeemalimohammed.github.io/my-portfolio/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        View Portfolio
      </motion.a>
      <CloseButton onClick={onClose} />
    </motion.div>
  );
};

export default ExpandedView;
