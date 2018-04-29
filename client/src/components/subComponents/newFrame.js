import react, { Component } from 'react';

export default class NewFrame extends Component {
    constructor() {
        super();
        this.state = {
            frame: '',
            dateTaken: '',
            aperture: '',
            shutterSpeed: '',
        }
    }

    render() {
        return(
            <div>
                <form>
                    <input placeholder="frame"/>
                    <input placeholder="date taken"/>
                </form>
            </div>
        )
    }
}