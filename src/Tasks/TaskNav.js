import Button from "../shared/Button";

import classes from "./TaskNav.module.css";

const TaskNav = (props) => {
  const currFilterHandler = (e) => {
    props.filterHandler(e.target.value);
  };
  return (
    <div className={classes.TaskNav}>
      <p className={classes.TaskNav__amount}>
        {props.tasksLeft.length} items left
      </p>
      <ul className={classes.TaskNav__filters}>
        <li>
          <Button currFilter={props.currFilter} clicked={currFilterHandler}>
            All
          </Button>
        </li>
        <li>
          <Button currFilter={props.currFilter} clicked={currFilterHandler}>
            Active
          </Button>
        </li>
        <li>
          <Button currFilter={props.currFilter} clicked={currFilterHandler}>
            Completed
          </Button>
        </li>
      </ul>
      <Button clicked={props.deleteCompletedHandler}>Clear Completed</Button>
    </div>
  );
};

export default TaskNav;
