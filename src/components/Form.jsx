// import React, {useState} from "react"

import {useState} from "react";

function Form({list, setList}) {

    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (!input) {
            alert('empty task');
            return;
        };

        const task = {
            id: list.length + 1,
            task: input
        }

        localStorage.setItem('tasks',
            JSON.stringify(
                [...list, task]
            ))

        setList([...list, task]);

        setInput('');
    }

    return (
        <form onSubmit={handleSubmit} className="Form">
            <input onChange={handleChange}
                value={input}
                placeholder="New task..."
            ></input>
            <button style={componentStyle}>Add</button>
        </form>
    )
}

const componentStyle = {
    backgroundColor: 'red',
    color: 'white',
    fontSize: '1.1em',
    border: '1px solid black'
}

export default Form
