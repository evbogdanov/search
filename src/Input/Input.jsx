import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
  handleChange = (event) => {
    const query = event.target.value;
    this.props.updateQuery(query);
  };

  handleKeyPress = (event) => {
    if (event.key !== 'Enter') {
      return;
    }
    console.log('ENTER!');
    // window.open('http://...');
  };

  render = () => {
    return (
      <input type="text"
             className="Input"
             value={this.props.query}
             onKeyPress={this.handleKeyPress}
             onChange={this.handleChange} />
    );
  };
}

export default Input;
