import React, { Component } from 'react';
import './App.css';
import Input from './Input/Input';
import SearchItem from './SearchItem/SearchItem';
import {searchPlaceholder} from './searches';
import Message from './Message/Message';

class App extends Component {
  state = {
    query: '',
    isBadQuery: false
  };

  cannotOpenUrl = () => {
    this.setState({isBadQuery: true});
    setTimeout(() => this.setState({isBadQuery: false}), 500);
  };

  focusOnInput = () => {
    this.input.input.focus();
  };

  updateQuery = (query) => {
    this.setState({query});
  };

  clearQuery = () => {
    this.setState({query: ''});
    this.focusOnInput();
  };

  parseQuery = () => {
    const words = this.state.query.split(/\s+/);
    const shortcut = words.shift();
    const uriComponent = encodeURIComponent(words.join(' '));
    return {shortcut, uriComponent};
  };

  getSearchesMatchingQuery = () => {
    const {shortcut} = this.parseQuery();
    let exactMatch = null;
    const matches = this.props.searches.filter(s => {
      if (s.shortcut === shortcut || s.alias === shortcut) {
        exactMatch = s;
      }
      return s.shortcut.startsWith(shortcut) ||
        (s.alias !== null && s.alias.startsWith(shortcut));
    });
    return {exactMatch, matches};
  };

  openUrl = () => {
    this.focusOnInput();
    const {exactMatch} = this.getSearchesMatchingQuery();
    if (exactMatch === null) {
      this.cannotOpenUrl();
      return;
    }
    const {uriComponent} = this.parseQuery();
    const url = exactMatch.url.replace(searchPlaceholder, uriComponent);
    window.open(url);
  };

  selectShortcut = (shortcut) => {
    const query = this.state.query;
    const i = query.indexOf(' ');
    const newQuery = (query !== '' && i !== -1) ? (shortcut + query.substring(i))
                                                : `${shortcut} `;
    this.setState({query: newQuery});
    this.focusOnInput();
  };

  render = () => {
    const {exactMatch, matches} = this.getSearchesMatchingQuery();
    const searchItems = matches.map(s => {
      const isExactMatch = (
        exactMatch !== null && exactMatch.shortcut === s.shortcut
      );
      return <SearchItem key={s.shortcut}
                         isExactMatch={isExactMatch}
                         selectShortcut={this.selectShortcut.bind(this)}
                         search={s} />;
    });

    const clearButtonStyle = {};
    if (this.state.query === '') {
      clearButtonStyle.display = 'none';
    }

    let message = null;
    if (exactMatch !== null) {
      const [, baseUrl] = exactMatch.url.match(/https?:\/\/(.+?)\//);
      message = <Message text={`Go to ${baseUrl}`} />;
    }
    else if (matches.length === 0) {
      message = <Message text="Oops! Unknown shortcut." />;
    }

    return (
      <div className="App">
        <h1 className="App__heading">Search by shortcuts</h1>
        <div className="App__input">
          <Input ref={inp => this.input = inp}
                 isBadQuery={this.state.isBadQuery}
                 query={this.state.query}
                 updateQuery={this.updateQuery.bind(this)}
                 openUrl={this.openUrl.bind(this)}/>
          <button className="App__open-button" onClick={this.openUrl}></button>
          <button className="App__clear-button"
                  style={clearButtonStyle}
                  onClick={this.clearQuery}>
            <span className="App__clear-button-left"></span>
            <span className="App__clear-button-right"></span>
          </button>
        </div>
        <ul className="App__search-items">
          {searchItems}
        </ul>
        {message}
      </div>
    );
  };
}


export default App;
