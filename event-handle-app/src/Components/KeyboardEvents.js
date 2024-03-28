import React from 'react';

const KeyboardEvents = () => {
    // const handleKeyPress = (event) => {
    //     console.log('Key pressed:', event.key);
    // }

    const handleKeyDown = (event) => {
        console.log('Key down:', event.key);
    }

    const handleKeyUp = (event) => {
        console.log('Key up:', event.key);
    }

    return(
        <div>
            <h2>Keyboard Events</h2>
            <input  type='text' 
                    placeholder='type somethings...'
                    onKeyDown={handleKeyDown}
                    onKeyUp={handleKeyUp}
                    />
                
        </div>
    )
}

export default KeyboardEvents