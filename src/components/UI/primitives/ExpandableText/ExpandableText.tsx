"use client";

import React, { ReactNode, useState } from "react";
import "./ExpandableText.scss";
import { ArrowExpandIcon } from "../../svg";

interface ExpandableTextProps {
    children?: ReactNode;
    initialHeight?: number;
}

const ExpandableText = ({ children, initialHeight = 100 }: ExpandableTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const containerStyle = {
    height: isExpanded ? "auto" : `${initialHeight}px`,
  };

  const buttonStyle = {
    marginTop: "8px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "4px",
  };

  return (
    <div className={`expandable ${isExpanded ? "expandable--expanded" : ""}`}>
      <div className="expandable__text" style={containerStyle}>
        {children}
      </div>
      <button className="expandable__button" onClick={toggleExpand}>
        {isExpanded ? "Show Less" : "Show More"}
        <div className={`icon expandable__icon ${isExpanded ? "expandable__icon--rotated" : ""}`}>
            <ArrowExpandIcon />
        </div>
      </button>
    </div>
  );
};

export default ExpandableText;