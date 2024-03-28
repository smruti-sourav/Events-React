import React from 'react';

const DragEvents = () => {
    const handleDragStart = (event) => {
        console.log('Drag started');
    };

    const handleDragEnd = (event) => {
        console.log('Drag ended');
    };

    return (
        <div>
            <h2>Drag Events</h2>
            <div
                draggable
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: 'cyan',
                    margin: '20px',
                    textAlign: 'center',
                    lineHeight: '100px',
                    cursor: 'move',
                }}
            >
                Drag me
            </div>
        </div>
    );
};

export default DragEvents;