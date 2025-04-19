import React from "react";
import { motion } from "framer-motion";
import useAnimation from "../hooks/useAnimation";
import ExpandedView from "./ExpandedView";

import "./Logo.css"; // Create this for styles

const Logo = () => {
  const {
    isHovered,
    isExpanded,
    animationConfig,
    handleHoverStart,
    handleHoverEnd,
    handleToggleExpand,
    setIsExpanded,
  } = useAnimation({ duration: 0.6, easing: [0.25, 0.8, 0.25, 1] });

  return (
    <>
      {!isExpanded ? (
        <motion.img
          src="/logo.svg"
          alt="Personal Logo"
          className="logo-image"
          loading="lazy"
          onMouseEnter={handleHoverStart}
          onMouseLeave={handleHoverEnd}
          onClick={handleToggleExpand}
          initial={{ rotate: 0, scale: 1 }}
          animate={{
            rotate: isHovered ? 360 : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: animationConfig.duration, ease: animationConfig.ease }}
        />
      ) : (
        <ExpandedView onClose={() => setIsExpanded(false)} />
      )}
    </>
  );
};

export default Logo;
