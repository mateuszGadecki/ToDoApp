import classes from "./Button.module.css";

const Button = (props) => {
  let toggleActiveClass = [];
  props.currFilter === props.children
    ? (toggleActiveClass = [
        classes.button,
        `${classes["button--active"]}`,
      ].join(" "))
    : (toggleActiveClass = [classes.button]);
  return (
    <button
      value={props.children}
      onClick={props.clicked}
      className={toggleActiveClass}
    >
      {props.children}
    </button>
  );
};

export default Button;
