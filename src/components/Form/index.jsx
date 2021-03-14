import {FormWrap, Button, Input} from './formElements';
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
            task: input,
            done: false
        }

        localStorage.setItem('tasks',
            JSON.stringify(
                [...list, task]
            ))

        setList([...list, task]);

        setInput('');
    }

    return (
        <FormWrap onSubmit={handleSubmit} className="Form">
            <Input onChange={handleChange}
                value={input}
                placeholder="New task..."
            ></Input>
            <Button>Add</Button>
        </FormWrap>
    )
}

export default Form
