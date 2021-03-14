import React, {useState} from "react"

function List({list, setList}) {

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
                    list.map(({id, task}) => (
                        <div key={id}>
                            <li id={id}>{task}</li>
                            <button onClick={() => deleteTask(id)}>❌</button>
                        </div>
                    ))
                }
            </ul>
        </div >
    )
}

export default List
