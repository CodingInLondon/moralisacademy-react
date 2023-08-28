
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    padding: 1.5rem 0 1.5rem 4rem;
    color: grey;
    font-weight: bold;
    color: #333; 
    text-align: left;
    display: flex; /* Add this line */
    align-items: center; /* Add this line */    
`;

 
export default class AccountBalance extends Component{


    handleClick = (event) => {
        event.preventDefault();

        this.props.handleHideBalance();

    }

    render(){
        const buttonText = this.props.showBalance ? 'Hide Balance': 'Show Balance';

        return (
            <Section>
              <form action="#" method="POST">
                <button onClick={this.handleClick}>{buttonText}</button>
              </form>
              {this.props.showBalance && (
                <span style={{ marginLeft: '1rem' }}>Balance: ${this.props.amount}</span>
              )}
            </Section>
          );
          
        
    }

}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
  }
  
  