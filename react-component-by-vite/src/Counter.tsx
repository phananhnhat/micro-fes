import {useEffect, useState} from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    console.log("Component by vite render");

    useEffect(() => {
        console.log("Component by vite mounted");
        // window.xxx3 = React
    }, []);

    return (
        <div style={{
            backgroundColor: "rgba(25, 230, 40, 0.4)",
            color: "white",
            padding: 20
        }}>
            <div>This is counter react by Vite</div>
            <div>Count = {count}</div>
            <button onClick={() => setCount(count + 1)}>Add One</button>
        </div>
    );
};

export default Counter;