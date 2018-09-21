import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const searchItems = this.props.searches.map(s => {
      return (
        <li key={s.shortcut}>
          <img alt=""
               src={`/${s.icon}`}
               style={{width: '32px', height: '32px', marginRight: '10px'}}/>
          <b style={{marginRight: '10px'}}>{s.shortcut}</b>
          <span>{s.description}</span>
        </li>
      );
    });
    return (
      <div className="App">
        <ul>
          {searchItems}
        </ul>
      </div>
    );
  }
}

export default App;
