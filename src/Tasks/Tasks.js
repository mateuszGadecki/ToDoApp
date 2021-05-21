import CreateTask from "./CreateTask";
import TaskNav from "./TaskNav";
import SingleTask from "./SingleTask";

import classes from "./Tasks.module.css";

const Tasks = (props) => {
  return (
    <div className={classes.Tasks}>
      <CreateTask />
      <TaskNav />
      <ul className={classes.Tasks__List}>
        <SingleTask />
        <SingleTask />
      </ul>
    </div>
  );
};

export default Tasks;
