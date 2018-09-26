import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchItem.css';


class SearchItem extends Component {
  handleClick = () => {
    if (this.props.isExactMatch) {
      this.props.openUrl();
    }
    else {
      this.props.selectShortcut(this.props.search.shortcut);
    }
  };

  render = () => {
    const s = this.props.search;

    const classes = ['SearchItem'];
    if (this.props.isExactMatch) classes.push('SearchItem_matched');
    const className = classes.join(' ');

    return (
      <li className={className}
          onClick={this.handleClick}>
        <div className="SearchItem__image-and-shortcut">
          <div className="SearchItem__image-wrapper">
            <img className="SearchItem__image"
                 src={`./img/icons/${s.icon}`}
                 alt={s.shortcut} />
          </div>
          <div className="SearchItem__shortcut">{s.shortcut}</div>
        </div>
        <div className="SearchItem__description-and-arrow">
          <div className="SearchItem__description">{s.description}</div>
          <div className="SearchItem__arrow"></div>
        </div>
      </li>
    );
  }
}

SearchItem.propTypes = {
  search: PropTypes.object.isRequired,
  isExactMatch: PropTypes.bool.isRequired,
  selectShortcut: PropTypes.func.isRequired,
  openUrl: PropTypes.func.isRequired,
};


export default SearchItem;
