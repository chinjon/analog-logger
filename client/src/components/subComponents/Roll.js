import React, {Component} from 'react';

import Frame from './Frame';

class Roll extends Component{
    render() {
        return (
            <div>
            <div>Roll: {this.props.data.objectId}</div>
            <div>Brand: {this.props.data.film.brand} - {this.props.data.film.model}</div>
            {this.props.data.frames.map(item => 
                 <Frame key={item.number} data={item}/>
            )}
            </div>
        )
    }
}

export default Roll;