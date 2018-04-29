import React, { Component } from 'react';

import Roll from './subComponents/Roll';

export default class AllRolls extends Component {
    render() {
        return (
            <section>
                {console.log(this.props.data[0])}
                { this.props.data.length > 0 ? (this.props.data).map((roll) => <Roll key={roll._id} data={roll} deleteClick={this.props.deleteClick}/>) : <h2>Loading...</h2> }
            </section>
        )
    }
}