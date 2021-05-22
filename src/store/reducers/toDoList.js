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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TODOLIST:
      return setToDoList(state, action);
    case actionTypes.INIT_TODOLIST_FAIL:
      return initToDoListFail(state, action);
    case actionTypes.INIT_TODOLIST_START:
      return initToDoListStart(state, action);
    default:
      return state;
  }
};

export default reducer;
