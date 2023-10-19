import { AnyAction } from 'redux';

const initialState = {
  news: {},
  isLoading: false,
  error: null,
};

const newsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
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
};

export default newsReducer;
