import React, { Component } from 'react';
import Logo from './tool.svg'; 
import bg from '../static/images/header-bg.jpg';

class App extends Component {
   render() {

      return (
         <div className="container">
            <Logo width="10%"/>
            <img className="header-bg" src={bg} alt="background"/>
            <h1 className="heading">React Starter kit</h1>
         </div>
      );
   }
}

export default App; 