import React from 'react';

const MouseEvents = () => {
    const handleClicked = () => {
        console.log('Mouse Clicked');
    }

    const handleMouseEnter = () => {
        console.log('Mouse entered');
    }

    const handleMouseLeave = () => {
        console.log('Mouse left');
    };

    return (
        <div>
            <h2>Mouse Events</h2>
            <button onClick={handleClicked} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                Hover over me and clicked
            </button>
        </div>
    )
}


export default MouseEvents;