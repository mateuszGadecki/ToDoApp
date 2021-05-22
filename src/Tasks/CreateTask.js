import { useState } from "react";

import Button from "../shared/Button";

import classes from "./CreateTask.module.css";

const CreateTask = (props) => {
  const [inputValue, setInputValue] = useState("");

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const addTaskHandler = (event) => {
    event.preventDefault();
    props.addTaskHandler(inputValue);
    setInputValue("");
  };

  return (
    <form className={classes.CreateTask}>
      <input
        onChange={(event) => inputChangeHandler(event)}
        className={classes.CreateTask__input}
        placeholder="Create a new todo..."
        value={inputValue}
        maxLength="50"
      ></input>
      <div className={classes.CreateTask__button}>
        <Button clicked={addTaskHandler}>Add</Button>
      </div>
    </form>
  );
};

export default CreateTask;
