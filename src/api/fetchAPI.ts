const API_ENDPOINT = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100';

const fetchAPI = async () => {
  const response = await fetch(API_ENDPOINT)
    .catch((error) => {
      console.error('Erro na requisição de API:', error);
      throw error;
    });

  if (!response.ok) {
    // Lidar com erros de HTTP
    throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};

export default fetchAPI;
