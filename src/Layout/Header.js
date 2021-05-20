import classes from "./Header.module.css";
import sunIcon from "../assets/source_icons_sun-light.svg";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <h1 className={classes.header__title}>TODO</h1>
      <button className={classes.header__btn}>
        <img src={sunIcon} alt="sunIcon" />
      </button>
    </header>
  );
};

export default Header;
