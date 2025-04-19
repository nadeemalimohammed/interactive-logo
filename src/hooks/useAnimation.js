import { useState, useEffect } from "react";

const useAnimation = ({ duration = 0.6, easing = [0.25, 0.1, 0.25, 1] }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const animationConfig = {
    duration,
    ease: easing,
  };

  const handleHoverStart = () => {
    setIsHovered(true);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  const handleToggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsExpanded(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return {
    isHovered,
    isExpanded,
    animationConfig,
    handleHoverStart,
    handleHoverEnd,
    handleToggleExpand,
    setIsExpanded,
  };
};

export default useAnimation;
