import '../App.css';
import React, {useState} from "react"
import FormWrap from '../components/Form';
import List from '../components/List';

function Todo() {
    const [list, setList] = useState(
        JSON.parse(localStorage.getItem(
            "tasks"
        )) || []);

    return (
        <div className="App">
            <FormWrap list={list} setList={setList} />
            <List list={list} setList={setList} />
        </div>
    );
}

export default Todo
