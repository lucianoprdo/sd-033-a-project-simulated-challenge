const API_ENDPOINT = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100';

const fetchAPI = () => {
  return fetch(API_ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default fetchAPI;
