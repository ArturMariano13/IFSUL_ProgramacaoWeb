import React, { useState, useMemo } from 'react';

const fibonacci = (n) => {
    if (n <= 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
};

const UseMemoComponent = () => {
    const [count, setCount] = useState(0);

    const fibValue = useMemo(() => {
        return fibonacci(count);
    }, [count]);

    return (
        <>
            <div className="container">
                <p>Count: {count}</p>
                <p>Fibonacci value: {fibValue}</p>
                <button onClick={() => setCount(count + 1)}>Increment Count</button>
            </div>
        </>
    );
};

export default UseMemoComponent;
