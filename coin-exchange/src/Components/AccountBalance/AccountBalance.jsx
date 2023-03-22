
import React, { Component } from 'react';
import './AccountBalance.css'
import PropTypes from 'prop-types';
 
export default class AccountBalance extends Component{

    render(){
        return(
            <section className='balance'>
                Balance: ${this.props.amount}
            </section>
        );
    }

}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
  }
  
  