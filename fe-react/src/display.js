import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import movieReducer from './store/reducers/movieReducer';

const display = configureStore({ reducer: movieReducer, middleware: () => [thunk] });

export default display;