import React from 'react';

const WindowEvents = () => {
    const handleResize = () =>{
        console.log("Window resized");
    }


React.useEffect( () => {
    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    }
}, [])

return (
<div>
    <h2>Window Events </h2>
</div>
)
};

export default WindowEvents;
