import Button from "../shared/Button";

import classes from "./CreateTask.module.css";

const CreateTask = (props) => {
  return (
    <form className={classes.CreateTask}>
      <input
        className={classes.CreateTask__input}
        placeholder="Create a new todo..."
        maxLength="50"
      ></input>
      <div className={classes.CreateTask__button}>
        <Button>Add</Button>
      </div>
    </form>
  );
};

export default CreateTask;
