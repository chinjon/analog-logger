import React, { Component } from 'react';
import AllRolls from './components/AllRolls';
import NewRoll from './components/subComponents/NewRoll';

import  getRollsData  from './libs/api/getRollsData';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      current: null,
      response: null,
      response2: []
    }
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.data }))
      .catch(err => console.log(err));

    getRollsData()
      // .then(res => this.setState({ response2: res.data }))
      .then(res => this.setState({response2: res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json()


    if (response.status !== 200) throw Error(body.message);
    return body;
  };
  
/** 
 * @description Function that executes DELETE request to database
 *
 * @param { Object } e: event object
 * 
 * @returns 
 */
  
  testDeleteCall = async (e) => {
    e.preventDefault();
    console.log(e.target.attributes['data-frame-id'].value);
    
   const RESPONSE = await fetch(`/api/delete/roll/${e.target.attributes["data-frame-id"].value}`, {
       method: 'DELETE'
   });
    const BODY = await RESPONSE.json();

    this.getRollsData()
    .then(res => this.setState({response2: res}))
    .catch(err => console.log(err));
  }

  render() {
    console.log(this.testDeleteCall)
    return (
      <div className="App" id="root">
        {/* <CurrentRoll /> */}
        <NewRoll />
        <section>
          <h3>Your Rolls</h3>
          <div className="rollContainer">
            {/* <AllRolls data={mockData} /> */}
            <AllRolls data={this.state.response2 ? this.state.response2 : ''} deleteClick={this.testDeleteCall} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
