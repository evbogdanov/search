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
    return (
      <input ref={inp => this.input = inp}
             type="text"
             className="Input"
             style={{background: this.props.background}}
             value={this.props.query}
             onKeyPress={this.handleKeyPress}
             onChange={this.handleChange}
             autoFocus={true} />
    );
  };
}

export default Input;
