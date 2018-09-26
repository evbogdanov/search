import React from 'react';
import PropTypes from 'prop-types';
import './SearchList.css';
import SearchItem from '../SearchItem/SearchItem';


const SearchList = (props) => {
  const searchItems = props.matches.map(s => {
    const isExactMatch = (props.exactMatch !== null
                          && props.exactMatch.shortcut === s.shortcut);
    return <SearchItem key={s.shortcut}
                       search={s}
                       isExactMatch={isExactMatch}
                       selectShortcut={props.selectShortcut}
                       openUrl={props.openUrl} />;
  });
  return <ul className="SearchList">{searchItems}</ul>;
};

SearchList.propTypes = {
  exactMatch: PropTypes.object,  // can be null
  matches: PropTypes.array.isRequired,
  selectShortcut: PropTypes.func.isRequired,
  openUrl: PropTypes.func.isRequired,
};


export default SearchList;
