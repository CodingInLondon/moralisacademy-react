import logo from './logo.svg'; 
import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
background-color: #282c34;
min-height: 20vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
font-size: 36px;
color: white;
`;


const Logo = styled.img`
height: 8rem;
pointer-events: none;
animation: App-logo-spin infinite 20s linear;
@keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }  
`;

const AppTitle = styled.h1`
font-size: 4rem;
`;


export default class AppHeader extends React.Component{

    render(){
        return(
            <Header>
                <Logo src={logo} alt="React logo" />
                <AppTitle >Coin Exchange </AppTitle>
            </Header>
        );
    }
}