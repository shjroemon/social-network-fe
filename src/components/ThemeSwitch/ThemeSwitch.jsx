import React, { useState } from "react";
import "./themeSwitch.css";
import { BsMoonFill } from "react-icons/bs";

const ThemeSwitch = ({ setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const className = isOpen ? "theme-switch open" : "theme-switch";
  const changeTheme = (e) => {
    setTheme(e.currentTarget.classList[0]);
    setIsOpen(false);
  };
  return (
    <div className={className}>
      <div className="switch" onClick={() => setIsOpen(!isOpen)}>
        <BsMoonFill />
      </div>
      <div className="themes">
        <div className="dark" onClick={changeTheme}>
          <p className="tooltip">Dark</p>
        </div>
        <div className="dark-contrast" onClick={changeTheme}>
          <p className="tooltip">Ocean</p>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitch;
