
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
    display: flex; /* Add this line */
    align-items: center; /* Add this line */    
`;

 
export default class AccountBalance extends Component{

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
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
          
          

        // if (this.props.showBalance){
        //     return(
        //         <Section>
        //             Balance: ${this.props.amount}
        //             <form action="#" method="POST">
        //                 <button onClick={this.handleClick}>{buttonText}</button>
        //             </form>
        //         </Section>
        //     );
        // }
        // else{
        //     return(
        //         <Section>
        //             <form action="#" method="POST">
        //                 <button onClick={this.handleClick}>{buttonText}</button>
        //             </form>
        //         </Section>
        //     );
        // };
    }

}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
  }
  
  