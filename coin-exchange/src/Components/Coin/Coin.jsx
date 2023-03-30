
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Tr = styled.tr`
border: 1px solid #ccc;
background-color: #f7f7f7;
color: #333;
font-size: 14px;
font-weight: 500;
text-align: center;
transition: all 0.3s ease-in-out;


&:hover {
  background-color: #e7e7e7;
  border-color: #aaa;
}

td:first-child {
  text-align: left;
  padding-left: 10px;
}

td:last-child {
  padding-right: 10px;

  button {
    background-color: #6c757d;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 6px 12px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #555;
    }
  }
}

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


