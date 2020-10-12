import React, {useState} from 'React';

export default function Clickers() {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1)
    };
    const decrease = () => {
        setCount(count - 1)
    };

    return (
        <div>
            <button onClick={increase}>Up</button>
            <button onClick={decrease}>Down</button>
            <button>Down</button>
            <span data-test-id="count">{count}</span>
        </div>
    )
}