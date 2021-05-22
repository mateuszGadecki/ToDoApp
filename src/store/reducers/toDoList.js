import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  toDoList: [],
  completed: [],
  active: [],
  currFilter: "All",
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
  const filtered = filterTasks(action.toDoList);
  return {
    ...state,
    toDoList: action.toDoList,
    loading: false,
    completed: filtered.completed,
    active: filtered.active,
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
  const filtered = filterTasks(toDoList);
  return {
    ...state,
    toDoList: toDoList,
    completed: filtered.completed,
    active: filtered.active,
  };
};

export const removeTask = (state, action) => {
  let currentToDoList = [...state.toDoList];
  currentToDoList.splice(
    currentToDoList.findIndex((id) => id.id === action.id),
    1
  );
  const filtered = filterTasks(currentToDoList);
  return {
    ...state,
    toDoList: currentToDoList,
    completed: filtered.completed,
    active: filtered.active,
  };
};

export const completedTask = (state, action) => {
  let currentToDoList = [...state.toDoList];
  const index = currentToDoList.findIndex((id) => id.id === action.id);
  currentToDoList[index].completed = action.completionStatus;
  const filtered = filterTasks(currentToDoList);
  return {
    ...state,
    toDoList: currentToDoList,
    completed: filtered.completed,
    active: filtered.active,
  };
};

export const filterTasks = (tasks) => {
  let completed = [];
  let active = [];
  tasks.forEach((e) => {
    if (e.completed) {
      completed.push(e);
    }
  });
  tasks.forEach((e) => {
    if (!e.completed) {
      active.push(e);
    }
  });

  return {
    completed: completed,
    active: active,
  };
};

const displayFilteredTasks = (state, action) => {
  return {
    ...state,
    currFilter: action.currFilter,
  };
};

const clearCompleted = (state, action) => {
  const activeTasks = [...state.active];
  return {
    ...state,
    toDoList: activeTasks,
    completed: [],
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
    case actionTypes.COMPLETED_TASK:
      return completedTask(state, action);
    case actionTypes.DISPLAY_FILTERED_TASKS:
      return displayFilteredTasks(state, action);
    case actionTypes.CLEAR_COMPLETED:
      return clearCompleted(state, action);
    default:
      return state;
  }
};

export default reducer;
