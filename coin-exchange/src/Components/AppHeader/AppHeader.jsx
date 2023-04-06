import logo from './logo.svg'; 
import React from 'react';



export default class AppHeader extends React.Component{


    render(){
        return(
            <header className="App-header">
            <img src={logo} alt="React logo" className='App-logo' />
            <h1 className='App-title'>Coin Exchange </h1>
          </header>
        );
    }
}