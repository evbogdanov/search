import React from 'react';
import './SearchList.css';
import SearchItem from '../SearchItem/SearchItem';


const SearchList = (props) => {
  const searchItems = props.matches.map(s => {
    const isExactMatch = (props.exactMatch !== null
                          && props.exactMatch.shortcut === s.shortcut);
    return <SearchItem key={s.shortcut}
                       isExactMatch={isExactMatch}
                       selectShortcut={props.selectShortcut}
                       search={s} />;
  });
  return <ul className="SearchList">{searchItems}</ul>;
};


export default SearchList;
