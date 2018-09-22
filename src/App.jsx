import React, { Component } from 'react';
import './App.css';
import Input from './Input/Input';
import SearchItem from './SearchItem/SearchItem';
import {searchPlaceholder} from './searches';

class App extends Component {
  colorNormal = 'transparent';
  colorError = 'pink';

  state = {
    query: '',
    inputBackground: this.colorNormal
  };

  cannotOpenUrl = () => {
    this.setState({inputBackground: this.colorError});
    setTimeout(() => this.setState({inputBackground: this.colorNormal}), 500);
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
    return (
      <div className="App">
        <h1 className="App__heading">Search by shortcuts</h1>
        <Input ref={inp => this.input = inp}
               background={this.state.inputBackground}
               query={this.state.query}
               updateQuery={this.updateQuery.bind(this)}
               openUrl={this.openUrl.bind(this)}/>
        <hr />
        <button onClick={this.openUrl}>Go</button>
        <button onClick={this.clearQuery}>Clear</button>
        <hr />
        <ul>
          {searchItems}
        </ul>
      </div>
    );
  };
}


export default App;
