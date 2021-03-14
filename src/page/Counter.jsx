import {useState, useEffect} from "react"

function Counter() {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${counter} times`;
    }, [counter])

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setCounter(counter - 1)}> - </button>
        </div>
    )
}

export default Counter
