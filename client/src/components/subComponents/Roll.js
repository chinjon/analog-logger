import React, {Component} from 'react';

// import Frame from './Frame';

class Roll extends Component{
    render() {
        return (
            <div>
                {console.log(this.props)}
                <div><span>Brand: {this.props.data.brand}</span> - <span>{this.props.data.model}</span> | <span>ISO: {this.props.data.iso}</span></div>
                {/* {this.props.data.frames.map(item => 
                    <Frame key={item.number} data={item}/>
                )} */}     
            </div>
        )
    }
}

export default Roll;