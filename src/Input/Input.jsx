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
    this.props.openUrl();
  };

  render = () => {
    const extraClassName = this.props.isBadQuery ? 'Input_bad' : 'Input_ok';
    return (
      <input ref={inp => this.input = inp}
             type="text"
             className={`Input ${extraClassName}`}
             value={this.props.query}
             onKeyPress={this.handleKeyPress}
             onChange={this.handleChange}
             autoFocus={true} />
    );
  };
}

export default Input;
