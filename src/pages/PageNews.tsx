import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NewsIBGE } from '../types';
import { fetchNewsData } from '../redux/actions/newsAction';

function PageNews() {
  const dispatch = useDispatch();
  const [news, setNews] = useState<NewsIBGE>();
  const isLoading = useSelector((state) => state.news.isLoading);

  useEffect(() => {
    fetchNewsData()(dispatch);
  }, []);

  return (
    <div>
      <h1>Notícias do IBGE</h1>
      {isLoading && <div>Carregando...</div>}
      {news && (
        <ul>
          {news.items.map((item) => (
            <li key={ item.id }>
              <h2>{item.titulo}</h2>
              <p>{item.introducao}</p>
              <a href={ item.link }>Leia mais</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PageNews;
