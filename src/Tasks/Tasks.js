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
  } else if (props.currFilter === "All") {
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
  } else if (props.currFilter === "Active") {
    singleTask = props.active.map((e) => {
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
  } else if (props.currFilter === "Completed") {
    singleTask = props.completed.map((e) => {
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
      <TaskNav
        tasksLeft={props.active}
        filterHandler={props.onDisplayFilteredTasks}
        currFilter={props.currFilter}
      />
      <ul className={classes.Tasks__List}>{singleTask}</ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    toDoList: state.toDoList,
    loading: state.loading,
    active: state.active,
    currFilter: state.currFilter,
    completed: state.completed,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitToDoList: () => dispatch(actions.initToDoList()),
    onAddTask: (task) => dispatch(actions.addTask(task)),
    onRemoveTask: (id) => dispatch(actions.removeTask(id)),
    onCompletedTask: (id, completionStatus) =>
      dispatch(actions.completedTask(id, completionStatus)),
    onDisplayFilteredTasks: (currFilter) =>
      dispatch(actions.displayFilteredTasks(currFilter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
