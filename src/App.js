import React, { Component } from 'react';

import CurrentRoll from './components/CurrentRoll';

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
