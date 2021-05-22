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

export const initToDoList = () => {
  return (dispatch) => {
    dispatch(initToDoListStart());
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((response) => {
        dispatch(setToDoList(response));
        console.log(response);
      })
      .catch((error) => {
        dispatch(initToDoListFail(error));
        console.log(error);
      });
  };
};
