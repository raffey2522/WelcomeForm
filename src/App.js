import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state ={
    name: ""
  };
  
  utrohon = (event) =>{
    var inputName = event.target.value;
    this.setState({
      name: inputName
    });
  };
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React : {this.state.name}</h2>
        </div>
        <p className="App-intro">
        <form>
        Enter yout Name:
        <input type="text" onChange={this.utrohon}/>
        </form>
           <code></code>
        </p>
      </div>
    );
  }
}

export default App;
