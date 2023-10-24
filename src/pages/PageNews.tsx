import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNewsData } from '../redux/actions/newsAction';
import Loading from '../components/Loading';

function PageNews() {
  const dispatch = useDispatch();
  const news = useSelector((state: any) => state.news);
  const isLoading = useSelector((state: any) => state.news.isLoading);

  useEffect(() => {
    dispatch(fetchNewsData() as any);
  }, [dispatch]);

  return (
    <div>
      <h1>Notícias do IBGE</h1>
      {isLoading && <Loading />}
      {news && (
        <ul>
          {news.items.map((item: any) => (
            <li key={ item.id }>
              <h2>{item.titulo}</h2>
              <p>{item.introducao}</p>
              <a href={ item.link }>Leia mais...</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PageNews;
