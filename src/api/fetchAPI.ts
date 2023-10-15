const API_ENDPOINT = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100';

const fetchAPI = async () => {
  try {
    const response = await fetch(API_ENDPOINT);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(`An error occurred while fetching data: ${error.message}`);
  }
};

export default fetchAPI;
