import React, { useState } from 'react'

const FormEvents = () => {
    let [inputValue, setInputValue] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Form submitted with value:', inputValue);
    }

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <div>
            <h2>Form Events</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    value={inputValue}
                    onChange={handleChange}
                    placeholder='"Type something...'
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}


export default FormEvents;