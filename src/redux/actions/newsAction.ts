import { Dispatch } from 'redux';
import fetchAPI from '../../api/fetchAPI';

export const fetchNewsData = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: 'FETCH_NEWS_REQUEST' });

    try {
      const data = await fetchAPI();
      dispatch({ type: 'FETCH_NEWS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_NEWS_FAILURE', payload: error });
    }
  };
};
