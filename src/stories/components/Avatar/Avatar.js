import React from "react";
import "./Avatar.css";

const Avatar = ({ content, size, bgColor, stacked }) => {
  return (
    <div
      className={`avatar avatar-${size}${stacked ? " stacked" : ""}`}
      style={{ backgroundColor: bgColor }}
    >
      {content}
    </div>
  );
};

// Add default prop for 'stacked'
Avatar.defaultProps = {
  stacked: false,
};

export default Avatar;
