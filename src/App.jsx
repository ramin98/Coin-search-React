import { useState } from 'react';
import Main from './MainPage';
import Coin from './Coin';
import Login from './Login';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  let [arr] = useState([
    { id: 1, name: 'Canada', year: 1888, description: 'Gold' },
    { id: 2, name: 'USA', year: 1887, description: 'Gold' },
    { id: 3, name: 'Russia', year: 1886, description: 'Silver' },
    { id: 4, name: 'Iran', year: 1885, description: 'Silver' },
    { id: 5, name: 'Azerbaijan', year: 1884, description: 'Gold' },
    { id: 6, name: 'Canada', year: 1883, description: 'Gold' },
    { id: 7, name: 'USA', year: 1882, description: 'Silver' },
    { id: 8, name: 'Russia', year: 1881, description: 'Silver' },
    { id: 9, name: 'Iran', year: 1889, description: 'Silver' },
    { id: 10, name: 'Azerbaijan', year: 1878, description: 'Gold' },
  ]);

  let [obj, setObj] = useState();

  const getCoin = (id) => {
    setObj(arr.find((item) => item.id === id));
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main arr={arr} getCoin={getCoin} />} />
          <Route path="/coin" element={<Coin arr={arr} obj={obj} getCoin={getCoin} />}/>
          <Route path="/login" element={<Login arr={arr} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
