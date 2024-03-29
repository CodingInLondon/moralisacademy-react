
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FiEyeOff } from 'react-icons/fi';



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

  td:first-child {
    text-align: left;
    padding-left: 10px;
  }

  td:nth-child(3) {
    text-align: right;
    
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

const CenteredIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;


export default function Coin(props)  {


  const handleClick = (event) => {
    event.preventDefault();

    props.handleRefresh(props.id);

  }

  return (
    <Tr>
      <td>{props.name}</td>
      <td>{props.ticker}</td>
      <td>{props.price.toFixed(2)}</td>
      <td>{props.showBalance ? `$${props.balance}` :             
        <CenteredIcon>
          <FiEyeOff />
        </CenteredIcon>}</td>        
      <td>
        <form action="#" method="POST">
          <button onClick={handleClick}>Refresh</button>
        </form>
      </td>
    </Tr>
  )
}

Coin.propTypes = {
  name: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired
}


