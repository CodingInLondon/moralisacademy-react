
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    padding: 1.5rem 0 1.5rem 4rem;
    color: grey;
    font-weight: bold;
    color: #333; 
    text-align: left;
    border-radius: 10px;
    background-color: #f5f5f5;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

 
export default class AccountBalance extends Component{

    render(){
        return(
            <Section>
                Balance: ${this.props.amount}
            </Section>
        );
    }

}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
  }
  
  