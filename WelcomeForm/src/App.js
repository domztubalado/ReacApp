import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state ={
    name:""
  };
  
  cName = (event)=>
  {
    var inputName = event.target.value;
    
    this.setState({
      name:inputName
          })
        
  };
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello Welcome to REACT-APP - {this.state.name}</h2>
          <h5>hosted by domzdot_reactapp</h5>
        </div>
        <p className="App-intro">
          <h5>Feel free to comment.</h5>
            <form>
              Enter your name: <input type="text" onChange={this.cName}/>          
           </form>
        </p>
      </div>
    );
  }
}

export default App;
