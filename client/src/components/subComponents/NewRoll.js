import React, { Component } from 'react';

class NewRoll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: '',
            model: '',
            iso: '',
            expCounter: '',
            expDate: new Date()
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
              [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        const newRoll = {
            film: {
                brand: this.state.brand,
                model: this.state.model,  
                iso: this.state.iso,  
                expCount: this.state.expCount,
                expDate: this.state.expDate,  
            }
        }

        fetch('/api/newroll', {
            method: 'POST',
            body: JSON.stringify(newRoll)
        });

        this.setState({
            brand: '',
            model: '',
            iso: '',
            expCount: '',
            expDate: '',
        })
    }

    render() {
        return ( 
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="brand"  
                        value={this.state.brand} 
                        onChange={this.handleChange}  
                        placeholder="Film Brand"
                    />
                    <input 
                        type="text" 
                        name="model" 
                        value={this.state.model} 
                        onChange={this.handleChange} 
                        placeholder="Film Model"
                    />
                    <input 
                        type="text" 
                        name="iso" 
                        value={this.state.iso} 
                        onChange={this.handleChange} 
                        placeholder="Film Speed/ISO"
                    />
                    <input 
                        type="number" 
                        name="expCount" 
                        value={this.state.expCount} 
                        onChange={this.handleChange} 
                        placeholder="Exposures"
                    />
                    <input 
                        type="date" 
                        name="expDate" 
                        value={this.state.expDate} 
                        onChange={this.handleChange} 
                        placeholder="Expiration Date"
                    />
                    <button>Submit</button>
                </form>
        )
    }
}


export default NewRoll;
