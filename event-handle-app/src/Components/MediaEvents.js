import React from 'react'

const MediaEvents = () => {

    const handlePlay = () => {
        console.log('video played');
    }

    const handlePause = () => {
        console.log('Video paused');
    }

    const handleEnded = () => {
        console.log('Video ended');
    }

    return (
        <div>
            <h2>Media Events</h2>
            <video controls style={{ width: '30%' }} 
                onPlay={handlePlay}
                onPause={handlePause}
                onEnded={handleEnded}>
  <source src={process.env.PUBLIC_URL + '/vdo.mp4'} type="video/mp4" />
  Your browser does not support the video tag.
</video>
        </div>
    )
}


export default MediaEvents