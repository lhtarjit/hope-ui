import React from "react";
import "./Checkbox.css";

const Checkbox = ({ label, checked, onChange }) => {
  const handleCheckboxChange = (event) => {
    onChange(event.target.checked);
  };

  return (
    <label className="checkbox-label">
      <input
        className="checkbox"
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      {label}
    </label>
  );
};

export default Checkbox;
