
import React from 'react';
import Coin from '../Coin/Coin';


export default class CoinList extends React.Component{


    render() {
        return(
        <table className='coin-table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Ticker</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>

                {this.props.coinData.map((coin) => (
                    <Coin key={coin.ticker} {...coin} />
                ))}

            </tbody>
        </table>
        );
    }

}



