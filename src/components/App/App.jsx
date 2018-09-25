import React, { Component } from 'react';
import './App.css';
import { searchPlaceholder } from '../../searches';
import Input from '../Input/Input';
import ButtonOpen from '../ButtonOpen/ButtonOpen';
import ButtonClear from '../ButtonClear/ButtonClear';
import SearchList from '../SearchList/SearchList';
import Message from '../Message/Message';


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

    let messageText = '';
    if (exactMatch !== null) {
      const [, baseUrl] = exactMatch.url.match(/https?:\/\/(.+?)\//);
      messageText = `Go to ${baseUrl}`;
    }
    else if (matches.length === 0) {
      messageText = 'Oops! Unknown shortcut.';
    }

    return (
      <div className="App">
        <h1 className="App__heading">Search by shortcuts</h1>
        <div className="App__input-and-buttons">
          <Input ref={inp => this.input = inp}
                 isBadQuery={this.state.isBadQuery}
                 query={this.state.query}
                 updateQuery={this.updateQuery.bind(this)}
                 openUrl={this.openUrl.bind(this)}/>
          <div className="App__button-open">
            <ButtonOpen openUrl={this.openUrl.bind(this)} />
          </div>
          <div className="App__button-clear">
            <ButtonClear query={this.state.query}
                         clearQuery={this.clearQuery.bind(this)} />
          </div>
        </div>
        <SearchList exactMatch={exactMatch}
                    matches={matches}
                    selectShortcut={this.selectShortcut.bind(this)} />
        <Message text={messageText} />
      </div>
    );
  };
}


export default App;
