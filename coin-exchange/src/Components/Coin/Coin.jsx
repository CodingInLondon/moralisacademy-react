
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Tr = styled.tr`
  border: 2px solid;
  border-color: black;
  width: 40%;
  text-align: left;
`;

export default class Coin extends Component {

  constructor(props){
    super(props);
    this.state = {
      price: this.props.price
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    event.preventDefault();

    const randomPercentage = 0.995 + Math.random() * 0.01;

    this.setState( (oldState)=>{
      return{
        price: oldState.price* randomPercentage
      };
    });

  }

  render() {
    return (
      <Tr>
        <td>{this.props.name}</td>
        <td>{this.props.ticker}</td>
        <td>${this.state.price}</td>
        <td>
          <form action="#" method="POST">
            <button onClick={this.handleClick}>Refresh</button>
          </form></td>
      </Tr>
    )
  }
}

Coin.propTypes = {
  name: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}


