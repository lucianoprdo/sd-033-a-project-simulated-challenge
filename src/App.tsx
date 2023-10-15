import { Route, Routes } from 'react-router-dom';
import PageNews from './pages/PageNews';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <PageNews /> } />
    </Routes>
  );
}

export default App;
