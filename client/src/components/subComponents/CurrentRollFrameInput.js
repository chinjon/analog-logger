import React from 'react';

const CurrentRollFrameInput = () => {
    return (
        <section>
            <form>
                <label>Enter Frame Data:</label>
                <input type="text" placeholder="iso" />
                <input type="text" placeholder="focal length" />
                <input type="text" placeholder="aperture" />
                <input type="text" placeholder="shutter speed" />
            </form>
        </section>
    )
}

export default CurrentRollFrameInput;