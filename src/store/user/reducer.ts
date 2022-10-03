import { DELETE_USER_DATA, RESET_USER_ERROR, SET_USER_DATA, USER_DATA_FAILED, USER_DATA_LOADING } from "../ActionTypes";

const INITIAL_STATE = {
  isLoading: false,
  error: null,
  isLoggedIn: false,
  data: {},
};

export const User = (state = INITIAL_STATE, action:any) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, isLoading: false, error: null, isLoggedIn: true, data: action.payload };
    case USER_DATA_LOADING:
      return { ...state, isLoading: true, error: null, isLoggedIn: false, data: {} };
    case USER_DATA_FAILED:
      return { ...state, isLoading: false, error: action.payload };
    case DELETE_USER_DATA:
      return { ...state, isLoading: false, error: null, isLoggedIn: false, data: {} };
    case RESET_USER_ERROR:
      return { ...state, error: null, isLoading: false };
    default:
      return state;
  }
}
