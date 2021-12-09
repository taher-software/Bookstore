import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer from './books/books';

const reducer = combineReducers({ booksReducer });
const middlewares = [logger, thunk];
const middlewareEnhancer = applyMiddleware(...middlewares);
const store = createStore(
  reducer,
  middlewareEnhancer,
);
export default store;
