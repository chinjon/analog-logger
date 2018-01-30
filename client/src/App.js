import React, { Component } from 'react';

// import CurrentRoll from './components/CurrentRoll';
import AllRolls from './components/AllRolls';
import NewRoll from './components/subComponents/NewRoll';
// import mockData from './data/mockFilm.json';

class App extends Component {

  constructor(props) {
    super(props);


    this.state = {
      // mockData,
      current: null,
      response: null
    }
  }


  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.data }))
      .catch(err => console.log(err));
  }

  postTest = async (event) => {
    event.preventDefault();

    fetch('/api/test', {
      method: 'POST',
      headers: new Headers(),
    }).then((res) => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }


  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json()


    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    // const { mockData } = this.state;
    return (
      <div className="App" id="root">
        {/* <CurrentRoll /> */}
        <NewRoll />
        <section>
          <h3>Your Rolls</h3>
          <div>
            <button onClick={this.postTest}>Post</button>
          </div>
          <div className="rollContainer">
            {/* <AllRolls data={mockData} /> */}
            <AllRolls data={this.state.response ? this.state.response : ''} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
