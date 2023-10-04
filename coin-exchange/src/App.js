import AccountBalance from './Components/AccountBalance/AccountBalance';
import React, { useEffect } from 'react';
import AppHeader from './Components/AppHeader/AppHeader';
import CoinList from './Components/CoinList/CoinList';
import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';


const AppStyle = styled.div`
text-align: center;
`;

const COINT_COUNT = 15;


function App(props)  {

  // state={
  //   showBalance: true,
  //   balance: 10000,
  //   coinData: [
  //   ]
  // }

  const [balance, setBalance] = useState(10000);
  const [showBalance, setShowBalance] = useState(true);
  const [coinData, setCoinData] = useState([]);


  const componentDidMount = async ()=>{ 

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

      setCoinData(newCoinData);

    }
    catch(error){
      console.log(error);
    }

  }


  useEffect( ()=>{  // componentDidMount  

    if(coinData.length === 0){
      componentDidMount();
    }
  }
  );


  const handleRefresh = async(id)=> {

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

    const newCoinDataPromises = coinData.map( async (values)=> { 

      const newValues = { ...values};

      if(id === values.id){

        const newPrice = await getNewPrice(id);
        console.log("newPrice", newPrice);

        newValues.price = newPrice;

      }
      return newValues;
      
    })

    const newCoinData = await Promise.all(newCoinDataPromises);

    setCoinData(newCoinData);
  }


  const handleHideBalance = ()=>{

    setShowBalance(!showBalance);
  }

  return (
    <AppStyle>
      <AppHeader />
      <h2>Today's Cryptocurrency Prices by Market Cap</h2>
      <AccountBalance showBalance={showBalance} amount={balance}  handleHideBalance={handleHideBalance}/>
      <CoinList showBalance={showBalance} coinData={coinData} handleRefresh={handleRefresh}/>
    </AppStyle>
  );

}

export default App;

