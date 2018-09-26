import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
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

  /* ---------------------------------------------------------------------------
   * These things don't belong to the state. They're more like computed state,
   * depending on the value of `this.state.query`
   * ---------------------------------------------------------------------------
   * `exactMatch`   // one of `this.props.searches` which shortcut exactly
   *                // matches the first word in `this.state.query`
   *                // (default: null)
   *
   * `matches`      // all `this.props.searches` which shortcuts start with the
   *                // first word in `this.state.query`
   *
   * `url`          // website URL to open
   *                // (or null if no exact match)
   *
   * `messageText`  // some kind of status displayed in Message component
   *                // (default: '')
   */
  computedState = () => {
    const words = this.state.query.split(/\s+/);
    const shortcut = words.shift();

    let exactMatch = null;
    const matches = this.props.searches.filter(s => {
      if (s.shortcut === shortcut || s.alias === shortcut) {
        exactMatch = s;
      }
      return s.shortcut.startsWith(shortcut) ||
        (s.alias !== null && s.alias.startsWith(shortcut));
    });

    let [url, baseUrl] = [null, null];
    if (exactMatch !== null) {
      const uriComponent = encodeURIComponent(words.join(' '));
      url = exactMatch.url.replace(searchPlaceholder, uriComponent);
      [, baseUrl] = url.match(/https?:\/\/(.+?)\//);
    }

    let messageText = '';
    if (baseUrl !== null) {
      messageText = `Go to ${baseUrl}`;
    }
    else if (matches.length === 0) {
      messageText = 'Oops! Unknown shortcut.';
    }

    return {
      exactMatch,
      matches,
      url,
      messageText,
    };
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

  openUrl = (url) => {
    this.focusOnInput();
    if (url === null) {
      this.cannotOpenUrl();
      return;
    }
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
    const {exactMatch, matches, url, messageText} = this.computedState();

    return (
      <div className="App">
        <h1 className="App__heading">Search by shortcuts</h1>
        <div className="App__input-and-buttons">
          <Input ref={inp => this.input = inp}
                 isBadQuery={this.state.isBadQuery}
                 query={this.state.query}
                 updateQuery={this.updateQuery.bind(this)}
                 openUrl={this.openUrl.bind(this, url)} />
          <div className="App__button-open">
            <ButtonOpen openUrl={this.openUrl.bind(this, url)} />
          </div>
          <div className="App__button-clear">
            <ButtonClear query={this.state.query}
                         clearQuery={this.clearQuery.bind(this)} />
          </div>
        </div>
        <SearchList exactMatch={exactMatch}
                    matches={matches}
                    selectShortcut={this.selectShortcut.bind(this)}
                    openUrl={this.openUrl.bind(this, url)} />
        <Message text={messageText} />
      </div>
    );
  };
}

App.propTypes = {
  searches: PropTypes.array.isRequired,
};


export default App;
