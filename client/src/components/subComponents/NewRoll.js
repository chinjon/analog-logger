import React, { Component } from 'react';


class NewRoll extends Component {
    constructor() {
        super();
        this.state = {
            film: {
                brand: '',
            
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value)

        this.setState({
            film: {
                brand: event.target.value
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('ok')

        fetch('/api/newroll', {
            method: 'POST',
            body: this.state,
        });
    }

    render() {
        return ( 
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="filmBrand" value={this.state.value} onChange={this.handleChange}></input>
                    <button>Submit</button>
                </form>
        )
    }
}


export default NewRoll;
