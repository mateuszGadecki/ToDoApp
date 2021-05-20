import CreateTask from "./CreateTask";
import TaskNav from "./TaskNav";

import classes from "./Tasks.module.css";

const Tasks = (props) => {
  return (
    <div className={classes.Tasks}>
      <CreateTask />
      <TaskNav />
    </div>
  );
};

export default Tasks;
