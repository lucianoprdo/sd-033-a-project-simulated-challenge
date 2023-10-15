import { combineReducers } from 'redux';

const initialState = {
  news: {},
};

const newsReducer = combineReducers({
  news: (state = {}, action) => {
    switch (action.type) {
      case 'LOAD_NEWS':
        return action.payload;
      case 'FETCH_NEWS_REQUEST':
        return {
          ...state,
          isLoading: true,
        };
      case 'FETCH_NEWS_SUCCESS':
        return {
          ...state,
          news: action.payload,
          isLoading: false,
        };
      case 'FETCH_NEWS_FAILURE':
        return {
          ...state,
          error: action.payload,
          isLoading: false,
        };
      default:
        return state;
    }
  },
});

export default newsReducer;
