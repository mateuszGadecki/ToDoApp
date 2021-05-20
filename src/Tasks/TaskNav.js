import Button from "../shared/Button";

import classes from "./TaskNav.module.css";

const TaskNav = (props) => {
  return (
    <div className={classes.TaskNav}>
      <p className={classes.TaskNav__amount}>3 items left</p>
      <ul className={classes.TaskNav__filters}>
        <li>
          <Button>All</Button>
        </li>
        <li>
          <Button>Active</Button>
        </li>
        <li>
          <Button>Completed</Button>
        </li>
      </ul>
      <Button>Clear Completed</Button>
    </div>
  );
};

export default TaskNav;
