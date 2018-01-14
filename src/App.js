import React, { Component } from 'react';

import CurrentRoll from './components/CurrentRoll';
import mockData from './data/mockFilm.json';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      mockData
    }
  }

  render() {
    const { mockData } = this.state;
    return (
      <div className="App" id="root">
        <CurrentRoll />
        <section>
          <h3>Everything</h3>
          <div>
            { mockData.film.map(roll => 
              <div key={roll.objectId}>
                <div>Roll: {roll.objectId}</div>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
