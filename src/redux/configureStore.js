import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer from './books/books';

const reducer = combineReducers({ booksReducer });
const store = createStore(
  reducer,
  applyMiddleware(logger),
  applyMiddleware(thunk)
);
export default store;
