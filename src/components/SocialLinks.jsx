import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const SocialLinks = () => (
  <div className="social-links">
    <a href="https://github.com/nadeemalimohammed" target="_blank" rel="noreferrer" aria-label="GitHub">
      <FaGithub />
    </a>
    <a href="https://www.linkedin.com/in/nadeem-ali-mohammed/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
      <FaLinkedin />
    </a>
    <a href="nadeemali.dev@gmail.com" aria-label="Email">
      <FaEnvelope />
    </a>
  </div>
);

export default SocialLinks;