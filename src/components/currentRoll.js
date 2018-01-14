import React, {Component} from 'react';

import CurrentRollFrameInput from './subComponents/CurrentRollFrameInput';

class CurrentRoll extends Component {
    render() {
        return (
            <div id="currentRollContainer">
                <section className="CurrentRollHeader">
                    <h1>Current Roll</h1>
                </section>
                <CurrentRollFrameInput />
            </div>
        )
    }
}

export default CurrentRoll;