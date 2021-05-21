import { useState, useEffect } from "react";

import classes from "./Header.module.css";
import sunIcon from "../assets/source_icons_sun-light.svg";
import moonIcon from "../assets/source_icons_half-moon.svg";

const Header = (props) => {
  const [isLight, setIsLight] = useState(false);
  const [icon, setIcon] = useState(sunIcon);
  useEffect(() => {
    document.body.classList.toggle("light", isLight);
  }, [isLight, icon]);

  const themeHandler = () => {
    setIsLight(!isLight);
    !isLight ? setIcon(moonIcon) : setIcon(sunIcon);
  };

  return (
    <header className={classes.header}>
      <h1 className={classes.header__title}>TODO</h1>
      <button onClick={themeHandler} className={classes.header__btn}>
        <img src={icon} alt="sunIcon" />
      </button>
    </header>
  );
};

export default Header;
