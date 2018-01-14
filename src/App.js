import React, { Component } from 'react';

import CurrentRoll from './components/currentRoll.js';

class App extends Component {
  render() {
    return (
      <div className="App" id="root">
        <CurrentRoll />
      </div>
    );
  }
}

export default App;
