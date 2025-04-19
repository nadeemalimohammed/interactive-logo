import { useState } from "react";
import HoverImage from "./components/HoverImage";
import ExpandedView from "./components/ExpandedView";
import "./App.css";

export default function App() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="app-container">
      {!expanded && <HoverImage onClick={() => setExpanded(true)} />}
      {expanded && <ExpandedView onClose={() => setExpanded(false)} />}
    </div>
  );
}
