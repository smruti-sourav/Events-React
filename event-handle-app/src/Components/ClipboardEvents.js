import React from 'react';

const ClipboardEvents = () => {
    const handleCopy = (event) => {
        console.log('Text copied:', event.clipboardData.getData('text'));
    };

    const handleCut = (event) => {
        console.log('Text cut:', event.clipboardData.getData('text'));
    };

    const handlePaste = (event) => {
        console.log('Text pasted:', event.clipboardData.getData('text'));
    };

    return (
        <div>
            <h2>Clipboard Events</h2>
            <textarea
                placeholder="Try copying, cutting, and pasting text here"
                onCopy={handleCopy}
                onCut={handleCut}
                onPaste={handlePaste}
                style={{ width: '300px', height: '100px' }}
            />
        </div>
    );
};

export default ClipboardEvents;
