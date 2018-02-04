import React, { Component } from 'react';


class NewRoll extends Component {
    constructor() {
        super();
        this.state = {

            brand: '',
            model: '',
            iso: '',
            expCounter: '',
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {

        this.setState({
              [event.target.name]: event.target.value
        })

        console.log(this.state)
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('ok')

        const newRoll = {
            film: {
                brand: this.state.brand,
                model: this.state.model,  
                iso: this.state.iso,  
                expCount: this.state.expCount,  
            }
        }

        fetch('/api/newroll', {
            method: 'POST',
            body: JSON.stringify(newRoll)
        });

        console.log(this.state)
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
                    <button>Submit</button>
                </form>
        )
    }
}


export default NewRoll;
