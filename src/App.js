import React, {useState} from "react"
import Todo from './page/Todo';
import Counter from './page/Counter';

function App() {

    const [mode, setMode] = useState(false);

    return (
        <div>
            {
                mode ? <Counter /> : <Todo />
            }
        </div>
    );
}

export default App;
