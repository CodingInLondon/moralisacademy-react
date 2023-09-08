import AccountBalance from './Components/AccountBalance/AccountBalance';
import React from 'react';
import AppHeader from './Components/AppHeader/AppHeader';
import CoinList from './Components/CoinList/CoinList';
import styled from 'styled-components';
import axios from 'axios';


const AppStyle = styled.div`
text-align: center;
`;


const COINT_COUNT = 15;


class App extends React.Component {

  state={
    showBalance: true,
    balance: 10000,
    coinData: [
    ]
  }


  componentDidMount = async ()=>{ 

    try{

      const response = await axios.get('https://api.coinpaprika.com/v1/tickers');
      const topCoins = response.data.slice(0, COINT_COUNT).map( coin => coin.id); // Get the top 5 coins
      const tickerurl = "https://api.coinpaprika.com/v1/tickers/";

      const promises = topCoins.map( async (coin) => { return axios.get(tickerurl + coin); });
      const responses = await Promise.all(promises);

      const newCoinData = responses.map( response =>
        {
          const coin = response.data;
          return{
            id: coin.id,
            name: coin.name,
            ticker: coin.symbol,
            price: coin.quotes.USD.price,
            balance: 0
          };
        }
      );


      this.setState({ coinData: newCoinData});

    }
    catch(error){
      console.log(error);
    }

  }


  handleRefresh = async(id)=> {

    console.log('handleRefresh', id);

    async function getNewPrice(id){
      const tickerurl = `https://api.coinpaprika.com/v1/tickers/${id}`;

      try{
        const response = await axios.get(tickerurl);
        const coin = response.data;
        return coin.quotes.USD.price;
      }
      catch(error){
        console.log(error);
      }

    }

    const newCoinDataPromises = this.state.coinData.map( async (values)=> { 

      const newValues = { ...values};

      if(id === values.id){

        const newPrice = await getNewPrice(id);
        console.log("newPrice", newPrice);

        newValues.price = newPrice;

      }
      return newValues;
      
    })

    const newCoinData = await Promise.all(newCoinDataPromises);

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
        <AccountBalance showBalance={this.showBalance} amount={this.state.balance}  handleHideBalance={this.handleHideBalance}/>
        <CoinList showBalance={this.showBalance} coinData={this.state.coinData} handleRefresh={this.handleRefresh}/>
      </AppStyle>
    );
  }

}

export default App;

