// newsAction.ts
import { Dispatch } from 'redux';
import fetchAPI from '../../api/fetchAPI';

export interface FetchNewsRequestAction {
  type: 'FETCH_NEWS_REQUEST';
}

export interface FetchNewsSuccessAction {
  type: 'FETCH_NEWS_SUCCESS';
  payload: any; // Definir o tipo apropriado para os dados
}

export interface FetchNewsFailureAction {
  type: 'FETCH_NEWS_FAILURE';
  payload: any; // Definir o tipo apropriado para o erro
}

export type NewsAction =
  | FetchNewsRequestAction
  | FetchNewsSuccessAction
  | FetchNewsFailureAction;

export const fetchNewsData = () => {
  return async (dispatch: Dispatch<NewsAction>) => {
    dispatch({ type: 'FETCH_NEWS_REQUEST' });

    try {
      const data = await fetchAPI();
      dispatch({ type: 'FETCH_NEWS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_NEWS_FAILURE', payload: error });
    }
  };
};
