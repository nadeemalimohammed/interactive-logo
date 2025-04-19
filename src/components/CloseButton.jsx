import { motion } from "framer-motion";

const CloseButton = ({ onClick }) => (
  <motion.button
    className="close-button"
    onClick={onClick}
    whileHover={{ rotate: 90 }}
    transition={{ duration: 0.3 }}
  >
    ✕
  </motion.button>
);

export default CloseButton;