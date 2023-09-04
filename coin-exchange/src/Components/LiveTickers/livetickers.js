import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const CoinTable = styled.table`
margin: 50px auto 50px auto;
text-align: left;
`;

const Tr = styled.tr`
  border: 1px solid #ccc;
  background-color: #f7f7f7;
  color: #333;
  font-size: 14px;f
  font-weight: 500;
  text-align: center;
  transition: all 0.3s ease-in-out;

  &:nth-child(odd) {
    background-color: #e9f8ff;
  }

  &:hover {
    background-color: #d6e8ff;
    border-color: #aaa;
  }

  td{
    padding: 5px;
  }

  td:first-child {
    text-align: left;
    padding-left: 10px;
  }

  td:nth-child(2) {
    text-align: left;

  }

  td:nth-child(3) {
    text-align: centre;

  }

  td:nth-child(4) {
    text-align: right;

  }

`;



function LiveTickers() {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

      async function getCoins(){ 

        try{
    
          const responses = await Promise.all([
              axios.get('https://api.coinpaprika.com/v1/tickers/btc-bitcoin'),
              axios.get('https://api.coinpaprika.com/v1/tickers/eth-ethereum'),
              axios.get('https://api.coinpaprika.com/v1/tickers/usdt-tether'),
              axios.get('https://api.coinpaprika.com/v1/tickers/bnb-binance-coin'),
              axios.get('https://api.coinpaprika.com/v1/tickers/xrp-xrp')]
          )

          const coins = responses.map( response => response.data);

          setCoins(coins);
          setLoading(false);

        }
        catch(error){
          
          setError(error);
          setLoading(false);        
        }
      }

      getCoins();


    }, []);


    if (loading) return <div>Loading... It will be just a moment.</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <CoinTable>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Ticker</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {coins.map(coin => (
                        <Tr key={coin.id}>
                            <td>#{coin.rank}</td>
                            <td>{coin.name}</td>
                            <td>{coin.symbol}</td>
                            <td>{parseFloat(coin.quotes.USD.price).toFixed(2)}</td>
                        </Tr>
                    ))}
                </tbody>
            </CoinTable>
        </div>
    );
}

export default LiveTickers;
