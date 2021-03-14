import React, {useState} from "react"
import {AiFillCheckCircle} from "react-icons/ai";
import {RiDeleteBin2Line} from "react-icons/ri";
import {FaUndoAlt} from "react-icons/fa";


function List({list, setList}) {

    const finishTask = id => {
        const finishedList = list.map(task => {
            if (task.id === id) task.done = !task.done;
            return task;
        })

        setList(finishedList);
    }

    const deleteTask = id => {
        const newList = list.filter(task =>
            task.id !== id
        )

        setList(newList);

        localStorage.setItem('tasks',
            JSON.stringify(
                newList
            ))
    }

    return (
        <div className="List" >
            <ul>
                {
                    list.map(({id, task, done}) => (
                        <div className="displayFlex" key={id}>
                            <li style={done ? taskDone : taskNotDone} id={id}>{task}</li>

                            <button style={button} onClick={() => finishTask(id)}>
                                {!done ? <AiFillCheckCircle /> : <FaUndoAlt />}
                            </button>

                            <button style={button} onClick={() => deleteTask(id)}>
                                <RiDeleteBin2Line />
                            </button>

                        </div>
                    ))
                }
            </ul>
        </div >
    )
}

const button = {
    all: 'unset'
}

const taskDone = {
    color: 'grey',
    textDecoration: 'line-through 3px black',

}
const taskNotDone = {
    color: 'orange'
}

export default List
