import './App.css';
import AccountBalance from './Components/AccountBalance/AccountBalance';
import logo from './logo.svg'; 
import React from 'react';
import CoinList from './Components/CoinList/CoinList';


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
        <CoinList coinData={this.state.coinData} />

      </div>
    );
  }

}

export default App;

