import React from "react";

export const Toggle = ({ isChecked, handleChange }) => {
  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="themeSwitch"
        checked={isChecked}
        onChange={handleChange}
      />
    </div>
  );
};
