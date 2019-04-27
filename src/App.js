import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
	 const text = 'Hello React!'
    return (
	<>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
		<h2>React Practice</h2>
		<p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
			<p>{text}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
	</>
    );
  }
}

export default App;
