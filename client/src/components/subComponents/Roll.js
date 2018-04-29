import React, {Component} from 'react';

class Roll extends Component {
    render() {
        return (
            <div>
                <div>
                    <span>Brand: {this.props.data.film.brand}</span> - 
                    <span>{this.props.data.film.model}</span> | 
                    <span>ISO: {this.props.data.film.iso}</span> 
                    <button data-frame-id={this.props.data._id} onClick={this.props.deleteClick} >Delete</button></div>
                {/* {this.props.data.frames.map(item => 
                    <Frame key={item.number} data={item}/>
                )} */}     
            </div>
        )
    }
}

export default Roll;