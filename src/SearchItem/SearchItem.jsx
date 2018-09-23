import React, { Component } from 'react';
import './SearchItem.css';

class SearchItem extends Component {
  handleClick = () => {
    this.props.selectShortcut(this.props.search.shortcut);
  };

  render = () => {
    const s = this.props.search;
    const classNameMatched = this.props.isExactMatch ? ' SearchItem_matched' : '';
    return (
      <li className={`SearchItem${classNameMatched}`}
          onClick={this.handleClick}>
        <div className="SearchItem__image-and-shortcut">
          <div className="SearchItem__image-wrapper">
            <img className="SearchItem__image"
                 src={`/${s.icon}`}
                 alt={s.shortcut} />
          </div>
          <div className="SearchItem__shortcut">{s.shortcut}</div>
        </div>
        <div className="SearchItem__description">{s.description}</div>
      </li>
    );
  }
}

export default SearchItem;
