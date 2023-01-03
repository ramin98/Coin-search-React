import { Link } from 'react-router-dom';
import './App.css';

function Coin({ arr, obj, getCoin }) {
  return (
    <div className="App">
      <Link to='/'>MAIN PAGE</Link>
      <div to='/coin' className="coin">
                <p>{obj.name}</p>
                <p>{obj.year}</p>
                <p>{obj.description}</p>
      </div>
      <div className="coin-div">
        {arr
          .filter((item) => item.name === obj.name && (item.year !== obj.year || item.description !== obj.description))
          .map((item) => {
            return (
              <Link key={item.id} to='/coin' className="coin" onClick={() => getCoin(item.id)}>
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

export default Coin;