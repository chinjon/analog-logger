import React, { Component } from 'react';

import CurrentRoll from './components/CurrentRoll';
import AllRolls from './components/AllRolls';
import mockData from './data/mockFilm.json';

class App extends Component {

  constructor(props) {
    super(props);


    this.state = {
      mockData,
      current: null,
      response: ''
    }
  }


  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };


  render() {
    const { mockData } = this.state;

    return (
      <div className="App" id="root">
        <CurrentRoll />
        <section>
          <h3>Your Rolls {this.state.response}</h3>
          <div className="rollContainer">
            <AllRolls data={mockData} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
