import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import  Button  from  '@material-ui/core/Button'
import { ListaView } from './components/ListaView.jsx'
export default class App extends Component{
  render(){
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Button variant="contained" color="primary">Hello Word</Button>
      <ListaView></ListaView>
    </div>
    )
  }
}

