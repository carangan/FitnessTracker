import { useState } from 'react';

const Counter = (props) => {

    const {name} = props

    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Counter: {name}</h1>
            <button onClick={() => setCount(count + 1)}> Count Up </button>
            <button onClick={() => setCount(count - 1)}> Count Down </button>
            <div>Count: {count}</div>
        </>
    );
};

export default Counter;
