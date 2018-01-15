import React, { Component } from 'react';

import Roll from './subComponents/Roll';

export default class AllRolls extends Component {
    render() {
        return (
            <section>
                {(this.props.data.film).map((roll) => <Roll key={roll.objectId} data={roll} />)}
            </section>
        )
    }
        
}