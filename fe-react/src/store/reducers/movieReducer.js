import { FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE, PAGE_MODIFIER } from "../constants";

const initialState = {
  movies: [],
  page: 1,
  error: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return { ...state, movies: action.payload, error: null };
    case FETCH_MOVIES_FAILURE:
      return { ...state, movies: [], error: action.payload };
    case PAGE_MODIFIER:
      return { ...state, page: action.payload, error: null };
    default:
      return state;
  }
};

export default movieReducer;