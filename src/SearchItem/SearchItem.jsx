import React, { Component } from 'react';

class SearchItem extends Component {
  handleClick = () => {
    this.props.selectShortcut(this.props.search.shortcut);
  };
  
  render = () => {
    const s = this.props.search;
    const style = {};
    if (this.props.isExactMatch) {
      style.background = 'lightgreen';
    }
    return (
      <li style={style}
          onClick={this.handleClick}>
        <img alt=""
             src={`/${s.icon}`}
             style={{width: '32px', height: '32px', marginRight: '10px'}}/>
        <b style={{marginRight: '10px'}}>{s.shortcut}</b>
        <span>{s.description}</span>
      </li>
    );
  }
}

export default SearchItem;
