
import React from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';



const CoinTable = styled.table`
margin: 50px auto 50px auto;
text-align: left;
`;




export default class CoinList extends React.Component{

    render() {
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
                    this.props.coinData.map( ({name, ticker, price, balance} ) => 
                        <Coin key={ticker}
                        name={name}
                        price={price}
                        ticker={ticker}
                        balance={balance}
                        showBalance={this.props.showBalance}
                        handleRefresh={this.props.handleRefresh}
                        />
                    )
                }

            </tbody>
        </CoinTable>
        );
    }

}



 