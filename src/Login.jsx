import { useState } from 'react';
import {Link} from 'react-router-dom'
import './App.css';

function Login({ arr }) {
  let [name, setName] = useState('');
  let [year, setYear] = useState('');
  let [description, setDescription] = useState('');

  const handlerChangeName = (ev) => {
    setName(ev.target.value);
  };
  const handlerChangeYear = (ev) => {
    setYear(ev.target.value);
  };
  const handlerChangeDescription = (ev) => {
    setDescription(ev.target.value);
  };

  const handlerSubmit = (ev) => {
    ev.preventDefault();
    let id = arr[arr.length - 1].id
    let newCoin = {id: ++id, name: name, year: +year, description: description}
    arr.push(newCoin)
  };

  return (
    <div className="App">
        <form onSubmit={handlerSubmit}>
          <input placeholder='NAME' onChange={handlerChangeName} type="text" />
          <input placeholder='YEAR' onChange={handlerChangeYear}/>
          <input placeholder='DESCRIPTION' onChange={handlerChangeDescription} type="text" />
          <button>ADD</button>
        </form>
        
        <Link to='/'>MAIN PAGE</Link>
    </div>
  );
}

export default Login;
