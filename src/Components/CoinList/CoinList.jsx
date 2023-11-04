
import React from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const CoinTable = styled.table`
margin: 50px auto 50px auto;
text-align: left;
`;

export default function CoinList(props){

    return(
    <CoinTable>
        <thead>
            <tr>
                <th>Name</th>
                <th>Ticker</th>
                <th>Price</th>
                <th>Balance</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>

            {
                // console.log(this.props.coinData);

                props.coinData.map( ({id, name, ticker, price, balance} ) => 
                    <Coin 
                    key={id}
                    id={id}
                    name={name}
                    price={price}
                    ticker={ticker}
                    balance={balance}
                    showBalance={props.showBalance}
                    handleRefresh={props.handleRefresh}
                    />
                )
            }

        </tbody>
    </CoinTable>
    );

}



 