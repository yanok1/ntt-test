import axios from 'axios';
import { FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE, PAGE_MODIFIER } from "../constants.js";

export const fetchMovies = (query, currentPage) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost/api/movies?s=${query}&page=${currentPage}`);
    dispatch({ type: FETCH_MOVIES_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_MOVIES_FAILURE, payload: error.message });
  }
};

export const pageModifier = (currentPage) => async (dispatch) =>
  dispatch({ type: PAGE_MODIFIER, payload: currentPage })


