import './App.css';
import Coin from './Components/Coin/Coin.jsx';
import logo from './logo.svg'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="React logo" className='App-logo'/>
        <h1 className='App-title'>Coin Exchange </h1>
        <table className='coin-table'>
          <thead>
            <tr>
              <th>Lame</th>
              <th>Tickler</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <Coin name="Bitcoin" ticker="BTC" price={9999}/>
            <Coin name="Bitcoin" ticker="ETH" price="$299.99"/>
          </tbody>
        </table>



      </header>
    </div>
  );
}

export default App;

