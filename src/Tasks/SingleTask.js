import { useState, useEffect } from "react";

import classes from "./SingleTask.module.css";

const SingleTask = (props) => {
  const [titleClass, setTitleClass] = useState(
    classes.SingleTask__taskDescription
  );
  const [inputValue, setInputValue] = useState(false);
  useEffect(() => {
    isCompleted();
  }, []);

  const isCompleted = () => {
    if (props.completed) {
      setInputValue(true);
      setTitleClass(
        [
          classes.SingleTask__taskDescription,
          `${classes["SingleTask__taskDescription--completed"]}`,
        ].join(" ")
      );
    }
  };

  const checkboxHandler = (e) => {
    props.checkboxHandler(props.taskId, e.target.checked);
    if (e.target.checked) {
      setTitleClass(
        [
          classes.SingleTask__taskDescription,
          `${classes["SingleTask__taskDescription--completed"]}`,
        ].join(" ")
      );
      setInputValue(e.target.checked);
    } else {
      setTitleClass(classes.SingleTask__taskDescription);
      setInputValue(e.target.checked);
    }
  };

  const deleteTaskHandler = () => {
    props.removeHandler(props.taskId);
  };

  return (
    <li className={classes.SingleTask}>
      <label className={classes.SingleTask__inputContainter}>
        <input
          className={classes.SingleTask__input}
          type="checkbox"
          onChange={checkboxHandler}
          checked={inputValue}
        />
        <span className={classes.SingleTask__checkmark}></span>
      </label>
      <p className={titleClass}>{props.taskTitle}</p>
      <button
        onClick={deleteTaskHandler}
        className={classes.SingleTask__closeBtn}
      >
        X
      </button>
    </li>
  );
};

export default SingleTask;
