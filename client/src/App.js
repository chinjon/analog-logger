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
      response: null,
      response2: []
    }
  }


  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.data }))
      .catch(err => console.log(err));

    this.callApi2()
      // .then(res => this.setState({ response2: res.data }))
      .then(res => this.setState({response2: res}))
      .catch(err => console.log(err));
  }

  // postTest = async (event) => {
  //   event.preventDefault();
  //   fetch('/api/test', {
  //     method: 'POST',
  //     headers: new Headers(),
  //   }).then((res) => res.json())
  //   .then(data => console.log(data))
  //   .catch(err => console.log(err))
  // }

  callApi2 = async () => {
    const RESPONSE = await fetch('/api/rolls');
    const BODY = await RESPONSE.json();

    console.log(BODY)
    if (RESPONSE.status !== 200) throw Error(BODY.message);
    return BODY;
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
          <div className="rollContainer">
            {/* <AllRolls data={mockData} /> */}
            <AllRolls data={this.state.response2 ? this.state.response2 : ''} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
