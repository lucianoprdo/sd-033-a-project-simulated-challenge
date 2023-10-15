import { Dispatch } from 'redux';
import { fetchAPI } from '../../api/fetchAPI';

// Defina ação assíncrona para buscar dados
export const fetchNewsData = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: 'FETCH_NEWS_REQUEST' }); // Dispare uma ação para indicar que a busca está em andamento

    try {
      const data = await fetchAPI();
      dispatch({ type: 'FETCH_NEWS_SUCCESS', payload: data }); // Dispare uma ação para indicar o sucesso e envie os dados
    } catch (error) {
      dispatch({ type: 'FETCH_NEWS_FAILURE', payload: error }); // Dispare uma ação em caso de erro
    }
  };
};
