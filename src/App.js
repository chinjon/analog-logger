import React, { Component } from 'react';

import CurrentRoll from './components/CurrentRoll';
import AllRolls from './components/AllRolls';
import mockData from './data/mockFilm.json';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      mockData,
      current: null
    }
  }

  render() {
    const { mockData } = this.state;

    return (
      <div className="App" id="root">
        <CurrentRoll />
        <section>
          <h3>Your Rolls</h3>
          <div className="rollContainer">
            <AllRolls data={mockData} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
