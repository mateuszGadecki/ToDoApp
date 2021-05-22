import * as actionTypes from "./actionTypes";

export const setToDoList = (toDoList) => {
  return {
    type: actionTypes.SET_TODOLIST,
    toDoList: toDoList,
  };
};

export const initToDoListFail = (error) => {
  return {
    type: actionTypes.INIT_TODOLIST_FAIL,
    error: error,
  };
};

export const initToDoListStart = () => {
  return {
    type: actionTypes.INIT_TODOLIST_START,
  };
};

export const addTask = (task) => {
  return {
    type: actionTypes.ADD_TASK,
    task: task,
  };
};

export const removeTask = (id) => {
  return {
    type: actionTypes.REMOVE_TASK,
    id: id,
  };
};

export const completedTask = (id, completionStatus) => {
  return {
    type: actionTypes.COMPLETED_TASK,
    id: id,
    completionStatus: completionStatus,
  };
};

export const displayFilteredTasks = (currFilter) => {
  return {
    type: actionTypes.DISPLAY_FILTERED_TASKS,
    currFilter: currFilter,
  };
};

export const initToDoList = () => {
  return (dispatch) => {
    dispatch(initToDoListStart());
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((response) => {
        dispatch(setToDoList(response));
      })
      .catch((error) => {
        dispatch(initToDoListFail(error));
        console.log(error);
      });
  };
};
