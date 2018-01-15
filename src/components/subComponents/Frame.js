import React, { Component } from 'react';

export default class Frame extends Component {

    render() {
        return ( 
            <div>
                <span>Frame: {this.props.data.number}</span> | <span>Date Taken: {this.props.data.dateTaken}</span>
            </div>
        )
    }
}
