import React, { useEffect } from 'react'

const StorageEvents = () => {
    const handleStorageChange = (event) => {
        console.log('Storage changed:', event.key, event.newValue);
    }

    useEffect (() => {
        window.addEventListener('storage', handleStorageChange)

        return () => {
            window.removeEventListener('storage', handleStorageChange)
        }
    }, [])

    return (
        <div>
            <h2>Storage Events</h2>
            <p>Open this page in multiple tabs/windows and see storage change events in action</p>

        </div>
    )
}

export default StorageEvents;