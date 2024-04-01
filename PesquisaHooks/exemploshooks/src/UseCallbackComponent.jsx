import React, { useState, useCallback } from 'react';

const UseCallbackComponent = () => {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <>
            <div className="container">
                <p>Count: {count}</p>
                <button onClick={increment}>Increment</button>
            </div>
        </>
    );
};

export default UseCallbackComponent;
