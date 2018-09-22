import React, { Component } from 'react';
import './App.css';
import Input from './Input/Input';

class App extends Component {
  state = {
    query: ''
  };

  updateQuery = (query) => {
    this.setState({query});
  };

  render = () => {
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
        <h1 className="App__heading">Search by shortcuts</h1>
        <Input updateQuery={this.updateQuery.bind(this)}
               query={this.query} />
        <ul>
          {searchItems}
        </ul>
      </div>
    );
  };
}

export default App;
