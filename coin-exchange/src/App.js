import AccountBalance from './Components/AccountBalance/AccountBalance';
import React from 'react';
import AppHeader from './Components/AppHeader/AppHeader';
import CoinList from './Components/CoinList/CoinList';
import styled from 'styled-components';

const AppStyle = styled.div`
text-align: center;
`;


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

    this.handleRefresh = this.handleRefresh.bind(this);

  }

  handleRefresh(valueChangedTicker){
    // const coin = this.state.coinData.find(({ticker}) => ticker === valueChangedTicker);
    // console.log(coin);

    const newCoinData = this.state.coinData.map( ({ticker, name, price})=> {
      let newPrice = price;

      if(valueChangedTicker === ticker){
        const randomPercentage = 0.995 + Math.random() * 0.01;

        newPrice = (price * randomPercentage);

      }
      return{
        ticker,
        name,
        price: newPrice
      }
    })

    this.setState({ coinData: newCoinData});
  }

  render() {
    return (
      <AppStyle>
        <AppHeader />
        <AccountBalance amount={this.state.balance} />
        <CoinList coinData={this.state.coinData} handleRefresh={this.handleRefresh}/>
      </AppStyle>
    );
  }

}

export default App;

