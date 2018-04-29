import React, {Component} from 'react';

class Roll extends Component {
    render() {
        // TODO put at app level
        const testDeleteCall = async (e) => {
            e.preventDefault();
            console.log(e.target.attributes['data-frame-id'].value);
            
           const RESPONSE = await fetch(`/api/delete/roll/${e.target.attributes["data-frame-id"].value}`, {
               method: 'DELETE'
           });
            const BODY = await RESPONSE.json();
 
            console.log(BODY)
        }

        return (
            <div>
                {console.log(this.props)}
                <div>
                    <span>Brand: {this.props.data.film.brand}</span> - 
                    <span>{this.props.data.film.model}</span> | 
                    <span>ISO: {this.props.data.film.iso}</span> 
                    <button data-frame-id={this.props.data._id} onClick={testDeleteCall} >Delete</button></div>
                {/* {this.props.data.frames.map(item => 
                    <Frame key={item.number} data={item}/>
                )} */}     
            </div>
        )
    }
}

export default Roll;