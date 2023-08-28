import AccountBalance from './Components/AccountBalance/AccountBalance';
import React from 'react';
import AppHeader from './Components/AppHeader/AppHeader';
import CoinList from './Components/CoinList/CoinList';
import styled from 'styled-components';

import LiveTickers from './Components/LiveTickers/livetickers';


const AppStyle = styled.div`
text-align: center;
`;


class App extends React.Component {

  state={
    showBalance: true,
    balance: 10000,
    coinData: [
      {
        name: 'Bitcoin',
        ticker: 'BTC',
        price: 9999.98,
        balance: 0.5, // Example balance value
      },
      {
        name: 'Ethereum',
        ticker: 'ETH',
        price: 299.99,
        balance: 2.25, // Example balance value
      },
      {
        name: 'Tether',
        ticker: 'USDT',
        price: 1,
        balance: 100, // Example balance value
      },
      {
        name: 'Binance Coin',
        ticker: 'BNB',
        price: 450.5,
        balance: 10, // Example balance value
      },
      {
        name: 'Cardano',
        ticker: 'ADA',
        price: 2.05,
        balance: 50, // Example balance value
      },
      {
        name: 'Solana',
        ticker: 'SOL',
        price: 180.75,
        balance: 1.75, // Example balance value
      },
      {
        name: 'XRP',
        ticker: 'XRP',
        price: 0.85,
        balance: 500, // Example balance value
      },
      {
        name: 'Polkadot',
        ticker: 'DOT',
        price: 28.5,
        balance: 8, // Example balance value
      },
      {
        name: 'Dogecoin',
        ticker: 'DOGE',
        price: 0.22,
        balance: 1000, // Example balance value
      },
      {
        name: 'Avalanche',
        ticker: 'AVAX',
        price: 110.0,
        balance: 0.1, // Example balance value
      },
    ],
  }



  handleRefresh = (valueChangedTicker)=> {

    const newCoinData = this.state.coinData.map( (values)=> { 

      const newValues = { ...values};

      if(valueChangedTicker === values.ticker){
        const randomPercentage = 0.995 + Math.random() * 0.01;

        newValues.price *= randomPercentage;

      }
      return newValues;
      
    })

    this.setState({ coinData: newCoinData});
  }


  handleHideBalance = ()=>{

    this.showBalance = !this.showBalance;

    this.setState({showBalance: this.showBalance});
  }

  render() {
    return (
      <AppStyle>
        <AppHeader />
        <h2>Today's Cryptocurrency Prices by Market Cap</h2>
        <LiveTickers />
        <h2>My Portfolio</h2>
        <AccountBalance showBalance={this.showBalance} amount={this.state.balance}  handleHideBalance={this.handleHideBalance}/>
        <CoinList showBalance={this.showBalance} coinData={this.state.coinData} handleRefresh={this.handleRefresh}/>
      </AppStyle>
    );
  }

}

export default App;

