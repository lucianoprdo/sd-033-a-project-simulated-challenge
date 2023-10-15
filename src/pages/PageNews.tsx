import { useState, useEffect } from 'react';
import { NewsIBGE } from '../types';
import fetchAPI from '../api/fetchAPI';

function PageNews() {
  const [news, setNews] = useState<NewsIBGE>();

  useEffect(() => {
    fetchAPI().then((data: any) => {
      setNews(data);
    });
  }, []);

  return (
    <div>
      <h1>Notícias do IBGE</h1>
      {news && (
        <ul>
          {news.items.map((item: any) => (
            <li key={ item.id }>
              <h2>{item.titulo}</h2>
              <p>{item.introdução}</p>
              <a href={ item.link }>Leia mais</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PageNews;
