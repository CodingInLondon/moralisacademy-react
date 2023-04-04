import './App.css';
import Coin from './Components/Coin/Coin.jsx';
import AccountBalance from './Components/AccountBalance/AccountBalance.jsx';
import logo from './logo.svg'; 
import React from 'react';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      balance: 10000,
      coinData: [
        {
          name: 'Bitcoin',
          ticker: 'BTC',
          price: 9999.98
        },
        {
          name: 'Ethereum',
          ticker: 'ETH',
          price: 299.99
        },
        {
          name: 'Tether',
          ticker: 'USDT',
          price: 1
        },
        {
          name: 'Binance Coin',
          ticker: 'BNB',
          price: 450.50
        },
        {
          name: 'Cardano',
          ticker: 'ADA',
          price: 2.05
        },
        {
          name: 'Solana',
          ticker: 'SOL',
          price: 180.75
        },
        {
          name: 'XRP',
          ticker: 'XRP',
          price: 0.85
        },
        {
          name: 'Polkadot',
          ticker: 'DOT',
          price: 28.50
        },
        {
          name: 'Dogecoin',
          ticker: 'DOGE',
          price: 0.22
        },
        {
          name: 'Avalanche',
          ticker: 'AVAX',
          price: 110.00
        }

      ]
    }

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="React logo" className='App-logo' />
          <h1 className='App-title'>Coin Exchange </h1>
        </header>
        <AccountBalance amount={this.state.balance} />
        <table className='coin-table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Ticker</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>

            {this.state.coinData.map((coin) => (
              <Coin key={coin.ticker} {...coin} />
            ))}

            {/* <Coin name="Bitcoin" ticker="BTC" price={900} />
            <Coin name="Ethereum" ticker="ETH" price={299.99} />
            <Coin name="Tether" ticker="USDT" price={1} /> */}
          </tbody>
        </table>
      </div>
    );
  }

}

export default App;

