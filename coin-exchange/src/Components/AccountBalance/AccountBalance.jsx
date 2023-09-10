
import React from 'react';
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

 
export default function AccountBalance(props){


    const handleClick = (event) => {
        event.preventDefault();

        props.handleHideBalance();

    }

    const buttonText = props.showBalance ? 'Hide Balance': 'Show Balance';

    return (
        <Section>
          <form action="#" method="POST">
            <button onClick={handleClick}>{buttonText}</button>
          </form>
          {props.showBalance && (
            <span style={{ marginLeft: '1rem' }}>Balance: ${props.amount}</span>
          )}
        </Section>
      );

}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
  }
  
  