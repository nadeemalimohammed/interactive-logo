import { motion } from "framer-motion";

const Bio = () => (
  <motion.p
    className="bio"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1, duration: 0.8 }}
  >
    I'm a passionate Front-End Developer specializing in creating interactive
    and dynamic web applications. I thrive in building accessible and engaging
    user experiences.
  </motion.p>
);

export default Bio;