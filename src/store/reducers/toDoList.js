import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  toDoList: [],
};

const initToDoListStart = (state, action) => {
  return {
    ...state,
    loading: true,
  };
};
const initToDoListFail = (state, action) => {
  return {
    ...state,
    loading: false,
  };
};

const setToDoList = (state, action) => {
  return {
    ...state,
    toDoList: action.toDoList,
    loading: false,
  };
};

export const addTask = (state, action) => {
  const toDoList = [...state.toDoList];
  const task = {
    completed: false,
    id: Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
      .substr(2, 10),
    title: action.task,
  };
  toDoList.unshift(task);
  return {
    ...state,
    toDoList: toDoList,
  };
};

export const removeTask = (state, action) => {
  let currentToDoList = [...state.toDoList];
  currentToDoList.splice(
    currentToDoList.findIndex((id) => id.id === action.id),
    1
  );
  return {
    ...state,
    toDoList: currentToDoList,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TODOLIST:
      return setToDoList(state, action);
    case actionTypes.INIT_TODOLIST_FAIL:
      return initToDoListFail(state, action);
    case actionTypes.INIT_TODOLIST_START:
      return initToDoListStart(state, action);
    case actionTypes.ADD_TASK:
      return addTask(state, action);
    case actionTypes.REMOVE_TASK:
      return removeTask(state, action);
    default:
      return state;
  }
};

export default reducer;
