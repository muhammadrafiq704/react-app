import React from "react";
import "../../../css/LightDarkMode/ToggleBtn.css";
import useTheme from "../../../../context/ThemeContext";

const ThemeBtn = () => {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const handleChange = (e) => {
    const checkedStatus = e.currentTarget.checked;
    if (checkedStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };


  return (
    <label className="theme-btn">
      <input
        type="checkbox"
        className="checkbox-btn"
        onChange={handleChange}
        checked={themeMode === "dark"}
      />
      <span>Toggle Theme</span>
    </label>
  );
};

export default ThemeBtn;
