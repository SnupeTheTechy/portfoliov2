import "./toggle.css";
import Sun from "../../assets/sun.png";
import Moon from "../../assets/moon.png";
import { ThemeContext } from "../../context";

import React, { useContext } from "react";

function Toggle() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const buttonStyle = { left: darkMode ? 0 : 25 };

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className="toggle">
      <img src={Sun} alt="" className="toggleIcon" />
      <img src={Moon} alt="" className="toggleIcon" />
      <div
        className="toggleButton"
        onClick={handleClick}
        style={buttonStyle}
      ></div>
    </div>
  );
}

export default Toggle;
