import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import newsReducer from './reducers/newsReducer';

const reducer = combineReducers({
  news: newsReducer,
});

const store = legacy_createStore(reducer, applyMiddleware(thunk));

export default store;
