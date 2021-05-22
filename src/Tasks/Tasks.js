import { useEffect } from "react";
import { connect } from "react-redux";
import TransitionGroup from "react-transition-group/TransitionGroup";
import CSSTransition from "react-transition-group/CSSTransition";

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
  const mapTasks = (e) => {
    return (
      <CSSTransition
        timeout={300}
        classNames={{
          enter: `${classes["Tasks__ListItem--enter"]}`,
          enterActive: `${classes["Tasks__ListItem--enter-active"]}`,
          exit: `${classes["Tasks__ListItem--exit"]}`,
          exitActive: `${classes["Tasks__ListItem--exit-active"]}`,
        }}
        key={e.id}
      >
        <SingleTask
          taskTitle={e.title}
          completed={e.completed}
          taskId={e.id}
          removeHandler={props.onRemoveTask}
          checkboxHandler={props.onCompletedTask}
        />
      </CSSTransition>
    );
  };

  if (props.loading) {
    singleTask = (
      <CSSTransition timeout={0}>
        <Spinner />
      </CSSTransition>
    );
  } else if (props.currFilter === "All") {
    singleTask = props.toDoList.map((e) => {
      return mapTasks(e);
    });
  } else if (props.currFilter === "Active") {
    singleTask = props.active.map((e) => {
      return mapTasks(e);
    });
  } else if (props.currFilter === "Completed") {
    singleTask = props.completed.map((e) => {
      return mapTasks(e);
    });
  }

  return (
    <div className={classes.Tasks}>
      <CreateTask addTaskHandler={props.onAddTask} />
      <TaskNav
        tasksLeft={props.active}
        filterHandler={props.onDisplayFilteredTasks}
        currFilter={props.currFilter}
        deleteCompletedHandler={props.onClearCompleted}
      />
      <TransitionGroup component="ul" className={classes.Tasks__List}>
        {singleTask}
      </TransitionGroup>
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
    onClearCompleted: () => dispatch(actions.clearCompleted()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
