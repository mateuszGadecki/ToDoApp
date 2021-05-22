import { useEffect } from "react";
import { connect } from "react-redux";

import CreateTask from "./CreateTask";
import TaskNav from "./TaskNav";
import SingleTask from "./SingleTask";
import Spinner from "../shared/Spinner";
import classes from "./Tasks.module.css";
import * as actions from "../store/actions/index";

const Tasks = (props) => {
  useEffect(() => {
    props.onInitToDoList();
  }, []);

  let singleTask;

  if (props.loading) {
    singleTask = <Spinner />;
  } else {
    singleTask = props.toDoList.map((e) => {
      return (
        <SingleTask
          key={e.id}
          taskTitle={e.title}
          completed={e.completed}
          taskId={e.id}
          removeHandler={props.onRemoveTask}
          checkboxHandler={props.onCompletedTask}
        />
      );
    });
  }

  return (
    <div className={classes.Tasks}>
      <CreateTask addTaskHandler={props.onAddTask} />
      <TaskNav tasksLeft={props.active} />
      <ul className={classes.Tasks__List}>{singleTask}</ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    toDoList: state.toDoList,
    loading: state.loading,
    active: state.active,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitToDoList: () => dispatch(actions.initToDoList()),
    onAddTask: (task) => dispatch(actions.addTask(task)),
    onRemoveTask: (id) => dispatch(actions.removeTask(id)),
    onCompletedTask: (id, completionStatus) =>
      dispatch(actions.completedTask(id, completionStatus)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
