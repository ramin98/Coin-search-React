import { useState } from 'react';
import {Link} from 'react-router-dom'
import './App.css';

function Main({ arr, getCoin }) {
  let [inputValue, setInputValue] = useState('');
  let [value, setValue] = useState('');

  const handlerChange = (ev) => {
    setInputValue(ev.target.value);
  };

  const handlerSubmit = (ev) => {
    ev.preventDefault();
    setValue(inputValue)
  };

  return (
    <div className="App">
      <ul>
        <li>USA's</li>
        <li>Canada's</li>
        <li>Russia's</li>
        <li>Azerbaijan's</li>
        <li>Iran's</li>
      </ul>
      <h2>Coins</h2>
      <div className="nav">
        <form onSubmit={handlerSubmit}>
          <input onChange={handlerChange} type="text" />
          <button>SEARCH</button>
        </form>
        <Link to='/login'>LOG IN</Link>
      </div>
      <div className="coin-div">
        {arr
          .filter((item) => item.name === value)
          .map((item) => {
            return (
              <Link key={item.id} to='/coin' onClick={() => getCoin(item.id)} className="coin">
                <p>{item.name}</p>
                <p>{item.year}</p>
                <p>{item.description}</p>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default Main;
